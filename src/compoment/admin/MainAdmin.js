import React from 'react'
import { profile } from '../../assets/listImage'

export default function MainAdmin() {
    
    return (
        <main>
            <div className="header_admin">
                <div className="left_admin">
                    <h1>Dashboard</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Admin
                        </a></li>
                        /
                        <li><a href="#" className="active">Dashboard</a></li>
                    </ul>
                </div>
            </div>
            {/* Insights */}
            <ul className="insights_admin">
                <li>
                    <i className="bx bx-map-pin" />
                    <span className="info">
                        <h3>
                            1,074
                        </h3>
                        <p>Tour</p>
                    </span>
                </li>
                <li><i className="bx bx-building-house" />
                    <span className="info">
                        <h3>
                            3,944
                        </h3>
                        <p>Dịch vụ</p>
                    </span>
                </li>
                <li><i className="bx bx-user" />
                    <span className="info">
                        <h3>
                            14,721
                        </h3>
                        <p>Tài khoản</p>
                    </span>
                </li>
                <li><i className="bx bx-dollar-circle" />
                    <span className="info">
                        <h3>
                            6,742
                        </h3>
                        <p>Doanh thu</p>
                    </span>
                </li>
            </ul>
            {/* End of Insights */}
            <div className="bottom-data_admin">
           
                <div className="orders_admin">
                    <div className="header_admin">
                        <i className="bx bx-receipt" />
                        <h3>Thống kê tài khoản</h3>
                        <i className="bx bx-filter" />
                        <i className="bx bx-search" />
                    </div>
                    <table className='tatle_admin'>
                        <thead>
                            <tr>
                                <th>Tài khoản</th>
                                <th>Ngày</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={profile} />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={profile} />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={profile}/>
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status process">Processing</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>

    )
}
