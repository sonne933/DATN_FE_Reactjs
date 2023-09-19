import React, { Component } from 'react';
import "./Blog.css"
import { blog_1, blog_2, blog_3, gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, latest_1, offers_slide } from '../../assets/listImage';

class Blog extends Component {
    render() {
        return (
            <div className="main">
                <div className="main__slide_offers">
                    <div className="home_slide__item">
                        <div className="home_slide__background" style={{ backgroundImage: `url(${offers_slide})` }} />
                        <div className="home__content">
                            <div className="home__title animated bounceInDown">
                                Tin tức
                            </div>
                        </div>
                    </div>
                </div>
                {/*        blog*/}
                <div className="blog">
                    <div className="box blog__box">
                        <div className="blog__list">
                            <div className="blog_post">
                                <div className="blog_post_image">
                                    <img className="zoom_img" src={blog_1}alt="" />
                                    <div className="blog_post_date"><span>21/04/2022</span></div>
                                </div>
                                <div className="blog_post_meta">
                                    <ul>
                                        <li className="blog_post_meta_item"><a href="#">by TOUR VIET</a></li>
                                        <li className="blog_post_meta_item"><a href="#">Miền Trung</a></li>
                                        <li className="blog_post_meta_item"><a href="#">99 bình luận</a></li>
                                    </ul>
                                </div>
                                <div className="blog_post_title"><a href="#">VỀ MIỀN TRUNG THƯƠNG NHỚ</a></div>
                                <div className="blog_post_text"><p>Tôi sẽ kể cho bạn nghe về chuyến đi đầy thơ mộng, bình dị của
                                    mình ở
                                    miền Trung yêu dấu. Nơi ấy đầy nắng, đầy gió, những cảnh đẹp ngút ngàn và nhiều di sản văn
                                    hóa độc đáo. Nơi ấy có những nụ cười ấm áp, món ăn tuyệt vời và có cả những trái tim “lạc
                                    lối” không muốn quay về…</p>
                                </div>
                                <div className="blog_post_link"><a href="#">Xem tiếp...</a></div>
                            </div>
                            <div className="blog_post">
                                <div className="blog_post_image">
                                    <img className="zoom_img" src={blog_2} alt="" />
                                    <div className="blog_post_date"><span>21/04/2022</span></div>
                                </div>
                                <div className="blog_post_meta">
                                    <ul>
                                        <li className="blog_post_meta_item"><a href="#">by TOUR VIET</a></li>
                                        <li className="blog_post_meta_item"><a href="#">Miền Bắc</a></li>
                                        <li className="blog_post_meta_item"><a href="#">54 bình luận</a></li>
                                    </ul>
                                </div>
                                <div className="blog_post_title"><a href="#">MỘT HÀNH TRÌNH - BA ĐIỂM ĐẾN DI SẢN PHƯƠNG BẮC</a>
                                </div>
                                <div className="blog_post_text"><p>Chỉ một hành trình, du khách có thể khám phá đến ba di sản nổi
                                    tiếng của Việt Nam: vịnh Hạ Long, Tràng An và thành nhà Hồ… Đặc biệt, dịch vụ nghỉ dưỡng cao
                                    cấp, sự kết hợp của Vietravel cùng hãng hàng không Bambo Airways đã mang đến cho bạn mức giá
                                    tốt nhất trong mùa hè này.</p>
                                </div>
                                <div className="blog_post_link"><a href="#">Xem tiếp...</a></div>
                            </div>
                            <div className="blog_post">
                                <div className="blog_post_image">
                                    <img className="zoom_img" src={blog_3}  alt="" />
                                    <div className="blog_post_date"><span>21/04/2022</span></div>
                                </div>
                                <div className="blog_post_meta">
                                    <ul>
                                        <li className="blog_post_meta_item"><a href="#">by TOUR VIET</a></li>
                                        <li className="blog_post_meta_item"><a href="#">Miền Bắc</a></li>
                                        <li className="blog_post_meta_item"><a href="#">54 bình luận</a></li>
                                    </ul>
                                </div>
                                <div className="blog_post_title"><a href="#">TOUR LỄ 30/4 VÀ 1/5: VÌ SAO DU LỊCH TRỌN GÓI VẪN CHIẾM
                                    ƯU THẾ?</a>
                                </div>
                                <div className="blog_post_text"><p>Với 5 ngày nghỉ liên tiếp, lễ 30/4 &amp;1/5 năm nay hứa hẹn sẽ là “kỳ
                                    nghỉ vàng” cho nhiều gia đình và dân công sở. Theo khảo sát, tour du lịch trọn gói đến từ
                                    các hãng lữ hành tên tuổi vẫn chiếm ưu thế áp đảo trên thị trường với rất nhiều ưu điểm nổi
                                    trội như: mức giá ổn định, nhiều điểm đến mới lạ và ưu đãi giảm giá hấp dẫn…</p>
                                </div>
                                <div className="blog_post_link"><a href="#">Xem tiếp...</a></div>
                            </div>
                            <div className="blog_navigation">
                                <ul>
                                    <li className="blog_dot active">01.</li>
                                    <li className="blog_dot"> 02.</li>
                                    <li className="blog_dot"> 03.</li>
                                    <li className="blog_dot">...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog__sidebar">
                            <div className="sidebar_times">
                                <div className="sidebar_title">Thời gian</div>
                                <div className="sidebar_list">
                                    <ul>
                                        <li><a href>Tháng 1,2022</a></li>
                                        <li><a href>Tháng 2,2022</a></li>
                                        <li><a href>Tháng 3,2022</a></li>
                                        <li><a href>Tháng 4,2022</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar_categories">
                                <div className="sidebar_title">Danh mục</div>
                                <div className="sidebar_list">
                                    <ul>
                                        <li><a href>Đà Nẵng</a></li>
                                        <li><a href>Quảng Năm</a></li>
                                        <li><a href>Huế</a></li>
                                        <li><a href>Hà Nội</a></li>
                                        <li><a href>Hồ Chí Minh</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar_latest_posts">
                                <div className="sidebar_title">Bài viết mới nhất</div>
                                <div className="latest_posts">
                                    <div className="latest_post">
                                        <div className="latest_post_image"><img src={latest_1} alt="" /></div>
                                        <div className="latest_post_content">
                                            <div className="latest_post_title"><a href="#">Bãi biển đẹp ở Đà Nẵng</a></div>
                                            <div className="latest_post_meta">by ViVuViet - 21/04/2022</div>
                                        </div>
                                    </div>
                                    <div className="latest_post">
                                        <div className="latest_post_image"><img src={latest_1} alt="" /></div>
                                        <div className="latest_post_content">
                                            <div className="latest_post_title"><a href="#">Cẩm nang du lịch Quảng Nam</a></div>
                                            <div className="latest_post_meta">by ViVuViet - 21/04/2022</div>
                                        </div>
                                    </div>
                                    <div className="latest_post">
                                        <div className="latest_post_image"><img src={latest_1}  alt="" /></div>
                                        <div className="latest_post_content">
                                            <div className="latest_post_title"><a href="#">Các tour biển đảo Việt Nam</a></div>
                                            <div className="latest_post_meta">by TOUR VIET - 21/04/2022</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_gallery">
                                <div className="sidebar_title">Bộ sưu tập</div>
                                <div className="gallery_content">
                                    <ul className="gallery_items">
                                        <li className="gallery_item"><a href="#"><img className="imggg" src={gallery_1} alt="" /></a>
                                        </li>
                                        <li className="gallery_item"><a href="#"><img src={gallery_2} alt="" /></a>
                                        </li>
                                        <li className="gallery_item"><a href="#"><img src={gallery_3} alt="" /></a>
                                        </li>
                                        <li className="gallery_item"><a href="#"><img src={gallery_4}alt="" /></a>
                                        </li>
                                        <li className="gallery_item"><a href="#"><img src={gallery_5} alt="" /></a>
                                        </li>
                                        <li className="gallery_item"><a href="#"><img src={gallery_6} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Blog;