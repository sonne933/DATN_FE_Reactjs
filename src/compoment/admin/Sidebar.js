import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Admin.css"
import { logout } from '../../redux/actions';
// import { auth } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';

export default function Sidebar() {

  const location = useLocation(); // Sử dụng hook này để lấy ra pathname hiện tại
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const handleLogout = () => {
  //   auth.signOut().then(() => {
  //     navigate("/");
  //     dispatch(logout());
  //   }).catch((error) => {
  //     console.error("Error signing out: ", error);
  //   });
  // };

  const isActive = (path) => location.pathname === path; // Hàm này kiểm tra xem pathname hiện tại có phải là path được truyền vào hay không
  return (
    <div className="sidebar_admin">
      <Link to="/admin" className="logo">
        <i className="bx bx-code-alt" />
        <div className="logo-name"><span>AD</span>MIN</div>
      </Link>
      <ul className="side-menu_admin">
        <li className={isActive("/admin") ? "active-admin" : ""}>
          <Link to="/admin" className="title_sidemenu">
            <i className="bx bxs-dashboard" />Dashboard
          </Link>
        </li>
        <li className={isActive("/admin/accountmanage") ?"active-admin" : ""}>
          <Link to="/admin/accountmanage" className="title_sidemenu">
            <i className="bx bx-group" />Quản Lý Tài Khoản
          </Link>
        </li>
        <li className={isActive("/admin/catalogmanage") ?"active-admin" : ""}>
          <Link to="/admin/catalogmanage" className="title_sidemenu">
            <i className="bx bx-analyse" />Quản Lý Danh Mục
          </Link>
        </li>
        <li className={isActive("/admin/tourmanage") ?"active-admin" : ""}>
          <Link to="/admin/tourmanage" className="title_sidemenu">
            <i className="bx bx-map-pin" />Quản Lý Tour
          </Link>
        </li>
        <li className={isActive("/admin/servicemanage") ?"active-admin" : ""}>
          <Link to="/admin/servicemanage" className="title_sidemenu">
            <i className="bx bx-message-square-dots" />Quản Lý Dịch Vụ
          </Link>
        </li>
        <li className={isActive("/admin/statistical") ?"active-admin" : ""}>
          <Link href="/admin/statistical" className="title_sidemenu">
            <i className="bx bx-bar-chart-alt-2" />Thống Kê
          </Link>
        </li>
      </ul>
      <ul className="side-menu_admin">
        <li>
          {/* <a href="#" onClick={handleLogout} className="logout">
            <i className="bx bx-log-out-circle" />
            Logout
          </a> */}
        </li>
      </ul>
    </div>

  )



}
