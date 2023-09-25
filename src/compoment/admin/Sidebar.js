import React from 'react'

export default function Sidebar() {
    return (

        < div className="sidebar" >
            <a href="index.html" className="logo">
                <i className="bx bx-code-alt" />
                <div className="logo-name"><span>AD</span>MIN</div>
            </a>
            <ul className="side-menu">
                <li className="active"><a href="index.html" className="title_sidemenu"><i className="bx bxs-dashboard" />Dashboard</a>
                </li>
                {/* <li ><a href="index.html" class="title_sidemenu"><i class='bx bx-group'></i>Quản Lý Tài Khoản</a></li> */}
                <li><a href="account_manage.html" className="title_sidemenu"><i className="bx bx-group" />Quản Lý Tài Khoản</a>
                </li>
                <li><a href="catalog_manage.html" className="title_sidemenu"><i className="bx bx-analyse" />Quản Lý Danh Mục</a>
                </li>
                <li><a href="tour_manage.html" className="title_sidemenu"><i className="bx bx-map-pin" />Quản Lý
                    Tour</a></li>
                <li><a href="service_manage.html" className="title_sidemenu"><i className="bx bx-message-square-dots" />Quản Lý
                    Dịch Vụ</a></li>
                <li><a href="statistical.html" className="title_sidemenu"><i className="bx bx-bar-chart-alt-2" />Thống Kê</a></li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <i className="bx bx-log-out-circle" />
                        Logout
                    </a>
                </li>
            </ul>
        </div >


    )
}
