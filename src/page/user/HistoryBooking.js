import React from 'react'
import './css/HistoryBooking.css'
export default function HistoryBooking() {
    return (
        <div className="main">
            <div className="main_offers">
                <div className="left_main">
                    <div className="tours-table">
                        <h2>Danh sách tour đã đặt</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Thông tin người đặt</th>
                                    <th>Thông tin tour</th>
                                    <th>Chi tiết đặt tour</th>
                                    <th>Ghi chú</th>
                                    <th>Tình trạng</th>
                                    <th>Hoạt động</th>
                                    <th>Hủy đơn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Bạn có thể thêm nhiều dòng dữ liệu ở đây */}
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon">X</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button className="pagination-btn" data-page={1}>1</button>
                        {/* Thêm nhiều nút phân trang tùy thuộc vào số lượng trang của bạn */}
                        {/* Ví dụ: <button class="pagination-btn" data-page="2">2</button> */}
                        <button className="pagination-btn" data-page={2}>2</button>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <button onclick="topFunction()" id="back_top" title="Go to top"><i className="fas fa-rocket" /></button>
                <div className="box footer__box">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <div className="logo">
                                <a href="#"><img src="./images/logo.png" alt="" />TOUR VIET</a>
                            </div>
                        </div>
                        <p className="footer_about__text">
                            TOUR VIET tự hào là một đơn vị tiêu biểu trong lĩnh vực tour du lịch đón nhận giải thưởng uy
                            tín
                            nhất dành cho cộng đồng doanh nghiệp Việt Nam.
                        </p>
                        <ul className="footer_social_list">
                            <li className="footer_social_item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fa-brands fa-google" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fab fa-youtube" /></a></li>
                        </ul>
                    </div>
                    <div className="footer__blog">
                        <div className="footer_title">bản tin</div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src="./images/footer_blog_1.jpg" alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src="./images/footer_blog_1.jpg" alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src="./images/footer_blog_1.jpg" alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__tags">
                        <div className="footer_title">Tags</div>
                        <ul className="tags_list">
                            <li className="tags_item"><a href="#">Miền Bắc</a></li>
                            <li className="tags_item"><a href="#">Miền Trung</a></li>
                            <li className="tags_item"><a href="#">Miền Nam</a></li>
                            <li className="tags_item"><a href="#">Đà Nẵng</a></li>
                            <li className="tags_item"><a href="#">Quảng Nam</a></li>
                            <li className="tags_item"><a href="#">Huế</a></li>
                        </ul>
                    </div>
                    <div className="footer__contact">
                        <div className="footer_title">Liên hệ</div>
                        <ul className="contact_list">
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-map-marker-alt" /></div>
                                <div className="contact_text">64 Dũng sĩ thannh khê, Thanh Khê Tây, Thanh Khê, Đà Nẵng</div>
                            </li>
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-phone-square" /></div>
                                <div className="contact_text">+84 79 292 9292</div>
                            </li>
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-envelope" /></div>
                                <div className="contact_text">tourviet01@gmail.com</div>
                            </li>
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-globe-asia" /></div>
                                <div className="contact_text">www.tourviet.com</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    )
}
