import React from 'react'

export default function MainSeller() {
    return (
        <main>
            <div className="header-seller">
                <div className="left-seller">
                    <h1>Trang Chủ</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Seller
                        </a></li>
                        /
                        <li><a href="#" className="active">Trang Chủ</a></li>
                    </ul>
                </div>
            </div>
            {/* Insights */}
            <ul className="insights-seller">
                <li>
                    <i className="bx bx-map-pin" />
                    <span className="info">
                        <h3>
                            3,333
                        </h3>
                        <p>Tour </p>
                    </span>
                </li>
                <li><i className="bx bx-location-plus" />
                    <span className="info">
                        <h3>
                            2,222
                        </h3>
                        <p>Lịch Trình</p>
                    </span>
                </li>
                <li><i className="bx bx-money" />
                    <span className="info">
                        <h3>
                            11,111
                        </h3>
                        <p>Hóa Đơn</p>
                    </span>
                </li>
                <li><i className="bx bx-bar-chart-alt-2" />
                    <span className="info">
                        <h3>
                            0,000
                        </h3>
                        <p>Thống Kê</p>
                    </span>
                </li>
            </ul>
        </main>

    )
}
