import React, { Component } from 'react';
import "./css/Main.css";
import { bana, hoian, phuquoc, intro1, intro2, intro3, offers1, offers2, offers3, offers4, hotel2, hotel1, hotel3, hotel4 }
    from "../../assets/listImage";

// import "./script.js";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImage: 1
        };
    }

    componentDidMount() {
        this.updateDisplay(this.state.slideImage);
    }

    updateDisplay = (newSlideIndex) => {
        const totalSlides = 3;

        if (newSlideIndex > totalSlides) {
            newSlideIndex = 1;
        } else if (newSlideIndex < 1) {
            newSlideIndex = totalSlides;
        }

        this.setState({ slideImage: newSlideIndex });
    };

    plusSlides = (n) => {
        this.updateDisplay(this.state.slideImage + n);
    };

    currentSlide = (n) => {
        this.updateDisplay(n);
    };



    render() {
        const images = [
            { src: bana, title: "Bà Nà Hill" },
            { src: hoian, title: "Hội An" },
            { src: phuquoc, title: "Phú Quốc" }
        ];
        const { slideImage } = this.state;
        return (
            <div className="main">
                {/*slider*/}
                <div className="main__slide">
                    {images.map((slide, index) => (
                        <div
                            key={index}
                            className="home_slide__item"
                            style={{ display: slideImage === index + 1 ? 'grid' : 'none' }}
                        >
                            <div className="home_slide__background" style={{ backgroundImage: `url(${slide.src})` }}></div>
                            <div className="home_slider__content">
                                <div className="home_slider_content_inner animated bounceInLeft">
                                    <h1>tour</h1>
                                    <h1>{slide.title}</h1>
                                    < div className="button home_slider__button">
                                        <div className="button_bcg" />
                                        <a href="#">Xem ngay<span /><span /><span /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="main_slide__nav nav__prev">
                        <i onClick={() => this.plusSlides(-1)} className="fas fa-chevron-circle-left" />
                    </div>
                    <div className="main_slide__nav nav__next">
                        <i onClick={() => this.plusSlides(1)} className="fas fa-chevron-circle-right" />
                    </div>
                    <div className="main_slide__dots">
                        <ul className="customs_dots">
                            {[1, 2, 3].map((num) => (
                                <li
                                    key={num}
                                    className={`customs_dot ${slideImage === num ? 'active' : ''}`}
                                    onClick={() => this.currentSlide(num)}
                                >
                                    {num.toString().padStart(2, '0')}.
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*        Intro*/}
                <div className="main_intro">
                    <p>Đây là những tour du lịch tốt nhất hiện nay của chúng tôi.</p>
                    <div className="main_intro__items">
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_text">
                                    <h1> MIỀN BẮC</h1>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro2})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_text">
                                    <h1> MIỀN TRUNG</h1>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro3})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_text">
                                    <h1>MIỀN NAM</h1>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_intro">
                    <h2>Những tour du lịch tốt nhất Miền Bắc</h2>
                    <p>Đây là những tour du lịch tốt nhất hiện nay của chúng tôi.</p>
                    <p>Sẽ làm bạn hài lòng khi đăng ký những tour dưới đây.</p>
                    <div className="main_intro__items">
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Bà Nà Hill</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Hội An</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Bana Hill</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_intro">
                    <h2>Những tour du lịch tốt nhất Miền Trung</h2>
                    <p>Đây là những tour du lịch tốt nhất hiện nay của chúng tôi.</p>
                    <p>Sẽ làm bạn hài lòng khi đăng ký những tour dưới đây.</p>
                    <div className="main_intro__items">
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Bà Nà Hill</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Hội An</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Bana Hill</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_intro">
                    <h2>Những tour du lịch tốt nhất Miền Nam</h2>
                    <p>Đây là những tour du lịch tốt nhất hiện nay của chúng tôi.</p>
                    <p>Sẽ làm bạn hài lòng khi đăng ký những tour dưới đây.</p>
                    <div className="main_intro__items">
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Bà Nà Hill</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Hội An</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                        <div className="intro_item">
                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${intro1})` }}>
                            </div>
                            <div className="intro_item__content">
                                <div className="intro_date">Từ 15/08 - 15/09</div>
                                <div className="intro_text">
                                    <h1>Bana Hill</h1>
                                    <div className="intro_price">Giá: 1,200,000đ</div>
                                    <div className="rating rating_4">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                <div className="button intro_button">
                                    <div className="button_bcg" />
                                    <a href="#">Xem ngay<span /><span /><span /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*        Offers*/}
                <div className="main_offers">
                    <div className="box main_offers__box">
                        <h2 className="offers_title">Các ưu đãi tối nhất</h2>
                        <div className="offers_items">
                            <div className="offers_item">
                                <div className="offers_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers1})` }} />
                                    <div className="offers_name"><a href="#">Tour Tây Bắc</a></div>
                                </div>
                                <div className="offers_content">
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
                {/*        Hotel*/}
                <div className="main_hotel">
                    <div className="box main_hotel__box">
                        <h2 className="main_hotel_title">Khách sạn được ưa thích nhất</h2>
                        <div className="hotel_items">
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel1} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Green Plaza Hotel</a></div>
                                    <div className="hotel_price">1,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel2} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hilton Đà Nẵng</a></div>
                                    <div className="hotel_price">3,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel3} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hanoi Hotel</a></div>
                                    <div className="hotel_price">1,900,00đ</div>
                                    <div className="hotel_location">Hà Nội</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel4} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Sofitel Sài Gòn</a></div>
                                    <div className="hotel_price">4,100,000đ</div>
                                    <div className="hotel_location">Quận 1, HCM</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel1} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Green Plaza Hotel</a></div>
                                    <div className="hotel_price">1,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel2} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hilton Đà Nẵng</a></div>
                                    <div className="hotel_price">3,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel3} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hanoi Hotel</a></div>
                                    <div className="hotel_price">1,900,00đ</div>
                                    <div className="hotel_location">Hà Nội</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel4} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Sofitel Sài Gòn</a></div>
                                    <div className="hotel_price">4,100,000đ</div>
                                    <div className="hotel_location">Quận 1, HCM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;