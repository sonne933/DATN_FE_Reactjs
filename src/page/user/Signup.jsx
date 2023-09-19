import React, { Component } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';
class Register extends Component {
  render() {
    return (
      <section className="container forms">
        {/* Signup Form */}
        <div className="form signup">
          <div className="form-content">
            <header>Đăng ký</header>
            <form action="#">
            <div className="field input-field">
                <input type="text" placeholder="Tên" className="input" />
              </div>
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input type="number" placeholder="Số điện thoại" className="input" />
              </div>
              <div className="field input-field">
                <input type="text" placeholder="Địa chỉ" className="input" />
              </div>
              <div className="field input-field">
                <input type="password" placeholder="Nhập mật khẩu" className="password" />
                <i className="bx bx-hide eye-icon" />
              </div>
              <div className="field button-field">
                <button>Đăng ký</button>
              </div>
            </form>
            <div className="form-link">
              <span>Bạn đã có tài khoản? <Link to="/signin">Đăng nhập</Link></span>
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

export default Register;