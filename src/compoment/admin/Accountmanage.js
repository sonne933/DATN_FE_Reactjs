import React from 'react'
import './Admin.css'
import { profile } from '../../assets/listImage'
export default function Accountmanage() {
  return (
    <main>
      <div className="header_admin">
        <div className="left_admin">
          <h1 className="title-heading">Quản Lý Tài Khoản</h1>
          <ul className="breadcrumb">
            <li><a href="#">
              Admin
            </a></li>
            /
            <li><a href="#" className="active">Quản Lý Tài Khoản</a></li>
          </ul>
        </div>
      </div>
      {/* Insights */}
      <ul className="insights_admin">
        <li>
          <i className="bx bx-user-circle" />
          <span className="info">
            <h3>
              1
            </h3>
            <p>Admin</p>
          </span>
        </li>
        <li><i className="bx bx-user" />
          <span className="info">
            <h3>
              4
            </h3>
            <p>User</p>
          </span>
        </li>
        <li><i className="bx bx-user" />
          <span className="info">
            <h3>
              2
            </h3>
            <p>Seller</p>
          </span>
        </li>
        {/* <li><i class='bx bx-dollar-circle'></i>
              <span class="info">
                  <h3>
                      6,742
                  </h3>
                  <p>Doanh thu</p>
              </span>
          </li> */}
      </ul>
      {/* End of Insights */}
      <div className="bottom-data_admin">
        <div className="orders_admin">
          <div className="header_admin">
            <i className="bx bx-receipt" />
            <h3>Danh Sách Tài Khoản</h3>
            <i className="bx bx-filter" />
            <i className="bx bx-search" />
          </div>
          <table className="tatle_admin">
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Email</th>
                <th>Ngày</th>
                <th>Loại tài khoản</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={profile} />
                  <p>John Doe</p>
                </td>
                <td>0123456789</td>
                <td>Đà Nẵng</td>
                <td>sonnguyen123@gmail.com</td>
                <td>14-08-2023</td>
                <td>Admin</td>
                <td><label className="switch active">
                  <input type="checkbox" />
                  <span className="slider_admin" />
                </label></td>
              </tr>
              <tr>
                <td>
                  <img src={profile} />
                  <p>John Doe</p>
                </td>
                <td>0123456789</td>
                <td>Đà Nẵng</td>
                <td>sonnguyen123@gmail.com</td>
                <td>14-08-2023</td>
                <td>Admin</td>
                <td><label className="switch ">
                  <input type="checkbox" />
                  <span className="slider_admin" />
                </label></td>
              </tr>
              <tr>
                <td>
                  <img src={profile}/>
                  <p>John Doe</p>
                </td>
                <td>0123456789</td>
                <td>Đà Nẵng</td>
                <td>sonnguyen123@gmail.com</td>
                <td>14-08-2023</td>
                <td>Admin</td>
                <td><label className="switch active">
                  <input type="checkbox" />
                  <span className="slider_admin" />
                </label></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>

  )
}