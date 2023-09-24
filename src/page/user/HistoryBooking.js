import React, { useEffect, useState } from 'react'
import './css/HistoryBooking.css'


export default function HistoryBooking() {

    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const rowsPerPage = 5;
        const rows = document.querySelectorAll("tbody tr");
        const paginationBtns = document.querySelectorAll(".pagination-btn");

        function showPage(pageNumber) {
            for (let i = 0; i < rows.length; i++) {
                if (i >= (pageNumber - 1) * rowsPerPage && i < pageNumber * rowsPerPage) {
                    rows[i].style.display = "table-row";
                } else {
                    rows[i].style.display = "none";
                }
            }

            paginationBtns.forEach(btn => {
                if (parseInt(btn.dataset.page) === pageNumber) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        paginationBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                showPage(parseInt(btn.dataset.page));
            });
        });

        // Mặc định hiển thị trang đầu tiên
        showPage(1);
    }, []); // [] là dependency array để đảm bảo mã JavaScript chỉ chạy một lần sau khi component được tạo

    function handleCancelClick() {
        setShowModal(true);
    }
    function confirmCancel() {
        // Đây là nơi bạn thực hiện hành động hủy
        setShowModal(false); // Đóng cửa sổ modal sau khi xác nhận
    }

    return (
        
        <div className="main">
            <div className="main_offers-HistoryBooking">
                <div className="left_main-HistoryBooking">
                    <div className="tours-table">
                        <h2>Danh sách tour đã đặt</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Thông tin người đặt</th>
                                    <th>Thông tin tour</th>
                                    <th>Chi tiết đặt tour</th>
                                    <th>Ghi chú</th>
                                    <th>Tình trạng</th>
                                    <th>Hoạt động</th>
                                    <th>Hủy đơn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Bạn có thể thêm nhiều dòng dữ liệu ở đây */}
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                    <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                    <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                    <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                    <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                    <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                    <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên: Nguyễn Văn A<br />
                                        Email: nva@email.com<br />
                                        Địa chỉ: 123 Đường ABC, TP.HCM
                                    </td>
                                    <td>
                                        Tên tour: Du lịch Đà Lạt<br />
                                        Ngày đi: 01/01/2023<br />
                                        Địa điểm xuất phát: TP.HCM
                                    </td>
                                    <td>
                                        Ngày đặt: 01/12/2022<br />
                                        Số lượng người: 4<br />
                                        Tổng tiền: 12,000,000 VND
                                    </td>
                                    <td>Ghi chú mẫu</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <span className="cancel-icon" onClick={() => setShowModal(true)}>X</span>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button className="pagination-btn" data-page={1}>1</button>
                        {/* Thêm nhiều nút phân trang tùy thuộc vào số lượng trang của bạn */}
                        {/* Ví dụ: <button class="pagination-btn" data-page="2">2</button> */}
                        <button className="pagination-btn" data-page={2}>2</button>
                    </div>
                </div>
            </div>
            {
                showModal && 
                <div className="confirmation-modal">
                    <div className="modal-content">
                        <p>Bạn có muốn hủy không?</p>
                        <button onClick={confirmCancel}>Hủy</button>
                        <button onClick={() => setShowModal(false)}>Thoát</button>
                    </div>
                </div>
            }
        </div>

    )
}
