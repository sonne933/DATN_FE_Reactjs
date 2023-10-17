import React, { useState } from 'react';
import { footer_blog_1, logo } from '../../assets/listImage';
import { connect } from 'react-redux';

function Footer({ isLoggedIn }) {
   
    const [isChatVisible, setIsChatVisible] = useState(false);
    
    // const isLoggedIn = useSelector(state => state.isLoggedIn);

    // Hàm để thay đổi trạng thái của isChatVisible
    const toggleChat = () => {
        setIsChatVisible(prevState => !prevState);

    }
    console.log(isLoggedIn);
    return (
        <React.Fragment>
            {/* Khi isChatVisible là true, hiển thị cửa sổ chat */}

            <footer className="footer">
            {isLoggedIn ? (
                    <button id="back_top" title="Go to top" onClick={toggleChat}><i className='bx bx-message-rounded-dots'></i></button>
                ): null}
                {isChatVisible &&
                    <div className="chat-container-user">
                        <div className="chat-box-user">
                            <div className="chat-header-user">
                                <h2>Chat với nhân viên tư vấn</h2>
                            </div>
                            <div className="chat-messages-user">
                                <p className="message-user received">Xin chào!</p>
                                <p className="message-user sent">Chào bạn, bạn có khỏe không?</p>
                                <p className="message-user received">Mình khỏe, cảm ơn bạn!</p>
                                {/* Các tin nhắn khác */}
                            </div>
                            <div className="chat-input-user">
                                <input type="text" placeholder="Nhập tin nhắn..." />
                                <button>Gửi</button>
                            </div>
                        </div>
                    </div>
                }
                <div className="box footer__box">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <div className="logo">
                                <a href="#"><img src={logo} alt="" />TOUR VIET</a>
                            </div>
                        </div>
                        <p className="footer_about__text">
                            TOUR VIET tự hào là một đơn vị tiêu biểu trong lĩnh vực tour du lịch đón nhận giải thưởng uy tín
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
                            <div className="footer_blog__image"><img src={footer_blog_1} alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src={footer_blog_1} alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src={footer_blog_1} alt="" /></div>
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
        </React.Fragment>
    );
}
const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn // Đảm bảo rằng state.isLoggedIn trỏ đến đúng trường trong state Redux của bạn
});
export default connect(mapStateToProps)(Footer);