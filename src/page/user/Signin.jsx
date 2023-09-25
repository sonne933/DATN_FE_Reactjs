import React, { useState, useEffect } from 'react';
import "./css/Signup.css";
import { Link, useNavigate } from 'react-router-dom';

import { auth, db } from '../../firebaseConfig'

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../../redux/actions';
import { doc, getDoc } from 'firebase/firestore';



function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Signin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          dispatch(loginSuccess());
        } else {
          dispatch(logout());
        }
      });

      return () => unsubscribe(); // Dọn dẹp listener khi component unmount
    }, [dispatch]);
  }

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(getAuth(), provider);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Đăng nhập thành công với UID:", userCredential.user.uid);
      dispatch(loginSuccess());  // Update the login state

      // Truy xuất thông tin người dùng từ Firestore để xác định quyền của họ
      const docRef = doc(db, "users", userCredential.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const userStatus = userData.status;
        if (userStatus === 1) { // Admin
          navigate("/admin");
        } else if (userStatus === 2) { // Seller
          navigate("/seller");
        } else { // Default: User
          navigate("/");
        }
      } else {
        console.error("Không tìm thấy thông tin người dùng trong Firestore");
      }
      alert('Đăng nhập thành công');
    } catch (error) {
      console.error("Error during email sign-in:", error);
      alert(error.message);
    }
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Vui lòng kiểm tra email của bạn để đặt lại mật khẩu.");
      })
      .catch(error => {
        alert(error.message);
      });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Người dùng đã đăng nhập
        console.log('User is logged in:', user.uid);
        dispatch(loginSuccess());
      } else {
        // Người dùng đã đăng xuất hoặc chưa đăng nhập
        console.log('User is not logged in');
        // Bạn có thể dispatch một action khác ở đây nếu muốn
      }
    });

    // Hủy lắng nghe khi component unmount để tránh memory leak
    return () => unsubscribe();
  }, [dispatch]);



  return (
    <section className="container forms">

      <div className="form login">
        <div className="form-content">
          <header className='form-content-title'>Đăng nhập</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="password" placeholder="Mật khẩu" className="password" onChange={e => setPassword(e.target.value)} />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass" onClick={handleForgotPassword}>Quên mật khẩu?</a>
            </div>
            <div className="field button-field">
              <button onClick={handleLogin}>Đăng nhập</button>
            </div>
          </form>
          <div className="form-link">
            <span>Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link></span>
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
        <div className="media-options">
          <a href="#" className="field google" onClick={handleLoginWithGoogle}>
            <i class='bx bxl-google google-icon'></i>
            <span>Đăng nhập với Google</span>
          </a>
        </div>
      </div>


    </section>



  );
}


export default Signin;