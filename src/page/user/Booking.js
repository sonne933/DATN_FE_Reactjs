import React from 'react'
import "./css/Booking.css"
import { offers1 } from '../../assets/listImage'
import { useLocation } from 'react-router-dom';


export default function Booking() {

    const location = useLocation();
    const tourBooking = location.state?.tourBooking;
    console.log(tourBooking);

    return (
        <div className="main-booking ">
            <div className="main_offers-booking">
                <div className="left_main">
                    <div className="contact-info-booking">
                        <div className="booking-form">
                            <h2>Thông Tin</h2>
                            <label htmlFor="name">Tên:</label>
                            <input type="text" id="name" defaultValue="John Doe" />
                            <label htmlFor="address">Địa chỉ:</label>
                            <input type="text" id="address" defaultValue="Đà Nẵng" />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" defaultValue="johndoe123@email.com" />
                            <label htmlFor="phone">Số điện thoại:</label>
                            <input type="tel" id="phone" defaultValue="0123456789" />
                        </div>
                        <h3>Payment Method</h3>
                        <label>
                            <input type="radio" name="payment-method" defaultValue="credit-card" defaultChecked /> Credit Card
                        </label>
                        <label>
                            <input type="radio" name="payment-method" defaultValue="paypal" /> VNPay
                        </label>
                        <label>
                            <input type="radio" name="payment-method" defaultValue="bank-transfer" /> Thanh toán tại quầy
                        </label>
                        <button id="payment-btn">Thanh Toán</button>
                    </div>
                </div>
                <div className="booking main_offers__box">
                    <h2 className="offers_title-booking">Booking Tour</h2>
                    <div className="offers_items-booking">
                        <div className="offers_image-booking">
                            <div className="offers_image_background" style={{ backgroundImage: `url(${offers1})`, height: '300px', width: '230[x]' }}>
                            </div>
                            <div className="offers_name-booking"><a href="#">Tour Tây Bắc</a></div>
                        </div>
                        <div className="offers_content-booking">
                            <div className="offers_price-booking">Tour du lịch Miền Bắc</div>
                            <div className="tour-info-booking">
                                <p><strong>Địa điểm: </strong>Tây Bắc</p>
                                <p><strong>Thời gian: </strong> 5 Ngày</p>
                                <p><strong>Số Lượng: </strong> 1 người</p>
                                <p><strong>Total: </strong> 750.000 VND</p>
                            </div>
                            <div className="offers_link-booking"><a href="offers.html">Đọc thêm</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
