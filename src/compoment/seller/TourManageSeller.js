import React, { useEffect, useState } from 'react'
import { profile } from '../../assets/listImage'

export default function TourManageSeller() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openAddForm = () => {
    setShowAddForm(true);
  };
  const openEditForm = () => {
    setShowEditForm(true);
  };


  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowAddForm(false);
    setShowEditForm(false);
    setShowDeleteModal(false);
  };

  const handleWindowClick = (event) => {
    if (event.target.id === 'addForm' || event.target.id === 'editForm' || event.target.id === 'deleteModal') {
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
          <h1>Quản lý Tour Du Lịch</h1>
          <ul className="breadcrumb">
            <li><a href="#">
              Seller
            </a></li>
            /
            <li><a href="#" className="active">Quản lý Tour Du Lịch</a></li>
          </ul>
        </div>
      </div>
      {/* Insights */}
      {/* End of Insights */}
      {/* model edit and delete */}
      {/* Form Edit */}
      <div id="editForm" className="modal-seller" style={{ display: showEditForm ? 'block' : 'none' }}>
        <div className="modal-content-seller">
          <span className="close-btn"onClick={closeModal}>×</span>
          <h2>Sửa Thông Tin</h2>
          <form>
            Tên danh mục: <input type="text" id="name" placeholder="Tên địa điểm" /><br /><br />
            Nội dung: <textarea id="details" placeholder="Chi tiết" defaultValue={""} /><br /><br />
            Giá: <input type="text" id="price" placeholder="VNĐ" /><br /><br />
            Hình ảnh: <input type="file" id="image" /><br /><br />
            <button type="submit" className="btnluu">Lưu</button>
            <button type="button" className="close-btn"onClick={closeModal}>Thoát</button>
          </form>
        </div>
      </div>
      {/* Modal Delete Confirmation */}
      <div id="deleteModal" className="modal-seller" style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div className="modal-content-seller">
          <span className="close-btn"onClick={closeModal}>×</span>
          <h2>Bạn có muốn xóa không?</h2>
          <button className="btnxoa">Xóa</button>
          <button type="button" className="close-btn"onClick={closeModal}>Thoát</button>
        </div>
      </div>
      {/*end model edit and delete */}
      {/* model newitem */}
      <div id="addForm" className="modal-seller" style={{ display: showAddForm ? 'block' : 'none' }}>
        <div className="modal-content-seller">
          <span className="close-btn"onClick={closeModal}>×</span>
          <h2>Thêm Mới Địa Điểm</h2>
          <form>
            Tên địa điểm: <input type="text" id="category" placeholder="Tên địa điểm" /><br /><br />
            Nội dung: <textarea id="content" placeholder="Nội dung" defaultValue={""} /><br /><br />
            Hình ảnh:
            Giá: <input type="text" id="price" placeholder="VNĐ" /><br /><br />
            <input type="file" id="image" /><br /><br />
            <button type="submit" className="btnluu">Thêm mới</button>
            {/* <button type="button" class="close-btn">Thoát</button> */}
          </form>
        </div>
      </div>
      {/* end new item */}
      <div className="bottom-data-seller">
        <div className="orders-seller">
          <div className="header-seller">
            <i className="bx bx-receipt" />
            <h3>Danh Sách Tour Du Lịch</h3>
            <i className="bx bx-filter" />
            <button className="btn add-new-btn "onClick={openAddForm}>
              Thêm tour
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Địa điểm</th>
                <th>Nội dung</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Hoạt động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Du Lịch Đà Nẵng</td>
                <td id="noidungTour">Du Lịch Miền Trung địa điểm TP Đà Nãng
                </td><td>
                  <img src={profile} />
                </td>
                <td>
                  920.000 VND
                </td>
                <td>
                  <label className="switch active">
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                </td>
                <td>
                  <button className="btn edit-btn"onClick={openEditForm}>
                    <i className="bx bx-edit" />
                  </button>
                  <button className="btn delete-btn"onClick={openDeleteModal}>
                    <i className="bx bx-trash" />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </main>

  )
}
