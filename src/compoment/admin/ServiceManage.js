import React, { useEffect, useState } from 'react'

export default function ServiceManage() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [switch1Active, setSwitch1Active] = useState(true);  // Ví dụ switch1 ban đầu được bật
    const [switch2Active, setSwitch2Active] = useState(false); // Ví dụ switch2 ban đầu được tắt
    const [switch3Active, setSwitch3Active] = useState(true);  // Ví dụ switch3 ban đầu được bật

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
                    <h1 className="title-heading">Quản Lý Dịch Vụ</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Admin
                        </a></li>
                        /
                        <li><a href="#" className="active">Quản Lý Dịch Vụ</a></li>
                    </ul>
                </div>
            </div>
            {/* Insights */}
            <ul className="insights_admin">
                <li>
                    <i className="bx bx-building-house" />
                    <span className="info">
                        <h3>
                            1,074
                        </h3>
                        <p>Khách sạn</p>
                    </span>
                </li>
                <li><i className="bx bx-car" />
                    <span className="info">
                        <h3>
                            3,944
                        </h3>
                        <p>Xe</p>
                    </span>
                </li>
                <li><i className="bx bx-bowl-hot" />
                    <span className="info">
                        <h3>
                            14,721
                        </h3>
                        <p>Ăn uống</p>
                    </span>
                </li>
            </ul>
            {/* End of Insights */}
            {/* model edit and delete */}
            {/* Form Edit */}
            <div id="editForm" className="modal" style={{ display: showEditForm ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Sửa Thông Tin</h2>
                    <form>
                        Tên dịch vụ: <input type="text" id="name" placeholder="Tên" /><br /><br />
                        Nội dung: <textarea id="details" placeholder="Chi tiết" defaultValue={""} /><br /><br />
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
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Thêm Mới Dịch Vụ</h2>
                    <form>
                        Tên dịch vụ: <input type="text" id="category" placeholder="Tên dịch vụ" /><br /><br />
                        Nội dung: <textarea id="content" placeholder="Nội dung" defaultValue={""} /><br /><br />
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
                        <h3>Danh Sách Dịch Vụ</h3>
                        <i className="bx bx-filter" />
                        <button className="btn add-new-btn " onClick={openAddForm}>
                            Thêm mới
                        </button>
                    </div>
                    <table className="tatle_admin">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên dịch vụ</th>
                                <th>Nội dung</th>
                                <th>Trạng thái</th>
                                <th>Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Khách sạn</td>
                                <td>Khách sạn Tú Tam kỳ</td>
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
