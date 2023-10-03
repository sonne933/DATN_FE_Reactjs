import React from 'react'

export default function ScheduleManageSeller() {
    return (
        <main>
            <div className="header-seller">
                <div className="left-seller">
                    <h1>Quản lý Lịch Trình</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Seller
                        </a></li>
                        /
                        <li><a href="#" className="active">Quản lý Lịch Trình</a></li>
                    </ul>
                </div>
            </div>
            {/* Insights */}
            {/* End of Insights */}
            {/* model edit and delete */}
            {/* Form Edit */}
            <div className="bottom-data-seller">
                <div className="orders-seller">
                    <div className="header-seller">
                        <i className="bx bx-receipt" />
                        <h3>Lịch trình tour</h3>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tour</th>
                                <th>Địa chỉ</th>
                                <th>Thời gian</th>
                                <th>Giá tour</th>
                                <th>Giảm giá</th>
                                <th>Lịch dự kiến</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td id="noidungTour">Tour Du Lịch Quy Nhơn Phú Yên</td>
                                <td>Quy Nhơn Phú Yên</td>
                                <td> 2 ngày 1 đêm</td>
                                <td>1.000.000 đ</td>
                                <td>0%</td>
                                <td>đã lên lịch</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td id="noidungTour">Tour Du Lịch Châu Âu</td>
                                <td>Pháp-Đức-Bỉ</td>
                                <td> 5 ngày 4 đêm</td>
                                <td>20.000.000 đ</td>
                                <td>10%</td>
                                <td>Chưa có lịch</td><td>
                                </td></tr>
                            <tr>
                                <td>3</td>
                                <td id="noidungTour">Tour Du Lịch Đà Nẵng</td>
                                <td>TP Đà Nẵng</td>
                                <td> 3 ngày 2 đêm</td>
                                <td>5.000.000 đ</td>
                                <td>3%</td>
                                <td>Chưa có lịch</td><td>
                                </td></tr>
                            <tr>
                                <td>4</td>
                                <td id="noidungTour">Tour Du Lịch Bangkok</td>
                                <td>Thái Lan</td>
                                <td> 4 ngày 3 đêm</td>
                                <td>7.500.000 đ</td>
                                <td>10%</td>
                                <td>Chưa có lịch</td><td>
                                </td></tr>
                            {/* Thêm các dòng dữ liệu khác tương tự ở đây */}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    )
}
