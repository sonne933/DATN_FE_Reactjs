import React, { useEffect, useState } from 'react'
import { profile } from '../../assets/listImage';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import BaseUrl from '../../utils/BaseUrl';

export default function CatalogManage() {

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    // dữ liệu catalog
    const [newCatalogName, setNewCatalogName] = useState('');
    const [newCatalogContent, setNewCatalogContent] = useState('');
    const [newCatalogImg, setNewCatalogImg] = useState(null); // Để lưu file, chúng ta sẽ sử dụng null thay vì chuỗi rỗng
    // sửa xóa catalog
    const [editingCatalogId, setEditingCatalogId] = useState(null);
    const [deletingCatalogId, setDeletingCatalogId] = useState(null);

    // const addNewCatalog = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let imageURL = '';
    //         if (newCatalogImg) {
    //             imageURL = await uploadImageAndGetURL(newCatalogImg);
    //         }
    //         const newCatalog = {
    //             name: newCatalogName,
    //             content: newCatalogContent,
    //             image: imageURL,
    //             status: true
    //         };
    //         await addDoc(collection(db, "catalogs"), newCatalog);
    //         alert("Danh mục mới đã được thêm thành công!");
    //         setNewCatalogName('');
    //         setNewCatalogContent('');
    //         setNewCatalogImg(null);
    //         closeAddForm();
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("Lỗi khi thêm danh mục mới:", error);
    //         alert("Có lỗi xảy ra khi thêm mới. Vui lòng thử lại.");
    //     }
    // };

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
    // xuất dữ liệu firebase
    // const fetchCatalogsFromFirebase = async () => {
    //     const catalogCollection = collection(db, "catalogs");
    //     const catalogSnapshot = await getDocs(catalogCollection);
    //     const catalogList = catalogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //     return catalogList;
    // };
    // useEffect(() => {
    //     const loadCatalogs = async () => {
    //         const catalogsData = await fetchCatalogsFromFirebase();
    //         setCatalogs(catalogsData);
    //     };

    //     loadCatalogs();
    // }, []);
     // Lấy danh mục từ server
     const fetchCategoriesFromServer = async () => {
        try {
            const response = await fetch(`${BaseUrl}category`);
            const data = await response.json();
            return data.content;  // Giả sử dữ liệu categories được trả về trong trường 'content' của đối tượng phản hồi
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu từ server:", error);
            return [];
        }
    };

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesData = await fetchCategoriesFromServer();
            setCatalogs(categoriesData);
        };

        loadCategories();
    }, []);
    // Event handlers
    const openAddForm = () => {
        setShowAddForm(true);
    };

    const closeAddForm = () => {
        setShowAddForm(false);
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
    const openEditForm = (id) => {
        setEditingCatalogId(id);
        const catalog = catalogs.find(c => c.id === id);
        // Set dữ liệu của catalog lên form
        setNewCatalogName(catalog.name);
        setNewCatalogContent(catalog.content);
        setNewCatalogImg(catalog.image); // Bạn cần chỉnh sửa code để xử lý trường hợp này nếu image là URL, không phải file.
        setShowEditForm(true);
    };
    const openDeleteModal = (id) => {
        setDeletingCatalogId(id);
        setShowDeleteModal(true);
    };
    // hàm sửa catalog của firebase
    // const handleEditSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let imageURL = newCatalogImg;
    //         if (typeof newCatalogImg !== 'string') {  // Kiểm tra nếu newCatalogImg không phải là URL
    //             imageURL = await uploadImageAndGetURL(newCatalogImg);
    //         }
    //         const updatedCatalog = {
    //             name: newCatalogName,
    //             content: newCatalogContent,
    //             image: imageURL,
    //         };
    //         const catalogRef = doc(db, "catalogs", editingCatalogId);
    //         await updateDoc(catalogRef, updatedCatalog);
    //         alert("Danh mục đã được cập nhật thành công!");
    //         closeModal();
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("Lỗi khi cập nhật danh mục:", error);
    //         alert("Có lỗi xảy ra khi cập nhật. Vui lòng thử lại.");
    //     }
    // };
    // hàm xóa catalog của firbase
    // const handleDelete = async () => {
    //     try {
    //         const catalogRef = doc(db, "catalogs", deletingCatalogId);
    //         await deleteDoc(catalogRef);
    //         alert("Danh mục đã được xóa thành công!");
    //         closeModal();
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("Lỗi khi xóa danh mục:", error);
    //         alert("Có lỗi xảy ra khi xóa. Vui lòng thử lại.");
    //     }
    // };
    // check trạng thái firebase
    // const handleSwitchClick = async (id) => {
    //     const catalogRef = doc(db, "catalogs", id);
    //     const catalog = catalogs.find(c => c.id === id);
    //     const newStatus = !catalog.status;

    //     try {
    //         await updateDoc(catalogRef, {
    //             status: newStatus
    //         });
    //         // Cập nhật state
    //         setCatalogs(prevState => prevState.map(c => c.id === id ? { ...c, status: newStatus } : c));
    //     } catch (error) {
    //         console.error("Lỗi khi cập nhật trạng thái:", error);
    //         alert("Có lỗi xảy ra khi cập nhật trạng thái. Vui lòng thử lại.");
    //     }
    // };
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
                        Tên danh mục: <input type="text" id="name"  value={newCatalogName} onChange={(e) => setNewCatalogName(e.target.value)} /><br /><br />
                        Nội dung: <textarea id="details"  defaultValue={""} value={newCatalogContent} onChange={(e) => setNewCatalogContent(e.target.value)}/><br /><br />
                        Hình ảnh: <input type="file" id="image" onChange={handleImageChange} /><br /><br />
                        <button type="submit" className="btnluu" >Lưu</button>
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
                        <button type="submit" className="btnluu" >Thêm mới</button>
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
                        <button className="btn add-new-btn " >
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
                                    <td id='hinhanhTour'>
                                        <img src={catalog.image} alt={`Hình ảnh của ${catalog.name}`} width="100" />
                                    </td>
                                    <td>
                                        <label className={`switch ${catalog.status ? 'active-admin' : ''}`} >
                                            <input type="checkbox" checked={catalog.status} readOnly onClick={e => e.stopPropagation()} />
                                            <span className="slider_admin"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button className="btn edit-btn" onClick={() => { openEditForm(catalog.id) }}>
                                            <i className="bx bx-edit" />
                                        </button>
                                        <button className="btn delete-btn" onClick={() => { openDeleteModal(catalog.id) }}>
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
