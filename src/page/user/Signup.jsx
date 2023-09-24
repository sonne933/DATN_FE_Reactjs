import React, { Component, useState } from 'react';
import "./css/Signup.css";
import { Link ,useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';



function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Gọi hook

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        name,
        email,
        phone,
        address,
        status: 0 // Thêm trường status cho người dùng mới
      });
      alert("Đăng ký thành công!");
      navigate('/signin');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Địa chỉ email này đã được sử dụng. Vui lòng chọn một địa chỉ email khác.');
      } else {
        alert(error.message);
      }
    }
  }



  return (
    <section className="container forms">
      {/* Signup Form */}
      <div className="form signup">
        <div className="form-content">
          <header className='form-content-title'>Đăng ký</header>
          <form action="#" onSubmit={(e) => { e.preventDefault(); handleRegister(); }} >
            <div className="field input-field">
              <input type="text" placeholder="Tên" name='name' className="input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="email" placeholder="Email" name='email' className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="field input-field">
              <input type="number" placeholder="Số điện thoại" name='phone' className="input" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="field input-field">
              <input type="text" placeholder="Địa chỉ" name='address' className="input"value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="password" placeholder="Nhập mật khẩu" name='password' className="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="field button-field">
              <button >Đăng ký</button>
            </div>
          </form>
          <div className="form-link">
            <span>Bạn đã có tài khoản? <Link to="/signin">Đăng nhập</Link></span>
          </div>
          <div className="form-link">
            <Link to="/">Thoát</Link>
          </div>
        </div>
        <div className="line" />
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon" />
            <span>Đăng nhập với Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <i class='bx bxl-google google-icon'></i>
            <span>Đăng nhập với Google</span>
          </a>
        </div>
      </div>
    </section>

  );
}
export default Register;