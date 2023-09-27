import React, { useEffect, useState } from 'react'
import { profile } from '../../assets/listImage';

export default function CatalogManage() {

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // Event handlers
    const openAddForm = () => {
        setShowAddForm(true);
    };

    const closeAddForm = () => {
        setShowAddForm(false);
    };

    const openEditForm = () => {
        setShowEditForm(true);
    };

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const closeModal = () => {
        setShowEditForm(false);
        setShowDeleteModal(false);
    };

    const handleWindowClick = (event) => {
        if (event.target.id === 'addForm'||event.target.id === 'editForm' || event.target.id === 'deleteModal') {
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
            <div className="header_admin">
                <div className="left_admin">
                    <h1 className="title-heading">Quản Lý Danh Mục</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Admin
                        </a></li>
                        /
                        <li><a href="#" className="active">Quản Lý Danh Mục</a></li>
                    </ul>
                </div>
            </div>
            {/* Insights */}
            <ul className="insights_admin">
                <li>
                    <i className="bx bx-map-pin" />
                    <span className="info">
                        <h3>
                            1,074
                        </h3>
                        <p>Du Lịch miền Bắc</p>
                    </span>
                </li>
                <li><i className="bx bx-map-pin" />
                    <span className="info">
                        <h3>
                            3,944
                        </h3>
                        <p>Du lịch miền trung</p>
                    </span>
                </li>
                <li><i className="bx bx-map-pin" />
                    <span className="info">
                        <h3>
                            14,721
                        </h3>
                        <p>Du lịch miền nam</p>
                    </span>
                </li>
                <li><i className="bx bx-map-pin" />
                    <span className="info">
                        <h3>
                            6,742
                        </h3>
                        <p>Du lịch nước ngoài</p>
                    </span>
                </li>
            </ul>
            {/* End of Insights */}
            {/* model edit and delete */}
            {/* Form Edit */}
            <div id="editForm" className="modal"style={{display: showEditForm ? 'block' : 'none'}}>
                <div className="modal-content">
                    <span className="close-btn"onClick={closeModal}>×</span>
                    <h2>Sửa Thông Tin</h2>
                    <form>
                        Tên danh mục: <input type="text" id="name" placeholder="Tên" /><br /><br />
                        Nội dung: <textarea id="details" placeholder="Chi tiết" defaultValue={""} /><br /><br />
                        Hình ảnh: <input type="file" id="image" /><br /><br />
                        <button type="submit" className="btnluu">Lưu</button>
                        <button type="button" className="close-btn" onClick={closeModal}>Thoát</button>
                    </form>
                </div>
            </div>
            {/* Modal Delete Confirmation */}
            <div id="deleteModal" className="modal"style={{display: showDeleteModal ? 'block' : 'none'}}>
                <div className="modal-content">
                    <span className="close-btn"onClick={closeModal}>×</span>
                    <h2>Bạn có muốn xóa không?</h2>
                    <button className="btnxoa">Xóa</button>
                    <button type="button" className="close-btn"onClick={closeModal}>Thoát</button>
                </div>
            </div>
            {/*end model edit and delete */}
            {/* model newitem */}
            <div id="addForm" className="modal"style={{display: showAddForm ? 'block' : 'none'}}>
                <div className="modal-content">
                    <span className="close-btn"onClick={closeAddForm}>×</span>
                    <h2>Thêm Mới Danh Mục</h2>
                    <form>
                        Danh mục: <input type="text" id="category" placeholder="Danh mục" /><br /><br />
                        Nội dung: <textarea id="content" placeholder="Nội dung" defaultValue={""} /><br /><br />
                        Hình ảnh:
                        <input type="file" id="image" /><br /><br />
                        <button type="submit" className="btnluu">Thêm mới</button>
                        {/* <button type="button" class="close-btn">Thoát</button> */}
                    </form>
                </div>
            </div>
            {/* end new item */}
            <div className="bottom-data_admin">
                <div className="orders_admin">
                    <div className="header_admin">
                        <i className="bx bx-receipt" />
                        <h3>Danh Sách Danh Mục</h3>
                        <i className="bx bx-filter" />
                        <button className="btn add-new-btn " onClick={openAddForm}>
                            Thêm mới
                        </button>
                    </div>
                    <table className="tatle_admin">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên danh mục</th>
                                <th>Nội dung</th>
                                <th>Hình ảnh</th>
                                <th>Trạng thái</th>
                                <th>Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Du Lịch Miền Băc</td>
                                <td>Du Lịch Miền Băc</td>
                                <td>
                                    <img src={profile} />
                                </td>
                                <td><label className="switch active">
                                    <input type="checkbox" />
                                    <span className="slider_admin" />
                                </label></td>
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
