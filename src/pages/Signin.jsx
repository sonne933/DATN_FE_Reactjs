import React, { useState, useEffect } from 'react';
import "./css/Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { auth, db } from '../firebaseConfig'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { toast } from 'react-toastify';
import { connect, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../redux/actions';
import { doc, getDoc } from 'firebase/firestore';
import BaseUrl from '../utils/BaseUrl';
import { Spin } from "antd";



function Signin({ isLoggedIn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false)
  const [profile, setProfile] = useState(null);

  // hàm giúp hiển thị mật khẩu
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevVisibility => !prevVisibility);
  };

  // hàm đăng nhập =fb backend
  const handleLoginFB = async (response)=>{
    const userfb = {idFacebook: response.data.id, nameAccount:response.data.name,image:response.data.url,typeAccount: 1};
    try{
      setLoading(true)
      const r = await axios.post(BaseUrl+'account/loginFB', userfb);
      if(r?.data.status=="0")
      {
        toast.error(r?.data.message)
        setLoading(false)
      }else{
        sessionStorage.setItem('isLoggedIn', 'true');
        const userData = r?.data.account;
        // Lưu toàn bộ thông tin người dùng vào sessionStorage
        sessionStorage.setItem('user', JSON.stringify(userData));
        dispatch(loginSuccess(userData));
        navigate("/");
      }
    }catch(err){
      setLoading(false)
      console.log(err);
    }
  }
  

  // hàm đăng nhập =tkđk backend
  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault();
    let regObj = { email: email.toLowerCase(), password };
    try {
      const res = await axios.post(BaseUrl + 'account/login', regObj);
      setLoading(false) 
      if (res?.data.status === '1') {
        sessionStorage.setItem('isLoggedIn', 'true');
        const userData = res?.data.account;
        // Lưu toàn bộ thông tin người dùng vào sessionStorage
        sessionStorage.setItem('user', JSON.stringify(userData));
        dispatch(loginSuccess(userData));

        if (userData.typeAccount < 2) navigate("/");
        else if (userData.typeAccount < 3) navigate("/seller");
        else navigate('/admin');
      } else {
        alert(res?.data.message);
      }
    }catch (err) {
      setLoading(false)
      alert('Khong co ket noi');
    }
  };



  useEffect(() => {
    const loggedInUserJSON = sessionStorage.getItem('user');
    if (loggedInUserJSON) {
        const userData = JSON.parse(loggedInUserJSON);
        if (!isLoggedIn) { // chỉ cập nhật trạng thái nếu người dùng chưa đăng nhập
            dispatch(loginSuccess(userData));
        }
        // Điều hướng người dùng dựa trên loại tài khoản của họ
        if (userData.typeAccount < 2) navigate("/");
        else if (userData.typeAccount < 3) navigate("/seller");
        else navigate('/admin');
    }
  }, [dispatch, navigate, isLoggedIn]);  // thêm isLoggedIn vào dependencies của useEffect


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
      <LoginSocialFacebook appId='6762725937139885'
        fieldsProfile='name,picture'
        onResolve={(response) => {setProfile(response.data);handleLoginFB(response);}}
        onReject={(error)=>{alert("Login Facebook thất bại!");}}
        >
        <div className="media-options">
          <a href="#" className="field facebook" >
            <i className="bx bxl-facebook facebook-icon" />
            <span>Đăng nhập với Facebook</span>
          </a>
        </div>
      </LoginSocialFacebook>
    </div>


  </section>
  </Spin>
);
}


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Signin);