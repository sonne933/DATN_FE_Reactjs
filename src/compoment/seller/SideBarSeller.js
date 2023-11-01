import { Link, useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";

export default function SideBarSeller() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path; // Hàm này kiểm tra xem pathname hiện tại có phải là path được truyền vào hay không
  return (
    <div className="sidebar-seller">
      <Link to="/seller" className="logo">
        <i className="bx bxl-graphql" />
        <div className="logo-name">
          <span>SEL</span>LER
        </div>
      </Link>
      <ul className="side-menu-seller">
        <li className={isActive("/seller") ? "active-seller" : ""}>
          <Link to="/seller" className="title_sidemenu">
            <i className="bx bxs-dashboard" />
            Trang Chủ
          </Link>
        </li>
        <li className={isActive("/seller/tourmanage") ? "active-seller" : ""}>
          <Link to="/seller/tourmanage" className="title_sidemenu">
            <i className="bx bx-map-pin" />
            Quản Lý Tour Du Lịch
          </Link>
        </li>
        <li
          className={isActive("/seller/schedulemanage") ? "active-seller" : ""}
        >
          <Link to="/seller/schedulemanage" className="title_sidemenu">
            <i className="bx bx-location-plus" />
            Quản Lý Lịch Trình
          </Link>
        </li>

        <li className={isActive("/seller/requesttour") ? "active-seller" : ""}>
          <Link to="/seller/requesttour" className="title_sidemenu">
            <i className="bx bx-bell" />
            Yêu Cầu Đặt Tour
          </Link>
        </li>
        <li className={isActive("/seller/billmanage") ? "active-seller" : ""}>
          <Link to="/seller/billmanage" className="title_sidemenu">
            <i className="bx bx-money" />
            Quản Lý Hóa Đơn
          </Link>
        </li>
        <li className={isActive("/seller/chatbox") ? "active-seller" : ""}>
          <Link to="/seller/chatbox" className="title_sidemenu">
            <i className="bx bx-chat" />
            Chat Box
          </Link>
        </li>
        <li className={isActive("/seller/statistical") ? "active-seller" : ""}>
          <Link to="/seller/statistical" className="title_sidemenu">
            <i className="bx bx-bar-chart-alt-2" />
            Thống Kê
          </Link>
        </li>
      </ul>
      <ul className="side-menu-seller">
        <li>
          <a href="#" className="logout">
            <i className="bx bx-log-out-circle" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
