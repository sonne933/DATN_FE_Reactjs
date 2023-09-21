import React, { Component } from 'react';
import logo from "../../assets/images/logo.png"
import user from "../../assets/images/admin.jpg"
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false, };
        // Tạo references
        this.menuRef = React.createRef();
        this.userMenuRef = React.createRef();
    }

    handleClickOutside = (event) => {
        if (this.menuRef.current && this.userMenuRef.current && !this.userMenuRef.current.contains(event.target)) {
            this.menuRef.current.style.display = 'none';
        }
    }

    componentDidMount() {
        // Thêm listener khi component mount
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        // Dọn dẹp listener khi component unmount
        document.removeEventListener('click', this.handleClickOutside);
    }
    handleLoginSuccess = () => {
        this.setState({ isLoggedIn: true });
    };
    render() {
        const { isLoggedIn } = this.state;
        // user
        function toggleMenu() {
            // const topBar  = document.querySelector(".top_bar");
            const menu = document.querySelector(".dropdown-menu");
            const isMenuOpen = menu.style.display === 'block';
            menu.style.display = isMenuOpen ? 'none' : 'block';
            // topBar.style.display = 'none' ;
        }

       


        
        return (
            <header className="header">
                {/* Top Bar */}
               {!isLoggedIn && ( <div className="top_bar">
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
                        <div className="bar__user-login"><Link to="/signin">Đăng nhập</Link></div>
                        <div className="bar__user-regis"><Link to="/signup">Đăng ký</Link></div>
                    </div>
                </div>
                )}
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
                        <div className="user-menu">
                            <img src={user} alt="User" className="user-image" onClick={toggleMenu} />
                            <div className="dropdown-menu">
                                <Link to="/tourManagement">Quản lý tour</Link>
                                <Link to="/historyBooking">Lịch sử tour</Link>
                                <Link to="/personalInformation">Quản lý thông tin cá nhân</Link>
                                <a href="#">Đăng xuất</a>
                            </div>
                        </div>
                        <form action><input className="input_search" type="text" /></form>
                        <div className="search__item"><Link to="/search"><i className="fas fa-search" /> </Link></div>
                        {/* <div className="search__item"><i className="fas fa-search" onclick="location.href='search.html'" /></div> */}
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;