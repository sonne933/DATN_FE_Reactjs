import React, { useState, useEffect, useRef } from 'react'
import './css/TourDetails.css'
// import './css/TourDetails.js'
import { bana, hoian, phuquoc } from '../../assets/listImage'
export default function TourDetails() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Đặt giá trị mặc định cho ngày khởi hành
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    const [departureDate, setDepartureDate] = useState(formattedDate);

    // Tạo một reference cho các slides và thumbnails
    const slidesRef = useRef([]);
    const addSlideRef = el => {
        if (el && !slidesRef.current.includes(el)) {
            slidesRef.current.push(el);
        }
    };

    useEffect(() => {
        slidesRef.current[currentSlide].style.display = 'block';
    }, [currentSlide]);
    return (
        <div className="main">
            <div className="main_offers_tour-details">
                <div className="tour-container_tour-details">
                    <div className="tour-details_tour-details">
                        {/* <img src="./images/hoian-slide.jpg" alt="Ảnh tour du lịch"> */}
                        <div className="slider-container">
                            <div className="main-slider" style={{ height: '270px' }}>
                                <img src={bana} alt="Image 1" className="slide" ref={addSlideRef} style={{ display: currentSlide === 0 ? 'block' : 'none' }} />
                                <img src={hoian} alt="Image 2" className="slide" ref={addSlideRef} style={{ display: currentSlide === 1 ? 'block' : 'none' }} />
                                <img src={phuquoc} alt="Image 3" className="slide" ref={addSlideRef} style={{ display: currentSlide === 2 ? 'block' : 'none' }} />
                            </div>
                            <div className="thumbnails">
                                <img src={bana} alt="Thumbnail 1" onClick={() => setCurrentSlide(0)} />
                                <img src={hoian} alt="Thumbnail 2" onClick={() => setCurrentSlide(1)} />
                                <img src={phuquoc} alt="Thumbnail 3" onClick={() => setCurrentSlide(2)} />
                            </div>
                        </div>
                        <div className="tour-info">
                            <span>Mã tour: ABC123</span> |
                            <span>Địa điểm: Hội An</span> |
                            <span>Dịch vụ khác: Xe đưa đón, hướng dẫn viên</span>
                        </div>
                        <div className="additional-info">
                            <h3>Dịch vụ kèm theo:</h3>
                            <p>Ăn sáng, ăn trưa </p>
                            <h3>Mô tả:</h3>
                            <p>Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam.
                                Hội An là một thành phố thuộc tỉnh Quảng Nam có nhiều khu phố cổ được xây từ thế kỷ 16 và vẫn còn tồn tại gần như nguyên vẹn đến nay. Trong các tài liệu cổ của phương Tây, Hội An được gọi Faifo. Phố cổ Hội An được công nhận là một di sản thế giới UNESCO từ năm 1999. Đây là địa điểm thu hút được rất nhiều khách Du Lịch Đà Nẵng – Hội An.</p>
                            <h3>Điểm nổi bật:</h3>
                            <ul>
                                <li>Phố Cổ Hội An</li>
                                <li>Rừng dừa Bảy mẫ</li>
                                {/* Thêm nhiều điểm nổi bật khác */}
                            </ul>
                            <h3>Lịch trình:</h3>
                            {/* <p>Mô tả lịch trình hàng ngày, hoạt động, địa điểm thăm quan, v.v.</p> */}
                            <ul>
                                <li>Ăn sáng tại khách sạn</li>
                                <li>Thăm Phố Cổ Hội An</li>
                                <li>Thăm Rừng Dừa Bảy Mẫu</li>
                                <li>Thăm quan biển Cửa Đại</li>
                            </ul>
                            <h3>Đánh giá:</h3>
                            <div className="rating">⭐⭐⭐⭐☆</div> {/* Số sao có thể thay đổi */}
                        </div>
                    </div>
                    <div className="booking-details_tour-details">
                        <h3>Giá tour: 1.000.000 VND</h3>
                        <h3>1 Ngày</h3>
                        <label>Ngày khởi hành:</label>
                        <input type="date" name="departure-date" />
                        <label>Số lượng khách:</label>
                        <input type="number" name="guest-number" min={1} defaultValue={1} />
                        <p className="notice">Lưu ý: Vui lòng kiểm tra thông tin trước khi đặt tour.</p>
                        <button className="book-btn" onclick="location.href='booking.html'">Đặt Tour</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
