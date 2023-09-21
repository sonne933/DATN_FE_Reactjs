import React, { Component } from 'react';
import "./css/Offers.css"
import { offers_1, offers_2, offers_3, offers_4, offers_slide } from '../../assets/listImage';
// import offers_slide from "../../assets/images/offers_slide.jpg"
class Offers extends Component {
    state = {
        activeOfferBox: null,
    };

    handleMouseOver = (offerId) => {
        this.setState({ activeOfferBox: offerId });
    }

    handleMouseOut = () => {
        this.setState({ activeOfferBox: null });
    }
    render() {
        const imageSrc = offers_slide;

      
        return (
            <div className="main">
                <div className="main__slide_offers">
                    <div className="home_slide__item">
                        <div className="home_slide__background" style={{ backgroundImage: `url"(${imageSrc})"` }} />
                        <div className="home__content">
                            <div className="home__title animated bounceInLeft">
                                Ưu đãi
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offers">
                    {/* <div className="box offers__box1">
                        <div className="offers_sorting_container">
                            <ul className="offers_sorting">
                                <li id="offer_1">
                                    <span className="sorting_text">Giá</span>
                                    <i className="fas fa-angle-down" />
                                    <ul id="offer_box_1" className="animated fadeInUp">
                                        <li className="sort_btn"><span>Hiện tất cả</span></li>
                                        <li className="sort_btn"><span>Tăng dần</span></li>
                                        <li className="sort_btn"><span>Giảm dần</span></li>
                                    </ul>
                                </li>
                                <li id="offer_2">
                                    <span className="sorting_text">Thứ tự</span>
                                    <i className="fas fa-angle-down" />
                                    <ul id="offer_box_2">
                                        <li className="sort_btn"><span>Mặc định</span></li>
                                        <li className="sort_btn"><span>Bảng chữ cái</span></li>
                                    </ul>
                                </li>
                                <li id="offer_3">
                                    <span className="sorting_text">Sao</span>
                                    <i className="fas fa-angle-down" />
                                    <ul id="offer_box_3">
                                        <li className="filter_btn" data-filter="*"><span>Hiện tất cả</span></li>
                                        <li className="sort_btn"><span>Giảm dần</span></li>
                                        <li className="filter_btn" data-filter=".rating_3"><span>3</span></li>
                                        <li className="filter_btn" data-filter=".rating_4"><span>4</span></li>
                                        <li className="filter_btn" data-filter=".rating_5"><span>5</span></li>
                                    </ul>
                                </li>
                                <li id="offer_5">
                                    <span className="sorting_text">Đánh giá</span>
                                    <i className="fas fa-angle-down" />
                                    <ul id="offer_box_5">
                                        <li className="num_sorting_btn"><span>Very Good</span></li>
                                        <li className="num_sorting_btn"><span>Good</span></li>
                                        <li className="num_sorting_btn"><span>Medium</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="box offers__box1">
                <div className="offers_sorting_container">
                    <ul className="offers_sorting">

                        <li 
                            id="offer_1" 
                            onMouseOver={() => this.handleMouseOver('offer_box_1')}
                            onMouseOut={this.handleMouseOut}
                        >
                            <span className="sorting_text">Giá</span>
                            <i className="fas fa-angle-down" />
                            <ul 
                                id="offer_box_1" 
                                className="animated fadeInUp" 
                                style={{ 
                                    top: this.state.activeOfferBox === 'offer_box_1' ? "105%" : "120%",
                                    visibility: this.state.activeOfferBox === 'offer_box_1' ? "unset" : "hidden",
                                    opacity: this.state.activeOfferBox === 'offer_box_1' ? "1" : "0"
                                }}
                            >
                                <li className="sort_btn"><span>Hiện tất cả</span></li>
                                <li className="sort_btn"><span>Tăng dần</span></li>
                                <li className="sort_btn"><span>Giảm dần</span></li>
                            </ul>
                        </li>
                        <li 
                            id="offer_2" 
                            onMouseOver={() => this.handleMouseOver('offer_box_2')}
                            onMouseOut={this.handleMouseOut}
                        >
                            <span className="sorting_text">Thứ tự</span>
                            <i className="fas fa-angle-down" />
                            <ul 
                                id="offer_box_1" 
                                className="animated fadeInUp" 
                                style={{ 
                                    top: this.state.activeOfferBox === 'offer_box_2' ? "105%" : "120%",
                                    visibility: this.state.activeOfferBox === 'offer_box_2' ? "unset" : "hidden",
                                    opacity: this.state.activeOfferBox === 'offer_box_2' ? "1" : "0"
                                }}
                            >
                                <li className="sort_btn"><span>Mặc định</span></li>
                               
                                <li className="sort_btn"><span>Bảng chữ cái</span></li>
                            </ul>
                        </li>
                        <li 
                            id="3" 
                            onMouseOver={() => this.handleMouseOver('offer_box_3')}
                            onMouseOut={this.handleMouseOut}
                        >
                            <span className="sorting_text">Sao</span>
                            <i className="fas fa-angle-down" />
                            <ul 
                                id="offer_box_3" 
                                className="animated fadeInUp" 
                                style={{ 
                                    top: this.state.activeOfferBox === 'offer_box_3' ? "105%" : "120%",
                                    visibility: this.state.activeOfferBox === 'offer_box_3' ? "unset" : "hidden",
                                    opacity: this.state.activeOfferBox === 'offer_box_3' ? "1" : "0"
                                }}
                            >
                                <li className="sort_btn"><span>Hiện tất cả</span></li>
                                <li className="sort_btn"><span>Tăng dần</span></li>
                                <li className="sort_btn"><span>1</span></li>
                                <li className="sort_btn"><span>2</span></li>
                                <li className="sort_btn"><span>3</span></li>
                                <li className="sort_btn"><span>4</span></li>
                                <li className="sort_btn"><span>5</span></li>
                            </ul>
                        </li>
                        <li 
                            id="offer_5" 
                            onMouseOver={() => this.handleMouseOver('offer_box_5')}
                            onMouseOut={this.handleMouseOut}
                        >
                            <span className="sorting_text">Đánh giá</span>
                            <i className="fas fa-angle-down" />
                            <ul 
                                id="offer_box_5" 
                                className="animated fadeInUp" 
                                style={{ 
                                    top: this.state.activeOfferBox === 'offer_box_5' ? "105%" : "120%",
                                    visibility: this.state.activeOfferBox === 'offer_box_5' ? "unset" : "hidden",
                                    opacity: this.state.activeOfferBox === 'offer_box_5' ? "1" : "0"
                                }}
                            >
                                <li className="sort_btn"><span>Very Good</span></li>
                                <li className="sort_btn"><span>Good</span></li>
                                <li className="sort_btn"><span>Medium</span></li>
                            </ul>
                        </li>

                        

                    </ul>
                </div>
            </div>
                    <div className="box offers__box2">
                        <div className="offers_grid" style={{ position: 'relative' }}>
                            <div className="offers_item2">
                                <div className="offers_image f_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers_1})` }} />
                                    <div className="offers_name"><a href="#">Tour Tây Bắc</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">7,000,000đ</div>
                                    <div className="rating rating_4 offers_rating" data-rating={4}>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Tour du lịch hè Mai Châu - Mộc Châu sẽ đưa bạn đến thăm thung lũng
                                        Mai Châu yên bình trong sớm mai, những cánh đồng lúa xanh thắm lòng người hay những ngôi
                                        nhà sàn nhỏ san sát nhau.</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="button book_button"><a href="#">book<span /><span /><span /></a>
                                    </div>
                                    <div className="offer_reviews">
                                        <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 lượt xem</div>
                                        </div>
                                        <div className="offer_reviews_rating" style={{ textAlign: 'center' }}>8.0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="offers_item2">
                                <div className="offers_image f_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers_2})` }} />
                                    <div className="offers_name"><a href="#">Tour Miền Trung</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">7,290,000đ</div>
                                    <div className="rating rating_4 offers_rating" data-rating={4}>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Tour bắt đầu từ Đà Nẵng - Bana Hill - Hội An - Huế - Thánh Đại La
                                        Vang - Động Phong Nha0000 - Tham gia lễ hội pháo hoa quốc tế Đà Nẵng 2019 chủ đề
                                        "NHỮNG DÒNG SÔNG KỂ CHUYỆN"</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="button book_button"><a href="#">book<span /><span /><span /></a>
                                    </div>
                                    <div className="offer_reviews">
                                        <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 lượt xem</div>
                                        </div>
                                        <div className="offer_reviews_rating" style={{ textAlign: 'center' }}>8.7</div>
                                    </div>
                                </div>
                            </div>
                            <div className="offers_item2">
                                <div className="offers_image f_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers_3})` }} />
                                    <div className="offers_name"><a href="#">Tour Quy Nhơn</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">8,690,000đ</div>
                                    <div className="rating rating_4 offers_rating" data-rating={4}>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Tour Du lịch Quy Nhơn 4 ngày từ Hà Nội - Du lịch Quy Nhơn cùng Du
                                        Lịch Việt sẽ đưa bạn đến với Quy Nhơn – một thành phố biển xinh đẹp, không ồn ào, cũng
                                        không đẹp lộng lẫy bằng Nha Trang.</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="button book_button"><a href="#">book<span /><span /><span /></a>
                                    </div>
                                    <div className="offer_reviews">
                                        <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 lượt xem</div>
                                        </div>
                                        <div className="offer_reviews_rating" style={{ textAlign: 'center' }}>8.5</div>
                                    </div>
                                </div>
                            </div>
                            <div className="offers_item2">
                                <div className="offers_image f_image">
                                    <div className="offers_image_background" style={{ backgroundImage: `url(${offers_4})` }} />
                                    <div className="offers_name"><a href="#">Tour Côn Đảo</a></div>
                                </div>
                                <div className="offers_content">
                                    <div className="offers_price">9,900,000đ</div>
                                    <div className="rating rating_4 offers_rating" data-rating={4}>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p className="offers_text">Du Lịch Côn Đảo - Côn Đảo được xem là hòn đảo du lịch với những bãi
                                        tắm hoang sơ tuyệt đẹp, làn nước trong xanh mát lạnh, bãi cát dài phẳng mịn. Được ví như
                                        thiên đường nghỉ dưỡng.</p>
                                    <div className="offers_icons">
                                        <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="./images/post.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/compass.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/bicycle.png" alt="" /></li>
                                            <li className="offers_icons_item"><img src="./images/sailboat.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="button book_button"><a href="#">book<span /><span /><span /></a>
                                    </div>
                                    <div className="offer_reviews">
                                        <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 lượt xem</div>
                                        </div>
                                        <div className="offer_reviews_rating" style={{ textAlign: 'center' }}>9.1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Offers;