import React, { useEffect, useState } from 'react'
import './Admin.css'
import { profile } from '../../assets/listImage'

import BaseUrl from "../../utils/BaseUrl"
export default function Accountmanage() {
  const [activeStatus, setActiveStatus] = useState({});

  const [accounts, setAccounts] = useState([]);


  
  useEffect(() => {
    const fetchAccounts = async () => {
        try {
            const response = await fetch(BaseUrl + "account");
            const data = await response.json();
            const statusData = {};
            data.forEach(account => {
                statusData[account.id] = account.status;
            });
            setActiveStatus(statusData);
            setAccounts(data);
        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        }
    };

    fetchAccounts();
}, []);

// điều kiện tài khoản
const displayAccountType = (type) => {
  switch(type) {
    case 1:
      return 'User';
    case 3:
      return 'Admin';
    case 2:
      return 'Seller';
    default:
      return 'Unknown';
  }
};
// check trạng thái
const handleSwitchClick = async (accountId) => {
  const currentStatus = activeStatus[accountId];
  const updatedStatus = !currentStatus;
  try {
      const response = await fetch(`${BaseUrl}account/changestatus`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              id: accountId,
              status: updatedStatus
          })
      });

      if (response.ok) {
          setActiveStatus(prevState => ({
              ...prevState,
              [accountId]: updatedStatus
          }));
      } else {
          console.error("Error updating status on the server.");
      }
  } catch (error) {
      console.error("Error updating status:", error);
  }
};




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
                <th>Hoạt động</th>
              </tr>
            </thead>
            <tbody>
            {accounts.map(account => (
              <tr key={account.id}>
                <td>
                  <img src={profile} />
                  <p>{account.nameAccount}</p>
                </td>
                <td>{account.phoneNumber}</td>
                <td>{account.address}</td>
                <td>{account.email}</td>
                <td>{account.timeLogin}</td>
                <td>{displayAccountType(account.typeAccount)}</td>
                <td>
                  <label className={`switch ${activeStatus[account.id] ? 'active-admin' : ''}`} onClick={() => handleSwitchClick(account.id)}>

                    <input type="checkbox" checked={activeStatus[account.id]} readOnly onClick={e => e.stopPropagation()} />
                    <span className="slider_admin"></span>
                  </label>
                </td>
                <td>
                  <button className="btn edit-btn" >
                    <i className="bx bx-edit" />
                  </button>
                  <button className="btn delete-btn">
                    <i className="bx bx-trash" />
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>

  )
}
