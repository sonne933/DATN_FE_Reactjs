import React from 'react'
import "./css/PersonalInformation.css"
export default function PersonalInformation() {
    return (
        <div className="main-personalInformation">
            <div className="main_offers-personalInformation">
                <div className="left_main-personalInformation">
                    <div className="user-form">
                        <h2>Thông tin người dùng</h2>
                        <label htmlFor="name">Tên:</label>
                        <input type="text" id="name" defaultValue="Nguyễn Văn An" />
                        <label htmlFor="birthdate">Ngày sinh:</label>
                        <input type="date" id="birthdate" defaultValue="2001-01-01" />
                        <label htmlFor="address">Địa chỉ:</label>
                        <input type="text" id="address" defaultValue="123 Lê Lợi, Đà Nẵng" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" defaultValue="nguyenvanan123@email.com" />
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input type="tel" id="phone" defaultValue="0123456789" />
                        <button type="submit">Cập nhật</button>
                        <hr /> {/* Dòng kẻ ngang để phân cách giữa thông tin người dùng và phần đổi mật khẩu */}
                        <h2>Đổi mật khẩu</h2>
                        <label htmlFor="currentPassword">Mật khẩu hiện tại:</label>
                        <input type="password" id="currentPassword" />
                        <label htmlFor="newPassword">Mật khẩu mới:</label>
                        <input type="password" id="newPassword" />
                        <label htmlFor="confirmNewPassword">Xác nhận mật khẩu mới:</label>
                        <input type="password" id="confirmNewPassword" />
                        <button type="submit">Cập nhật</button>
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
