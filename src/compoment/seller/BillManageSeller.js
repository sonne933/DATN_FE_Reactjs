import React, { useEffect, useState } from 'react'




export default function BillManageSeller() {

  const [showBill, setShowBill] = useState(false);
  const openShowBill = () => {
    setShowBill(true);
  };
  const closeModal = () => {
    setShowBill(false);
   
  };
  const handleWindowClick = (event) => {
    if (event.target.id === 'chitietForm' ) {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => {
        window.removeEventListener('click', handleWindowClick);
    };
}, []);
  return (
    <main>
  <div className="header-seller">
    <div className="left-seller">
      <h1>Quản Lý Hóa Đơn</h1>
      <ul className="breadcrumb">
        <li><a href="#">
            Seller
          </a></li>
        /
        <li><a href="#" className="active">Quản Lý Hóa Đơn</a></li>
      </ul>
    </div>
  </div>
  {/* model xemitem */}
  <div id="chitietForm" className="modal-seller"style={{ display: showBill ? 'block' : 'none' }}>
    <div className="modal-content-seller">
      <span className="close-btn"onClick={closeModal}>×</span>
      <h2>Chi Tiết Hóa Đơn</h2>
      <form>
        <h3>Thông tin người đặt</h3>
        Họ và tên: <label type="text" id="name" name="name">Nguyễn Ngọc Tú </label><br /><br />
        Email: <label type="text" id="email" name="email">nguyentu85242@gmai.com </label><br /><br />
        Số điện thoại: <label type="text" id="phone" name="phone">0356918267 </label><br /><br />
        <h3>Thông tin tour</h3>
        Tour:<label type="text" id="tour" name="tour"> Tour du lịch Châu Âu </label><br /><br />
        Ngày xuất phát: <label type="text" id="date" name="date">25/09/2023</label><br /><br />
        Địa điểm: <label htmlFor>Đà Nẵng</label> <br /><br />
        <h3>Chi tiết đặt tour</h3>
        Ngày đặt: 
        Số người:
        Tổng tiền: <label type="text" id="price" name="price" placeholder="VNĐ">20.000.000</label> <br /><br />
        Ghi chú: <label type="textarea" id="ghichu" name="ghichu">...</label> <br /><br />
        {/* <button type="submit" class="btnluu">Thêm mới</button> */}
        <button type="button" className="close-btn" onClick={closeModal}>Thoát</button>
      </form>
    </div>
  </div>
  {/* end new item */}
  {/* Form Edit */}
  <div className="bottom-data-seller">
    <div className="orders-seller">
      <div className="header-seller">
        <i className="bx bx-receipt" />
        <h3>Danh sách hóa đơn</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Thông tin người đặt</th>
            <th>Thông tin tour </th>
            <th>Chi tiết đặt tour</th>
            <th>Tình trạng</th>
            <th>Chi tiết</th>
            <th>Hành động</th>
            <th>Hủy đơn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td id="noidungTour">
              <i className="bx bx-user" /> <span>Nguyễn Ngọc Tú</span> <br />
              <i className="bx bx-envelope" /> <span>nguyetu85242@gmail.com</span> <br />
              <i className="bx bx-phone" /> <span>0356918267</span> <br />
            </td>
            <td id="noidungTour">
              <i className="bx bxs-heart" /><span>Tour du lịch Châu Âu</span> <br />
              <i className="bx bx-calendar-check" />Ngày xuất phát: <span>25/09/2021</span> <br />
              <i className="bx bx-car" />Địa điểm: <span>Đà Nẵng</span>
            </td>
            <td>
              Ngày đặt: <span>20/09/2023</span> <br />
              Số người: <span>3</span> <br />
              Tổng tiền: <span>20.000.000đ</span> <br />
              Ghi chú: <span>...</span>
            </td>
            <td>
              TT trước <span className="datethanhtoantruoc">24/09/2023</span> <br />
              <span><i className="bx bx-loader" />Chờ xác nhận</span>
            </td>
            <td>
              <button className="btn xem-btn" onClick={openShowBill}>
                Xem
              </button>
            </td>
            <td>
              <button className="btn btn-xacnhan">
                Xác nhận
              </button>
            </td>
            <td>
              <button className="btn btn-huydon">
                <i className="bx bx-x-circle" />
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td id="noidungTour">
              <i className="bx bx-user" /> <span>Nguyễn Phan Hồng Sơn</span> <br />
              <i className="bx bx-envelope" /> <span>sonne@gmail.com</span> <br />
              <i className="bx bx-phone" /> <span>099999999</span> <br />
            </td>
            <td id="noidungTour">
              <i className="bx bxs-heart" /><span>Tour du lịch Bangkok </span> <br />
              <i className="bx bx-calendar-check" />Ngày xuất phát: <span>30/09/2021</span> <br />
              <i className="bx bx-car" />Địa điểm: <span>TP HCM</span>
            </td>
            <td>
              Ngày đặt: <span>28/09/2023</span> <br />
              Số người: <span>2</span> <br />
              Tổng tiền: <span>7.500.000đ</span> <br />
              Ghi chú: <span>...</span>
            </td>
            <td>
              TT trước <span className="datethanhtoantruoc">29/09/2023</span> <br />
              <span><i className="bx bx-loader" />Chờ xác nhận</span>
            </td>
            <td>
              <button className="btn xem-btn"onClick={openShowBill}>
                Xem
              </button>
            </td>
            <td>
              <button className="btn btn-xacnhan">
                Xác nhận
              </button>
            </td>
            <td>
              <button className="btn btn-huydon">
                <i className="bx bx-x-circle" />
              </button>
            </td>
          </tr>
          {/* Thêm các dòng dữ liệu khác tương tự ở đây */}
        </tbody>
      </table>
    </div>
  </div>
</main>

  )
}
