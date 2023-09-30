import React, { useEffect, useState } from 'react'
import { profile } from '../../assets/listImage';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

export default function TourManage() {

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);



    const [catalogs, setCatalogs] = useState([]);


    const [newTourName, setNewTourName] = useState('');
    const [newTourLocation, setNewTourLocation] = useState('');
    const [newTourContent, setNewTourContent] = useState('');
    const [newTourPrice, setNewTourPrice] = useState('');
    const [newTourDiscount, setNewTourDiscount] = useState('5');
    const [newTourImages, setNewTourImages] = useState([]);
    const [newTourDepartureDate, setNewTourDepartureDate] = useState('');
    const [newTourSchedule, setNewTourSchedule] = useState('1day');
    const [newTourDetailedSchedule, setNewTourDetailedSchedule] = useState('');
    const [newTourCatalog, setNewTourCatalog] = useState('');  // Dựa trên các danh mục bạn có
    const [tours, setTours] = useState([]);

    const [selectedImageNames, setSelectedImageNames] = useState([]);
    const [editingTour, setEditingTour] = useState(null);

    //   hàm xử lý upload ảnh
    // Hàm tải 1 ảnh và trả về URL của ảnh sau khi tải lên thành công
    const uploadImageAndGetURL = async (file) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'path/to/upload/' + file.name);
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
    // Hàm tải nhiều ảnh và trả về mảng URL của các ảnh
    const uploadImagesAndGetURLs = async (files) => {
        const uploadPromises = files.map(file => uploadImageAndGetURL(file));
        const urls = await Promise.all(uploadPromises);
        return urls;
    };
    const addNewTour = async (e) => {
        e.preventDefault();

        let imageUrls = [];
        if (newTourImages.length) {
            imageUrls = await uploadImagesAndGetURLs(newTourImages);
        }

        const newTour = {
            name: newTourName,
            location: newTourLocation,
            content: newTourContent,
            price: newTourPrice,
            discount: newTourDiscount,
            images: imageUrls,
            departureDate: newTourDepartureDate,
            schedule: newTourSchedule,
            detailedSchedule: newTourDetailedSchedule,
            catalog: newTourCatalog,
            status: true
        };

        try {
            await addDoc(collection(db, "tours"), newTour);
            alert("Tour mới đã được thêm thành công!");
            // Reset state
            setNewTourName('');
            setNewTourLocation('');
            setNewTourContent('');
            setNewTourPrice('');
            setNewTourDiscount('5');

            setNewTourDepartureDate('');
            setNewTourSchedule('1day');
            setNewTourDetailedSchedule('');
            setNewTourCatalog('');
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error("Lỗi khi thêm tour mới:", error);
            alert("Có lỗi xảy ra khi thêm mới. Vui lòng thử lại.");
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageUrls = editingTour.images;
            if (newTourImages.length) {
                imageUrls = await uploadImagesAndGetURLs(newTourImages);
            }

            const updatedTour = {
                name: newTourName,
                location: newTourLocation,
                content: newTourContent,
                price: newTourPrice,
                discount: newTourDiscount,
                images: imageUrls,
                departureDate: newTourDepartureDate,
                schedule: newTourSchedule,
                detailedSchedule: newTourDetailedSchedule,
                catalog: newTourCatalog,
            };

            const tourRef = doc(db, "tours", editingTour.id);
            await updateDoc(tourRef, updatedTour);

            alert("Tour đã được cập nhật thành công!");
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error("Lỗi khi cập nhật tour:", error);
            alert("Có lỗi xảy ra khi cập nhật. Vui lòng thử lại.");
        }
    };

    const handleDelete = async () => {
        try {
            const tourRef = doc(db, "tours", editingTour.id);
            await deleteDoc(tourRef);

            alert("Tour đã được xóa thành công!");
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error("Lỗi khi xóa tour:", error);
            alert("Có lỗi xảy ra khi xóa. Vui lòng thử lại.");
        }
    };

    // Event handlers
    const openAddForm = () => {
        setShowAddForm(true);
    };



    const openEditForm = (tourId) => {
        const selectedTour = tours.find(tour => tour.id === tourId);
        setNewTourName(selectedTour.name);
        setNewTourLocation(selectedTour.location);
        setNewTourContent(selectedTour.content);
        setNewTourPrice(selectedTour.price);
        setNewTourDiscount(selectedTour.discount);
        setNewTourDepartureDate(selectedTour.departureDate);
        setNewTourSchedule(selectedTour.schedule);
        setNewTourDetailedSchedule(selectedTour.detailedSchedule);
        setNewTourCatalog(selectedTour.catalog);
        setEditingTour(selectedTour);
        setShowEditForm(true);
    };


    const openDeleteModal = (tourId) => {
        const selectedTour = tours.find(tour => tour.id === tourId);
        setEditingTour(selectedTour);
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
        const fetchCatalogs = async () => {
            const catalogsCollection = collection(db, "catalogs");
            const catalogsSnapshot = await getDocs(catalogsCollection);
            const catalogsList = catalogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCatalogs(catalogsList);
        };

        fetchCatalogs();

        const fetchTours = async () => {
            const toursCollection = collection(db, "tours");
            const toursSnapshot = await getDocs(toursCollection);
            const toursList = toursSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTours(toursList);
        };

        fetchTours();

        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        };




    }, []);

    const handleSwitchClick = async (tourId, newStatus) => {
        try {
            const tourRef = doc(db, "tours", tourId);
            await updateDoc(tourRef, {
                status: newStatus
            });

            // Cập nhật state trên client
            setTours(prevTours => {
                return prevTours.map(tour => {
                    if (tour.id === tourId) {
                        return { ...tour, status: newStatus };
                    }
                    return tour;
                });
            });
        } catch (error) {
            console.error("Error updating tour status:", error);
            alert("Có lỗi xảy ra khi cập nhật trạng thái. Vui lòng thử lại.");
        }
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
                        <select id="categorySelection" value={editingTour ? editingTour.catalog : ''} onChange={(e) => { /* Cập nhật giá trị editingTour.catalog ở đây */ }}>
                            {catalogs.map(catalog => (
                                <option key={catalog.id} value={catalog.id}>{catalog.name}</option>
                            ))}
                        </select><br /><br />

                        <label>Tên Tour:</label>
                        <input type="text" id="tourName" value={newTourName} onChange={(e) => setNewTourName(e.target.value)} /><br /><br />

                        <label>Địa điểm:</label>
                        <input type="text" id="location" value={newTourLocation} onChange={(e) => setNewTourLocation(e.target.value)} /><br /><br />

                        <label>Nội dung:</label>
                        <textarea id="content" value={newTourContent} onChange={(e) => setNewTourContent(e.target.value)}></textarea><br /><br />

                        <label>Giá:</label>
                        <input type="text" id="price" value={newTourPrice} onChange={(e) => setNewTourPrice(e.target.value)} /><br /><br />

                        <label>Giảm giá:</label>
                        <select id="discount" value={newTourDiscount} onChange={(e) => setNewTourDiscount(e.target.value)}>
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                        </select><br /><br />

                        <label>Hình ảnh:</label>
                        <input type="file" id="image" multiple /><br /><br />

                        <label>Ngày xuất phát:</label>
                        <input type="date" id="departureDate" value={newTourDepartureDate} onChange={(e) => setNewTourDepartureDate(e.target.value)} /><br /><br />

                        <label>Lịch trình:</label>
                        <select id="schedule" value={newTourSchedule} onChange={(e) => setNewTourSchedule(e.target.value)}>
                            <option value="1day">1 ngày 1 đêm</option>
                            <option value="2days">2 ngày 1 đêm</option>
                            <option value="3days">3 ngày 2 đêm</option>
                        </select><br /><br />

                        <label>Lịch trình chi tiết:</label>
                        <textarea id="detailedSchedule" value={newTourDetailedSchedule} onChange={(e) => setNewTourDetailedSchedule(e.target.value)}></textarea><br /><br />
                        <button type="submit" className="btnluu" onClick={handleEditSubmit}>Lưu</button>
                        <button type="button" className="close-btn" onClick={closeModal}>Thoát</button>
                    </form>
                </div>
            </div>
            {/* Modal Delete Confirmation */}
            <div id="deleteModal" className="modal" style={{ display: showDeleteModal ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Bạn có muốn xóa không?</h2>
                    <button className="btnxoa" onClick={handleDelete}>Xóa</button>
                    <button type="button" className="close-btn" onClick={closeModal}>Thoát</button>
                </div>
            </div>
            {/*end model edit and delete */}
            {/* model newitem */}
            <div id="addForm" className="modal" style={{ display: showAddForm ? 'block' : 'none' }}>
                <div className="modal-content-additem">
                    <span className="close-btn" onClick={closeModal}>×</span>
                    <h2>Thêm Mới Địa Điểm</h2>
                    <form >
                        <label>Danh mục:</label>
                        <select
                            id="categorySelection"
                            value={newTourCatalog}
                            onChange={(e) => setNewTourCatalog(e.target.value)}
                        >
                            {catalogs.map(catalog => (
                                <option key={catalog.id} value={catalog.id}>{catalog.name}</option>
                            ))}
                        </select><br /><br />

                        <label>Tên Tour:</label>
                        <input type="text" id="tourName" placeholder="Tên Tour" value={newTourName} onChange={(e) => setNewTourName(e.target.value)} /><br /><br />

                        <label>Địa điểm:</label>
                        <input type="text" id="location" placeholder="Địa điểm" value={newTourLocation} onChange={(e) => setNewTourLocation(e.target.value)} /><br /><br />

                        <label>Nội dung:</label>
                        <textarea id="content" placeholder="Nội dung" value={newTourContent} onChange={(e) => setNewTourContent(e.target.value)}></textarea><br /><br />

                        <label>Giá:</label>
                        <input type="text" id="price" placeholder="VNĐ" value={newTourPrice} onChange={(e) => setNewTourPrice(e.target.value)} /><br /><br />

                        <label>Giảm giá:</label>
                        <select id="discount">
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                        </select><br /><br />

                        <label>Hình ảnh:</label>
                        <input
                            type="file"
                            id="images"
                            multiple
                            onChange={(e) => {
                                setNewTourImages(Array.from(e.target.files));
                                setSelectedImageNames(Array.from(e.target.files).map(file => file.name));
                            }}
                        />
                        {selectedImageNames.map((name, index) => (
                            <p key={index}>{name}</p>
                        ))}
                        <br /><br />

                        <label>Ngày xuất phát:</label>
                        <input type="date" id="departureDate" value={newTourDepartureDate} onChange={(e) => setNewTourDepartureDate(e.target.value)} /><br /><br />

                        <label>Lịch trình:</label>
                        <select id="schedule" value={newTourSchedule} onChange={(e) => setNewTourSchedule(e.target.value)}>
                            <option value="1day">1 ngày 1 đêm</option>
                            <option value="2days">2 ngày 1 đêm</option>
                            <option value="3days">3 ngày 2 đêm</option>
                        </select><br /><br />

                        <label>Lịch trình chi tiết:</label>
                        <textarea id="detailedSchedule" placeholder="Chi tiết lịch trình" value={newTourDetailedSchedule} onChange={(e) => setNewTourDetailedSchedule(e.target.value)}></textarea><br /><br />

                        <button type="submit" className="btnluu" onClick={addNewTour}>Thêm mới</button>
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
                            {tours.map((tour, index) => (


                                <tr key={tour.id}>
                                    <td>{index + 1}</td>
                                    <td>{tour.name}</td>
                                    <td id="noidungTour">
                                        {tour.content}
                                    </td>
                                    <td>
                                        {tour.price}
                                    </td>
                                    <td>
                                        <button>Xem chi tiết</button>
                                    </td>
                                    <td>
                                        <label className={`switch ${tour.status ? 'active-admin' : ''}`} onClick={() => handleSwitchClick(tour.id, !tour.status)}>
                                            <input type="checkbox" checked={tour.status} readOnly onClick={e => e.stopPropagation()} />
                                            <span className="slider_admin"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button className="btn edit-btn" onClick={() => openEditForm(tour.id)}>
                                            <i className="bx bx-edit" />
                                        </button>
                                        <button className="btn delete-btn" onClick={() => { openDeleteModal(tour.id) }}>
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
