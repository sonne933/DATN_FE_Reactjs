import React, { useState, useEffect, useRef } from 'react'
import './css/TourDetails.css'
// import './css/TourDetails.js'
import { bana, hoian, phuquoc } from '../../assets/listImage'
import { Link, useLocation, useParams } from 'react-router-dom';
import BaseUrl from '../../utils/BaseUrl';

export default function TourDetails() {
    const location = useLocation();
    const selectedTour = location.state?.selectedTour;

    const { tourId } = useParams();
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
        if (slidesRef.current[currentSlide]) {
            slidesRef.current[currentSlide].style.display = 'block';
        }
    }, [currentSlide]);

    // hiển thị tour


    const fetchTourFromServer = async (tourId) => {
        try {
            const response = await fetch(`${BaseUrl}tour/${tourId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu từ server:", error);
            return null;
        }
    };
    const [tourDetail, setTourDetail] = useState(null);
    // console.log(tourDetail);
    useEffect(() => {
        const loadTourDetail = async () => {
            const detail = await fetchTourFromServer(tourId);
            setTourDetail(detail);
            
        };

        loadTourDetail();
    }, [tourId]);
    // console.log(TourDetails);
    function getDurationString(hanhtrinh) {
        // Tính số ngày trong hành trình
        const numDays = hanhtrinh.filter(item => item.time.toLowerCase().includes("ngày")).length;
    
        switch (numDays) {
            case 0:
                return "chưa rõ";
            case 1:
                return "1 Ngày 1 Đêm";
            case 2:
                return "2 Ngày 1 Đêm";
            case 3:
                return "3 Ngày 2 Đêm";
            default:
                return `${numDays} Ngày ${numDays - 1} Đêm`;
        }
    }
    
    // Sử dụng hàm trên trong render:
    const durationString = getDurationString(tourDetail?.hanhtrinh || []);
    
    return (
        <div className="main">
            <div className="main_offers_tour-details">
                <div className="tour-container_tour-details">
                    <div className="tour-details_tour-details">
                        {/* <img src="./images/hoian-slide.jpg" alt="Ảnh tour du lịch"> */}
                        <div className="slider-container">
                            <div className="main-slider" style={{ height: '270px' }}>
                                {tourDetail?.image?.map((img, index) => (
                                    <img
                                        key={img.uid}
                                        src={img.url}
                                        alt={`Image ${index + 1}`}
                                        className="slide"
                                        ref={addSlideRef}
                                        style={{ display: currentSlide === index ? 'block' : 'none' }}
                                    />
                                ))}
                            </div>
                            <div className="thumbnails">
                                {tourDetail?.image?.map((img, index) => (
                                    <img
                                        key={img.uid}
                                        src={img.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="tour-info">
                            <span>Mã tour: {tourDetail?.id}</span> |
                            <span>Địa điểm: {tourDetail?.address}</span> |
                            <span>Dịch vụ khác: {tourDetail?.vehicle}</span>
                        </div>
                        <div className="additional-info">
                            <h3>Dịch vụ kèm theo:</h3>
                            <p>{tourDetail?.vehicle} </p>
                            <h3>Mô tả:</h3>
                            <p>{tourDetail?.describe}</p>

                            <h3>Lịch trình:</h3>
                            {/* <p>Mô tả lịch trình hàng ngày, hoạt động, địa điểm thăm quan, v.v.</p> */}
                            <ul>
                                {tourDetail?.hanhtrinh.map((item, index) => (
                                    <li key={index}>
                                        {item.time} {item.todo}
                                    </li>
                                ))}
                            </ul>
                            <h3>Đánh giá:</h3>
                            <div className="rating">⭐⭐⭐⭐☆</div> {/* Số sao có thể thay đổi */}
                        </div>
                    </div>
                    <div className="booking-details_tour-details">
                        <h3>Giá tour: {tourDetail?.price} VND</h3>
                        <h3>{durationString}</h3>
                        <label>Ngày khởi hành:</label>
                        <input type="date" name="departure-date" />
                        <label>Số lượng khách:</label>
                        <input type="number" name="guest-number" min={1} defaultValue={1} />
                        <p className="notice">Lưu ý: Vui lòng kiểm tra thông tin trước khi đặt tour.</p>
                        {tourDetail && (
                        <Link className="book-btn" to={{
                            pathname: `/booking/${tourDetail.id}`,
                            state: { tourBooking: tourDetail }
                        }}>Đặt Tour</Link>
                        )}

                    </div>
                </div>
            </div>
        </div>

    )
}
