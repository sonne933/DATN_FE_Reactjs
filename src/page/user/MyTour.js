import React, { useEffect, useRef } from 'react';
import './css/MyTour.css'
import { bana, hoian, phuquoc } from '../../assets/listImage'
export default function MyTour() {
    // Khởi tạo các refs
    const menuItemsRef = useRef(null);
    const contentsRef = useRef(null);

    useEffect(() => {
        const menuItems = menuItemsRef.current.children;
        const contents = contentsRef.current.children;

        const handleItemClick = (item, index) => {
            // Remove active class from all items and contents
            Array.from(menuItems).forEach(i => i.classList.remove('active'));
            Array.from(contents).forEach(c => c.classList.remove('active'));

            // Add active class to clicked item
            item.classList.add('active');

            // Show corresponding content
            const targetId = item.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            targetContent.classList.add('active');
        };

        Array.from(menuItems).forEach((item, index) => {
            item.addEventListener('click', () => handleItemClick(item, index));
        });

        // Clean up event listeners khi component unmount
        return () => {
            Array.from(menuItems).forEach(item => {
                item.removeEventListener('click', handleItemClick);
            });
        };

    }, []); // Dependency array is empty, so this effect will only run once

    return (
        <div className="main">
            <div className="main_offers-tour">
                <div className="menu-container" ref={contentsRef}>
                    <ul className="main-slider" ref={menuItemsRef}>
                        <li data-target="content1" className="active">Tour chưa xuất phát</li>
                        <li data-target="content2">Tour đang khởi hành</li>
                        <li data-target="content3">Tour đã hoàn thành</li>
                        <li data-target="content4">Tour đã hủy</li>
                    </ul>
                    <div className="content active" id="content1">
                        <div className="tour-details-container">
                            <div className="tour-details-left">
                                <img src={hoian} alt="Tour Image" />
                                <h2>Tên tour du lịch Hội An</h2>
                            </div>
                            <div className="tour-details-right">
                                <div className="tour-status">
                                    <strong>Trạng thái</strong> Sắp diễn ra
                                </div>
                                <div className="tour-title">
                                    <p><strong>Thời gian:</strong> 5 ngày 4 đêm</p>
                                    <p><strong>Địa chỉ:</strong> Hà Nội - Đà Nẵng - Hội An</p>
                                    <p><strong>Giá:</strong> 10.000.000 VND</p>
                                </div>
                                <div className="travel-info">
                                    <strong>Thông tin di chuyển:</strong>
                                    <p>Điểm xuất phát: Hà Nội</p>
                                    <p>Điểm đến: Hội An</p>
                                    <p>Ngày xuất phát: 1/1/2023</p>
                                    <p>Phương tiện: Máy bay</p>
                                    <p>Hướng dẫn viên: Nguyễn Văn A</p>
                                    <p>Số điện thoại: 0123456789</p>
                                </div>
                                <div className="invoice-info">
                                    <strong>Thông tin hóa đơn:</strong>
                                    <p>Trạng thái: Đã thanh toán</p>
                                    <p>Hình thức thanh toán: Chuyển khoản</p>
                                    <p>Tổng tiền: 10.000.000 VND</p>
                                    <p>Ngày thanh toán: 1/1/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content2">
                        <div className="tour-details-container">
                            <div className="tour-details-left">
                                <img src={phuquoc} alt="Tour Image" />
                                <h2>Tên tour du lịch Phú Quốc</h2>
                            </div>
                            <div className="tour-details-right">
                                <div className="tour-status">
                                    <strong>Trạng thái</strong> Đang diễn ra
                                </div>
                                <div className="tour-title">
                                    <p><strong>Thời gian:</strong> 5 ngày 4 đêm</p>
                                    <p><strong>Địa chỉ:</strong> Hà Nội - Đà Nẵng - Hội An</p>
                                    <p><strong>Giá:</strong> 10.000.000 VND</p>
                                </div>
                                <div className="travel-info">
                                    <strong>Thông tin di chuyển:</strong>
                                    <p>Điểm xuất phát: Hà Nội</p>
                                    <p>Điểm đến: Hội An</p>
                                    <p>Ngày xuất phát: 1/1/2023</p>
                                    <p>Phương tiện: Máy bay</p>
                                    <p>Hướng dẫn viên: Nguyễn Văn A</p>
                                    <p>Số điện thoại: 0123456789</p>
                                </div>
                                <div className="invoice-info">
                                    <strong>Thông tin hóa đơn:</strong>
                                    <p>Trạng thái: Đã thanh toán</p>
                                    <p>Hình thức thanh toán: Chuyển khoản</p>
                                    <p>Tổng tiền: 10.000.000 VND</p>
                                    <p>Ngày thanh toán: 1/1/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content3">
                        <div className="tour-details-container">
                            <div className="tour-details-left">
                                <img src={bana} alt="Tour Image" />
                                <h2>Tên tour du lịch Bà Nà Hill</h2>
                            </div>
                            <div className="tour-details-right">
                                <div className="tour-status">
                                    <strong>Trạng thái</strong> Đã kết thúc
                                </div>
                                <div className="tour-title">
                                    <p><strong>Thời gian:</strong> 5 ngày 4 đêm</p>
                                    <p><strong>Địa chỉ:</strong> Hà Nội - Đà Nẵng - Hội An</p>
                                    <p><strong>Giá:</strong> 10.000.000 VND</p>
                                </div>
                                <div className="travel-info">
                                    <strong>Thông tin di chuyển:</strong>
                                    <p>Điểm xuất phát: Hà Nội</p>
                                    <p>Điểm đến: Hội An</p>
                                    <p>Ngày xuất phát: 1/1/2023</p>
                                    <p>Phương tiện: Máy bay</p>
                                    <p>Hướng dẫn viên: Nguyễn Văn A</p>
                                    <p>Số điện thoại: 0123456789</p>
                                </div>
                                <div className="invoice-info">
                                    <strong>Thông tin hóa đơn:</strong>
                                    <p>Trạng thái: Đã thanh toán</p>
                                    <p>Hình thức thanh toán: Chuyển khoản</p>
                                    <p>Tổng tiền: 10.000.000 VND</p>
                                    <p>Ngày thanh toán: 1/1/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content" id="content4">
                        <div className="tour-details-container">
                            <div className="tour-details-left">
                                <img src={hoian} alt="Tour Image" />
                                <h2>Tên tour du lịch</h2>
                            </div>
                            <div className="tour-details-right">
                                <div className="tour-status">
                                    <strong>Trạng thái</strong> Đã hủy
                                </div>
                                <div className="tour-title">
                                    <p><strong>Thời gian:</strong> 5 ngày 4 đêm</p>
                                    <p><strong>Địa chỉ:</strong> Hà Nội - Đà Nẵng - Hội An</p>
                                    <p><strong>Giá:</strong> 10.000.000 VND</p>
                                </div>
                                <div className="travel-info">
                                    <strong>Thông tin di chuyển:</strong>
                                    <p>Điểm xuất phát: Hà Nội</p>
                                    <p>Điểm đến: Hội An</p>
                                    <p>Ngày xuất phát: 1/1/2023</p>
                                    <p>Phương tiện: Máy bay</p>
                                    <p>Hướng dẫn viên: Nguyễn Văn A</p>
                                    <p>Số điện thoại: 0123456789</p>
                                </div>
                                <div className="invoice-info">
                                    <strong>Thông tin hóa đơn:</strong>
                                    <p>Trạng thái: Đã hủy</p>
                                    <p>Ngày đặt: 1/1/2023</p>
                                    <p>Ngày hủy: 2/1/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
