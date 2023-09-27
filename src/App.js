import {  Route, Routes, Router, useLocation } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import './App.css';
import store from "./redux/store";

import Header from './compoment/user/Header';
import Home from './compoment/user/Home';
import Footer from "./compoment/user/Footer";
import Main from "./compoment/user/Main";
import About from "./compoment/user/About";
import Offers from "./compoment/user/Offers";
import Blog from "./compoment/user/Blog";
import Contact from "./compoment/user/Contact";
import Signin from "./page/user/Signin";

import Signup from "./page/user/Signup";
import BookingNoSignup from "./page/user/BookingNoSignup";
import Search from "./page/user/Search";
import TourDetails from "./page/user/TourDetails";
import PersonalInformation from "./page/user/PersonalInformation";
import Booking from "./page/user/Booking";
import HistoryBooking from "./page/user/HistoryBooking";
import MyTour from "./page/user/MyTour";

import Accountmanage from "./compoment/admin/Accountmanage";
import AdminLayout from "./layout/AdminLayout";
import MainAdmin from "./compoment/admin/MainAdmin";
import Sidebar from "./compoment/admin/Sidebar";
import NavAdmin from "./compoment/admin/NavAdmin";
import CatalogManage from "./compoment/admin/CatalogManage";
import TourManage from "./compoment/admin/TourManage";
import ServiceManage from "./compoment/admin/ServiceManage";




function App() {
  const location = useLocation();
  // const isLoggedIn = useSelector(state => state.isLoggedIn);
  // const userRole = useSelector(state => state.userRole);

  const isAuthPage = ['/signin', '/signup', '/admin', '/admin/accountmanage' ,'/admin/catalogmanage','/admin/tourmanage','/admin/servicemanage'].includes(location.pathname);

  return (
    <Provider store={store}>

      <div id="wrapper">
        {!isAuthPage && <Header />}
        
        <Routes>

          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/bookingNoSignup" element={<BookingNoSignup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />


          <Route path="/tourDetails" element={<TourDetails />} />
          <Route path="/personalInformation" element={<PersonalInformation />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/historyBooking" element={<HistoryBooking />} />
          <Route path="/mytour" element={<MyTour />} />





          {/* Admin */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<MainAdmin />} />
            <Route path="accountmanage" element={<Accountmanage />} />
            <Route path="catalogmanage" element={<CatalogManage />} />
            <Route path="tourmanage" element={<TourManage />} />
            <Route path="servicemanage" element={<ServiceManage />} />

          </Route>
          {/* Seller */}
          <Route path="/seller" element={<MyTour />} />

        </Routes>
        


        {!isAuthPage && <Footer />}

      </div>
    </Provider>

  );
}

export default App;
