import React, { Component } from 'react';
import "./css/Signup.css";
import { Link ,useNavigate} from 'react-router-dom';

import firebaseConfig from '../../firebaseConfig'
import {GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

class Signup extends Component {
  state = {
    isLoggedIn: false
  };

  // đăng nhập fb
  LoginWithFacebook = () => {
    const auth = getAuth();
    const facebookProvider = new FacebookAuthProvider();

    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result.user);
        // Lưu thông tin người dùng hoặc thực hiện bất kỳ thao tác nào bạn muốn tại đây
      })
      .catch((error) => {
        console.error("Error during Facebook sign-in:", error);
      });
  };
  // đăng nhập google
  signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth,provider)
        .then(result => {
            // Lấy token
            var token = result.credential.accessToken;
            window.location='/';
            // Lấy thông tin người dùng
            var user = result.user;
            console.log(user);
            
        })
        .catch(error => {
            console.error("Error during Google Sign-In", error);
        });
}
  render() {
    
    return (
      <section className="container forms">
        
          <div className="form login">
          <div className="form-content">
            <header>Đăng nhập</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input type="password" placeholder="Mật khẩu" className="password" />
                <i className="bx bx-hide eye-icon" />
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">Quên mật khẩu?</a>
              </div>
              <div className="field button-field">
                <button>Đăng nhập</button>
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
            <a href="#" className="field facebook" onClick={this.LoginWithFacebook}>
              <i className="bx bxl-facebook facebook-icon" />
              <span>Đăng nhập với Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google" onClick={this.signInWithGoogle}>
            <i class='bx bxl-google google-icon'></i>
              <span>Đăng nhập với Google</span>
            </a>
          </div>
        </div>
        

      </section>



    );
  }
}

export default Signup;