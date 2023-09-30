import React, { useEffect, useState } from 'react'
import { profile } from '../../assets/listImage';
import { collection, getDocs, addDoc,doc,updateDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function CatalogManage() {

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    // dữ liệu catalog
    const [newCatalogName, setNewCatalogName] = useState('');
    const [newCatalogContent, setNewCatalogContent] = useState('');
    const [newCatalogImg, setNewCatalogImg] = useState(null); // Để lưu file, chúng ta sẽ sử dụng null thay vì chuỗi rỗng

    const addNewCatalog = async (e) => {
        e.preventDefault();
        try {
            let imageURL = '';
            if (newCatalogImg) {
                imageURL = await uploadImageAndGetURL(newCatalogImg);
            }
            const newCatalog = {
                name: newCatalogName,
                content: newCatalogContent,
                image: imageURL,
                status: true
            };
            await addDoc(collection(db, "catalogs"), newCatalog);
            alert("Danh mục mới đã được thêm thành công!");
            setNewCatalogName('');
            setNewCatalogContent('');
            setNewCatalogImg(null);
            closeAddForm();
        } catch (error) {
            console.error("Lỗi khi thêm danh mục mới:", error);
            alert("Có lỗi xảy ra khi thêm mới. Vui lòng thử lại.");
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setNewCatalogImg(file);
    };

    //   hàm xử lý upload ảnh
    const uploadImageAndGetURL = async (file) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'upload/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Có thể thêm mã ở đây để hiển thị tiến trình tải lên
                },
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );
        });
    };




    const [catalogs, setCatalogs] = useState([]);
    // xuất dữ liệu
    const fetchCatalogsFromFirebase = async () => {
        const catalogCollection = collection(db, "catalogs");
        const catalogSnapshot = await getDocs(catalogCollection);
        const catalogList = catalogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return catalogList;
    };
    useEffect(() => {
        const loadCatalogs = async () => {
            const catalogsData = await fetchCatalogsFromFirebase();
            setCatalogs(catalogsData);
        };

        loadCatalogs();
    }, []);
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
    const handleSwitchClick = async (id) => {
        const catalogRef = doc(db, "catalogs", id);
        const catalog = catalogs.find(c => c.id === id);
        const newStatus = !catalog.status;
    
        try {
            await updateDoc(catalogRef, {
                status: newStatus
            });
            // Cập nhật state
            setCatalogs(prevState => prevState.map(c => c.id === id ? { ...c, status: newStatus } : c));
        } catch (error) {
            console.error("Lỗi khi cập nhật trạng thái:", error);
            alert("Có lỗi xảy ra khi cập nhật trạng thái. Vui lòng thử lại.");
        }
    };
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
            <div id="editForm" className="modal" style={{ display: showEditForm ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal}>×</span>
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
                    <span className="close-btn" onClick={closeAddForm}>×</span>
                    <h2>Thêm Mới Danh Mục</h2>
                    <form>
                        Danh mục: <input type="text" id="category" placeholder="Danh mục" value={newCatalogName} onChange={(e) => setNewCatalogName(e.target.value)} /><br /><br />
                        Nội dung: <textarea id="content" placeholder="Nội dung" defaultValue={""} value={newCatalogContent} onChange={(e) => setNewCatalogContent(e.target.value)} /><br /><br />
                        Hình ảnh:
                        <input type="file" id="image" onChange={handleImageChange} /><br /><br />
                        <button type="submit" className="btnluu" onClick={addNewCatalog}>Thêm mới</button>
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
                            {catalogs.map((catalog, index) => (
                                <tr key={catalog.id}>
                                    <td>{index + 1}</td>
                                    <td>{catalog.name}</td>
                                    <td id='noidungTour'>{catalog.content}</td>
                                    <td id='hinhanhTour'>{catalog.image}</td>
                                    <td>

                                        <label className={`switch ${catalog.status ? 'active-admin' : ''}`} onClick={() => handleSwitchClick(catalog.id)}>
                                            <input type="checkbox" checked={catalog.status} readOnly onClick={e => e.stopPropagation()} />
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    )
}
