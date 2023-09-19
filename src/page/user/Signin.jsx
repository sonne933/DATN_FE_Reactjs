import React, { Component } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

class Signup extends Component {

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
}

export default Signup;