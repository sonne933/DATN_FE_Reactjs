import React, { useEffect, useState } from 'react'
import { profile } from '../../assets/listImage';

export default function TourManage() {

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [switch1Active, setSwitch1Active] = useState(false); // switch1 ban đầu được bật
    const [switch2Active, setSwitch2Active] = useState(false); // switch2 ban đầu được tắt
    const [switch3Active, setSwitch3Active] = useState(true);  // switch3 ban đầu được bật






    // Event handlers
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
        setShowEditForm(false);
        setShowDeleteModal(false);
        setShowAddForm(false);
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

    // check trạng thái
    const handleSwitch1Click = () => {
        setSwitch1Active(prevState => !prevState);
    };

    const handleSwitch2Click = () => {
        setSwitch2Active(prevState => !prevState);
    };

    const handleSwitch3Click = () => {
        setSwitch3Active(prevState => !prevState);
    };

    return (
        <main>
            <div className="header_admin">
                <div className="left_admin">
                    <h1 className="title-heading">Quản Lý Danh Sách Tour</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Admin
                        </a></li>
                        /
                        <li><a href="#" className="active">Quản Lý Danh Sách Tour</a></li>
                    </ul>
                </div>
            </div>
            {/* Insights */}
            {/* End of Insights */}
            {/* model edit and delete */}
            {/* Form Edit */}
            <div id="editForm" className="modal" style={{ display: showEditForm ? 'block' : 'none' }}>
                <div className="modal-content-additem">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Sửa Thông Tin</h2>
                    <form>
                        <label>Danh mục:</label>
                        <select id="categorySelection">
                            {/* Đặt các options cho danh mục ở đây */}
                            <option value="cat1">Danh mục 1</option>
                            <option value="cat2">Danh mục 2</option>
                        </select><br /><br />

                        <label>Tên Tour:</label>
                        <input type="text" id="tourName" placeholder="Tên Tour" /><br /><br />

                        <label>Địa điểm:</label>
                        <input type="text" id="location" placeholder="Địa điểm" /><br /><br />

                        <label>Nội dung:</label>
                        <textarea id="content" placeholder="Nội dung"></textarea><br /><br />

                        <label>Giá:</label>
                        <input type="text" id="price" placeholder="VNĐ" /><br /><br />

                        <label>Giảm giá:</label>
                        <select id="discount">
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                        </select><br /><br />

                        <label>Hình ảnh:</label>
                        <input type="file" id="image" multiple /><br /><br />

                        <label>Ngày xuất phát:</label>
                        <input type="date" id="departureDate" /><br /><br />

                        <label>Lịch trình:</label>
                        <select id="schedule">
                            <option value="1day">1 ngày 1 đêm</option>
                            <option value="2days">2 ngày 1 đêm</option>
                            <option value="3days">3 ngày 2 đêm</option>
                        </select><br /><br />

                        <label>Lịch trình chi tiết:</label>
                        <textarea id="detailedSchedule" placeholder="Chi tiết lịch trình"></textarea><br /><br />
                        <button type="submit" className="btnluu">Lưu</button>
                        <button type="button" className="close-btn" onClick={closeModal}>Thoát</button>
                    </form>
                </div>
            </div>
            {/* Modal Delete Confirmation */}
            <div id="deleteModal" className="modal" style={{ display: showDeleteModal ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Bạn có muốn xóa không?</h2>
                    <button className="btnxoa">Xóa</button>
                    <button type="button" className="close-btn" onClick={closeModal}>Thoát</button>
                </div>
            </div>
            {/*end model edit and delete */}
            {/* model newitem */}
            <div id="addForm" className="modal" style={{ display: showAddForm ? 'block' : 'none' }}>
                <div className="modal-content-additem">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Thêm Mới Địa Điểm</h2>
                    <form>
                        <label>Danh mục:</label>
                        <select id="categorySelection">
                            {/* Đặt các options cho danh mục ở đây */}
                            <option value="cat1">Danh mục 1</option>
                            <option value="cat2">Danh mục 2</option>
                        </select><br /><br />

                        <label>Tên Tour:</label>
                        <input type="text" id="tourName" placeholder="Tên Tour" /><br /><br />

                        <label>Địa điểm:</label>
                        <input type="text" id="location" placeholder="Địa điểm" /><br /><br />

                        <label>Nội dung:</label>
                        <textarea id="content" placeholder="Nội dung"></textarea><br /><br />

                        <label>Giá:</label>
                        <input type="text" id="price" placeholder="VNĐ" /><br /><br />

                        <label>Giảm giá:</label>
                        <select id="discount">
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                        </select><br /><br />

                        <label>Hình ảnh:</label>
                        <input type="file" id="image" multiple /><br /><br />

                        <label>Ngày xuất phát:</label>
                        <input type="date" id="departureDate" /><br /><br />

                        <label>Lịch trình:</label>
                        <select id="schedule">
                            <option value="1day">1 ngày 1 đêm</option>
                            <option value="2days">2 ngày 1 đêm</option>
                            <option value="3days">3 ngày 2 đêm</option>
                        </select><br /><br />

                        <label>Lịch trình chi tiết:</label>
                        <textarea id="detailedSchedule" placeholder="Chi tiết lịch trình"></textarea><br /><br />

                        <button type="submit" className="btnluu">Thêm mới</button>
                    </form>
                </div>
            </div>
            {/* end new item */}
            <div className="bottom-data_admin">
                <div className="orders_admin">
                    <div className="header_admin">
                        <i className="bx bx-receipt" />
                        <h3>Danh Sách Tour</h3>
                        <i className="bx bx-filter" />
                        <button className="btn add-new-btn " onClick={openAddForm}>
                            Thêm mới
                        </button>
                    </div>
                    <table className="tatle_admin">
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
                                    <label className={`switch ${switch1Active ? 'active-admin' : ''}`} onClick={handleSwitch1Click}>

                                        <input type="checkbox" checked={switch1Active} readOnly onClick={e => e.stopPropagation()} />
                                        <span className="slider_admin"></span>
                                    </label>
                                </td>
                                <td>
                                    <button className="btn edit-btn" onClick={openEditForm}>
                                        <i className="bx bx-edit" />
                                    </button>
                                    <button className="btn delete-btn" onClick={openDeleteModal}>
                                        <i className="bx bx-trash" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Du Lịch Đà Nẵng</td>
                                <td id="noidungTour">Du Lịch Miền Trung địa điểm TP Đà Nãng
                                </td><td>
                                    <img src={profile} />
                                </td>
                                <td>
                                    920.000 VND
                                </td>
                                <td>
                                    <label className={`switch ${switch2Active ? 'active-admin' : ''}`} onClick={handleSwitch2Click}>
                                        <input type="checkbox" checked={switch2Active} readOnly onClick={e => e.stopPropagation()} />
                                        <span className="slider_admin"></span>
                                    </label>
                                </td>
                                <td>
                                    <button className="btn edit-btn" onClick={openEditForm}>
                                        <i className="bx bx-edit" />
                                    </button>
                                    <button className="btn delete-btn" onClick={openDeleteModal}>
                                        <i className="bx bx-trash" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Du Lịch Đà Nẵng</td>
                                <td id="noidungTour">Du Lịch Miền Trung địa điểm TP Đà Nãng
                                </td><td>
                                    <img src={profile} />
                                </td>
                                <td>
                                    920.000 VND
                                </td>
                                <td>
                                    <label className={`switch ${switch3Active ? 'active-admin' : ''}`} onClick={handleSwitch3Click}>
                                        <input type="checkbox" checked={switch3Active} readOnly onClick={e => e.stopPropagation()} />
                                        <span className="slider_admin"></span>
                                    </label>
                                </td>
                                <td>
                                    <button className="btn edit-btn" onClick={openEditForm}>
                                        <i className="bx bx-edit" />
                                    </button>
                                    <button className="btn delete-btn" onClick={openDeleteModal}>
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
