import React, { Component, useState } from 'react';
import "./css/Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { collection, addDoc } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Gọi hook

  
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Lưu trữ thông tin người dùng lên Firestore
      const userData = {
        name,
        email,
        phone,
        address,
        // ... other user data you might want to store
        status: 0, // for example, default user role
      };
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, userData);

      console.log('User registered with UID:', uid);

      // Redirect user to a different page or show a success message
      alert('Đăng ký thành công!');
      navigate('/signin'); // navigate to sign-in page after successful registration
    }  catch (error) {
      console.error('Error during sign up:', error);
      if (error.code === 'auth/email-already-in-use') {
          alert('Email này đã được sử dụng. Vui lòng chọn một email khác hoặc đăng nhập.');
      } else {
          alert(error.message);
      }
  }
  };



  return (
    <section className="container forms">
      {/* Signup Form */}
      <div className="form signup">
        <div className="form-content">
          <header className='form-content-title'>Đăng ký</header>
          <form action="#" onSubmit={(e) => { e.preventDefault(); handleSignup(); }} >
            <div className="field input-field">
              <input type="text" placeholder="Tên" name='name' className="input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="email" placeholder="Email" name='email' className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="number" placeholder="Số điện thoại" name='phone' className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="text" placeholder="Địa chỉ" name='address' className="input" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="password" placeholder="Nhập mật khẩu" name='password' className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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