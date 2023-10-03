import React, { useEffect, useState } from 'react'


export default function RequestTourSeller() {

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const openCancelModal = () => {
    setShowCancelModal(true);
  };

  const openAcceptModal = () => {
    setShowAcceptModal(true);
  };

  const closeModal = () => {
    
    setShowCancelModal(false);
    setShowAcceptModal(false)
  };
  const handleWindowClick = (event) => {
    if (event.target.id === 'cancelModal' ||event.target.id === 'acceeptModal') {
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
        <h1>Yêu Cầu Đặt Tour</h1>
        <ul className="breadcrumb">
          <li><a href="#">
              Seller
            </a></li>
          /
          <li><a href="#" className="active">Yêu Cầu Đặt Tour</a></li>
        </ul>
      </div>
    </div>
    {/* Insights */}
    {/* End of Insights */}
    {/* Form Edit */}
     {/* Modal cancel Confirmation */}
     <div id="cancelModal" className="modal-seller" style={{ display: showCancelModal ? 'block' : 'none' }}>
        <div className="modal-content-seller">
          <span className="close-btn"onClick={closeModal}>×</span>
          <h2>Xác nhận hủy?</h2>
          <button className="btnxoa">Hủy</button>
          <button type="button" className="close-btn"onClick={closeModal}>Thoát</button>
        </div>
      </div>
        {/* Modal accept Confirmation */}
     <div id="acceeptModal" className="modal-seller" style={{ display: showAcceptModal ? 'block' : 'none' }}>
        <div className="modal-content-seller">
          <span className="close-btn"onClick={closeModal}>×</span>
          <h2>Xác nhận Yêu cầu Tour?</h2>
          <button className="edit-btn">Chấp nhận</button>
          <button type="button" className="close-btn"onClick={closeModal}>Thoát</button>
        </div>
      </div>
      {/*end model cancel */}
    <div className="bottom-data-seller">
      <div className="orders-seller">
        <div className="header-seller">
          <i className="bx bx-receipt" />
          <h3>Danh sách yêu cầu</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Thông tin người đặt</th>
              <th>Tour </th>
              <th>Xuất phát</th>
              <th>Kết thúc</th>
              <th>Số lượng </th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
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
                <i className="bx bxs-heart" /><span>Tour du lịch Châu Âu </span> <br />
                <i className="bx bxs-location-plus" /> <span>Pháp-Đức-Bỉ</span>
              </td>
              <td>
                <i className="bx bx-calendar" /> <span>25/09/2023</span> <br />
                <i className="bx bx-car" /> <span>Đà Nẵng</span>
              </td>
              <td>
                <i className="bx bx-time-five" /> <span>Đã kết thúc</span>
              </td>
              <td>
                3 
              </td>
              <td>
                <span>Chưa phê duyệt</span>
              </td>
              <td>
                <button className="btn edit-btn" onClick={openAcceptModal}>
                  Chấp nhận
                </button>
                <br />
                <button className="btn huy-btn" onClick={openCancelModal}>
                  Hủy
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td id="noidungTour">
                <i className="bx bx-user" /> <span>Võ Hoàng Anh</span> <br />
                <i className="bx bx-envelope" /> <span>vohaonganh@gmail.com</span> <br />
                <i className="bx bx-phone" /> <span>0123456789</span> <br />
              </td>
              <td id="noidungTour">
                <i className="bx bxs-heart" /> <span>Tour du lịch Quy Nhơn Phú Yên</span> <br />
                <i className="bx bxs-location-plus" /> <span>Quy Nhơn-Phú Yên</span>
              </td>
              <td>
                <i className="bx bx-calendar" /> <span>27/09/2023</span> <br />
                <i className="bx bx-car" /> <span>Hà Nội</span>
              </td>
              <td>
                <i className="bx bx-time-five" /> <span>Đã kết thúc</span>
              </td>
              <td>
                5
              </td>
              <td>
                <span>Chưa phê duyệt</span>
              </td>
              <td>
                <button className="btn edit-btn"onClick={openAcceptModal}>
                  Chấp nhận
                </button>
                <br />
                <button className="btn huy-btn"onClick={openCancelModal}>
                  Hủy
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
