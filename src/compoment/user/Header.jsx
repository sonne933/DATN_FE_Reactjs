import React, {   useState } from 'react';
import logo from "../../assets/images/logo.png"
import user from "../../assets/images/admin.jpg"
import { Link,  useNavigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions';
// import { auth } from '../../firebaseConfig';



function Header({ isLoggedIn }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
   
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    
   

    // const handleLogout = () => {
    //     // 1. Đăng xuất từ Firebase
    //     auth.signOut().then(() => {
            
    //         // 2. Xóa thông tin người dùng khỏi sessionStorage
    //         sessionStorage.removeItem('user');
    //         sessionStorage.removeItem('isLoggedIn');
    //         // 3. Cập nhật trạng thái đăng nhập trong Redux Store
    //         dispatch(logout());
            
    //         // 4. Điều hướng người dùng về trang chính
    //         navigate("/");
    
    //     }).catch((error) => {
    //         console.error("Error signing out: ", error);
    //     });
    // };
  
    
    const isUserLoggedIn = useSelector(state => state.isLoggedIn) || sessionStorage.getItem('isLoggedIn') === 'true';
    
    
    
    return (
        <header className="header">
            {/* Top Bar */}
            {!isUserLoggedIn  ? (<div className="top_bar">
                <div className="bar__info">
                    <div className="phone">+84 79 292 9292</div>
                    <div className="social">
                        <ul className="social_list">
                            <li className="social_list_item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="social_list_item"><a href="#"><i className="fa-brands fa-google" /></a></li>
                            <li className="social_list_item"><a href="#"><i className="fab fa-youtube" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="bar__user">
                    <div className="bar__user-login"><Link to="/signup">Đăng nhập</Link></div>
                    <div className="bar__user-regis"><Link to="/signin">Đăng ký</Link></div>
                </div>
            </div> ): null
            }
            <div className="main_nav">
                <div className="main_nav__logo"><Link to="/"><img src={logo} alt="logo" /> TOUR VIET</Link>
                </div>
                <div className="main_nav__menu">
                    <ul className="main_nav__list">
                        <li className="main_nav__item"><Link to="/">TRANG CHỦ</Link></li>
                        <li className="main_nav__item"><Link to="about">GIỚI THIỆU</Link></li>
                        <li className="main_nav__item"><Link to="offers">ƯU ĐÃI</Link></li>
                        <li className="main_nav__item"><Link to="bookingNoSignup">ĐẶT TOUR</Link></li>
                        <li className="main_nav__item"><Link to="blog">TIN TỨC</Link></li>
                        <li className="main_nav__item"><Link to="contact">LIÊN HỆ</Link></li>
                    </ul>
                </div>
                <div className="main_nav__search">
                    {isUserLoggedIn  ? (<div className="user-menu">
                        <img src={user} alt="User" className="user-image" onClick={toggleMenu}  />
                        <div className="dropdown-menu" style={{ display: isOpen ? 'block' : 'none' }} >
                            <Link to="/mytour">Quản lý tour</Link>
                            <Link to="/historyBooking">Lịch sử tour</Link>
                            <Link to="/personalInformation">Quản lý thông tin cá nhân</Link>
                            {/* <a href="#"onClick={handleLogout}>Đăng xuất</a> */}
                        </div>
                    </div> ) : null}
                    <form action><input className="input_search" type="text" /></form>
                    <div className="search__item"><Link to="/search"><i className="fas fa-search" /> </Link></div>
                    {/* <div className="search__item"><i className="fas fa-search" onclick="location.href='search.html'" /></div> */}
                </div>
            </div>
        </header>

    );
}
    

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(Header);