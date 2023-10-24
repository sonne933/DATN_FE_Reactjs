import React, { Component, useState } from 'react';
import "./css/Signup.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import BaseUrl from '../utils/BaseUrl';
import { Spin } from "antd";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { loginSuccess, logout } from '../redux/actions';
import { useDispatch } from 'react-redux';


function Register() {
  const [nameAccount, setNameAccount] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [typeAccount, setTypeAccount] = useState(1);
  const [status, setStt] = useState(1);
  const [loading,setLoading] =useState(false)
  const [validator, setVadidator] = useState("")
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Gọi hook
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isRePasswordVisible, setRePasswordVisibility] = useState(false);

  // hàm giúp hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevVisibility => !prevVisibility);
  };
  const toggleRePasswordVisibility = () => {
    setRePasswordVisibility(prevVisibility => !prevVisibility);
  };

  const validateAll = () => {
    const msg = {}
    if(isEmpty(email)){ //true
      msg.email = "Email không được bỏ trống"
    }else if(!isEmail(email)){
      msg.email = "Nhập sai định dạng Email"
    }
    if(phoneNumber.length<10){
      msg.phoneNumber = "Không đúng định dạng";
    }
    if(phoneNumber.charAt(0)!="0"){
      msg.phoneNumber = "Không đúng định dạng";
    }
    if(isEmpty(phoneNumber)){
      msg.phoneNumber = "Số điện thoại không được bỏ trống"
    }
    if(isEmpty(nameAccount)){
      msg.nameAccount = "Tên người dùng không được bỏ trống"
    }
    if(isEmpty(address)){
      msg.address = "Địa chỉ không được bỏ trống"
    }
    if(isEmpty(password)){
      msg.password = "Mật khẩu không được bỏ trống"
    }
    if(password.length<6){
      msg.password = "Mật khẩu tối thiểu 6 kí tự"
    }
    if(isEmpty(rePassword)){
      msg.rePassword = "Nhập lại mật khẩu của bạn"
    }else if(password!=rePassword){
      msg.rePassword = "Mật khẩu không khớp"
    }

    setVadidator(msg)
    if(Object.keys(msg).length>0) return false
    return true
  }
  
  // hàm đăng ký backend
  const handleSignup = async (e) => {
    e.preventDefault();
  const isValid = validateAll()
  if(!isValid) return;
    setLoading(true)
    let regObj = { email: email.toLowerCase(), phoneNumber, address, nameAccount, password, status, typeAccount };
    const res = await axios.post(BaseUrl + 'account/register', regObj);
    console.log(res?.data);
    if(res?.data.status==="0"){
      setLoading(false)
        toast.error(res?.data.message);
    }else{
      sessionStorage.setItem("verify",JSON.stringify(res?.data));
      navigate('/verify')
      setLoading(false)
    }
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
        sessionStorage.setItem('user',r?.data.account.id);
        dispatch(loginSuccess(r?.data.account));
        navigate("/");
      }
    }catch(err){
      setLoading(false)
      console.log(err);
    }
  }

  return (
    // Signup Form
    <Spin className='mt-40 pt-40' spinning={loading}>
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header className='form-content-title'>Đăng ký</header>
          <form action="#" onSubmit= {handleSignup} >
            <div className="field input-field">
              <input type="text" placeholder="Tên" name='name' className="input" value={nameAccount} onChange={(e) => setNameAccount(e.target.value)} />
            </div>
            <p className="text-red-500 text-xs mb-4">{validator.nameAccount}</p>
            <div className="field input-field">
              <input type="email" placeholder="Email" name='email' className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <p className="text-red-500 text-xs mb-4">{validator.email}</p>
            <div className="field input-field">
              <input type="tel" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" placeholder="Số điện thoại" name='phone' className="input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <p className="text-red-500 text-xs mb-4">{validator.phoneNumber}</p>
            <div className="field input-field">
              <input type="text" placeholder="Địa chỉ" name='address' className="input" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <p className="text-red-500 text-xs mb-4">{validator.address}</p>
            <div className="field input-field">
              <input type={isPasswordVisible ? "text" : "password"} placeholder="Nhập mật khẩu" name='password' className="password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
              <i className={isPasswordVisible ? "bx bx-hide eye-icon" : "bx bx-show eye-icon"}  onClick={togglePasswordVisibility} />
            </div>
            <p className="text-red-500 text-xs mb-4">{validator.password}</p>
            <div className="field input-field">
              <input type={isRePasswordVisible ? "text" : "password"} placeholder="Nhập lại mật khẩu" name='repassword' className="password" minLength={6} value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
              <i className={isRePasswordVisible ? "bx bx-hide eye-icon" : "bx bx-show eye-icon"}  onClick={toggleRePasswordVisibility} />
            </div>
            <p className="text-red-500 text-xs mb-4">{validator.rePassword}</p>
            <div className="field button-field">
              <button type="submit" onClick={handleSignup}>Đăng ký</button>
            </div>
          </form>
          <div className="form-link">
            <span>Bạn đã có tài khoản? <Link to="/signup">Đăng nhập</Link></span>
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
export default Register;
