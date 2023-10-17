import React, { useState, useEffect } from 'react';
import "./css/Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { auth, db } from '../firebaseConfig'

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../redux/actions';
import { doc, getDoc } from 'firebase/firestore';
import BaseUrl from '../utils/BaseUrl';
import { Spin } from "antd";



function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false)

// hàm đăng nhập backend
const handleLogin = async (e) => {
  setLoading(true)
  e.preventDefault();
  let regObj = { email: email.toLowerCase(), password };
  try {
    const res = await axios.post(BaseUrl + 'account/login', regObj);
    setLoading(false) 
    if (res?.data.status === '1') {
      sessionStorage.setItem('user', res?.data.account.id);
      dispatch(loginSuccess(res?.data.account));  // <---- Update this line

      if (res?.data.account.typeAccount < 2) navigate("/");
      else if (res?.data.account.typeAccount < 3) navigate("/seller");
      else navigate('/admin');
    } else {
      alert(res?.data.message);
    }
  }catch (err) {
    setLoading(false)
    alert('Khong co ket noi');
  }
};


const [isPasswordVisible, setPasswordVisibility] = useState(false);

const togglePasswordVisibility = () => {
  setPasswordVisibility(prevVisibility => !prevVisibility);
};

return (
  <Spin className='mt-40 pt-40' spinning={loading}>
  <section className="container forms">

    <div className="form login">
      <div className="form-content">
        <header className='form-content-title'>Đăng nhập</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="field input-field">
            <input type={isPasswordVisible ? "text" : "password"} placeholder="Mật khẩu" className="password" onChange={e => setPassword(e.target.value)} />
            <i className={isPasswordVisible ? "bx bx-hide eye-icon" : "bx bx-show eye-icon"}  onClick={togglePasswordVisibility}/>
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass" >Quên mật khẩu?</a>
          </div>
          <div className="field button-field">
            <button onClick={handleLogin}>Đăng nhập</button>
          </div>
        </form>
        <div className="form-link">
          <span>Bạn chưa có tài khoản? <Link to="/signin">Đăng ký</Link></span>
        </div>
        <div className="form-link">
          <Link to="/">Thoát</Link>
        </div>
      </div>
      <div className="line" />
      <div className="media-options">
        <a href="#" className="field facebook" >
          <i className="bx bxl-facebook facebook-icon" />
          <span>Đăng nhập với Facebook</span>
        </a>
      </div>
     
    </div>


  </section>
  </Spin>
);
}


export default Signin;