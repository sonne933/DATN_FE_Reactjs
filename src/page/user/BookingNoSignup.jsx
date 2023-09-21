import React, { Component } from 'react';
import "./css/BookingNoSignup.css";
import { offers1, offers2, offers3, offers4 } from '../../assets/listImage';
class BookingNoSignup extends Component {
    render() {
        return (
            <div className="main">
                <div className="main_offers-bookingnosignin">
                    <div className="box main_offers__box">
                        <h2 className="offers_title-bookingnosignin">Tất cả các tour</h2>
                        <div className="offers_items-bookingnosignin">
                            <div className="offers_item-bookingnosignin">
                                <div className="offers_image-bookingnosignin">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers1})` }} />
                                    <div className="offers_name-bookingnosignin"><a href="#">Tour Tây Bắc</a></div>
                                </div>
                                <div className="offers_content-bookingnosignin">
                                    <div className="offers_price">7,000,000đ</div>
                                    <div className="rating rating_4 offers_rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Tour du lịch hè Mai Châu - Mộc Châu sẽ đưa bạn đến thăm thung
                                        lũng
                                        Mai Châu yên bình trong sớm mai, những cánh đồng lúa xanh thắm lòng người hay những
                                        ngôi
                                        nhà sàn nhỏ san sát nhau.</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="offers_link"><a href="offers.html">Đọc thêm</a></div>
                                </div>
                            </div>
                            <div className="offers_item">
                                <div className="offers_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers2})` }} />
                                    <div className="offers_name"><a href="#">Tour Quy Nhơn</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">8,690,000đ</div>
                                    <div className="rating rating_4 offers_rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Tour Du lịch Quy Nhơn 4 ngày từ Hà Nội - Du lịch Quy Nhơn cùng Du
                                        Lịch Việt sẽ đưa bạn đến với Quy Nhơn – một thành phố biển xinh đẹp, không ồn ào,
                                        cũng
                                        không đẹp lộng lẫy bằng Nha Trang.</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="offers_link"><a href="offers.html">Đọc thêm</a></div>
                                </div>
                            </div>
                            <div className="offers_item">
                                <div className="offers_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers3})` }} />
                                    <div className="offers_name"><a href="#">Tour Miền Trung</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">7,299,000đ</div>
                                    <div className="rating rating_4 offers_rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text"> Tour bắt đầu từ Đà Nẵng - Bà Nà Hill - Hội An - Huế - Thánh Đại
                                        La
                                        Vang - Động Phong Nha - Tham gia lễ hội pháo hoa quốc tế Đà Nẵng 2023 chủ đề
                                        "Thế giới không khoảng cách"</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="offers_link"><a href="offers.html">Đọc thêm</a></div>
                                </div>
                            </div>
                            <div className="offers_item">
                                <div className="offers_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers4})` }} />
                                    <div className="offers_name"><a href="#">Tour Côn Đảo</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">9,900,000đ</div>
                                    <div className="rating rating_4 offers_rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Du Lịch Côn Đảo - Côn Đảo được xem là hòn đảo du lịch với những
                                        bãi
                                        tắm hoang sơ tuyệt đẹp, làn nước trong xanh mát lạnh, bãi cát dài phẳng mịn. Được ví
                                        như
                                        thiên đường nghỉ dưỡng.</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="offers_link"><a href="offers.html">Đọc thêm</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BookingNoSignup;