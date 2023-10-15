import {  Route, Routes, Router, useLocation } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import './App.css';
import store from "./redux/store";
import '../node_modules/react-toastify/dist/ReactToastify.css';
import VerifyPage from "./pages/user/VerifyPage";

import Header from './compoment/user/Header';
import Home from './compoment/user/Home';
import Footer from "./compoment/user/Footer";
import Main from "./compoment/user/Main";
import About from "./compoment/user/About";
import Offers from "./compoment/user/Offers";
import Blog from "./compoment/user/Blog";
import Contact from "./compoment/user/Contact";
import Signin from "./pages/Signin";

import Signup from "./pages/Signup";
import BookingNoSignup from "./pages/BookingNoSignup";
import Search from "./pages/Search";
import TourDetails from "./pages/TourDetails";
import PersonalInformation from "./pages/PersonalInformation";
import Booking from "./pages/Booking";
import HistoryBooking from "./pages/HistoryBooking";
import MyTour from "./pages/MyTour";

import Accountmanage from "./compoment/admin/Accountmanage";
import AdminLayout from "./layout/AdminLayout";
import MainAdmin from "./compoment/admin/MainAdmin";
import Sidebar from "./compoment/admin/Sidebar";
import NavAdmin from "./compoment/admin/NavAdmin";
import CatalogManage from "./compoment/admin/CatalogManage";
import TourManage from "./compoment/admin/TourManage";
import ServiceManage from "./compoment/admin/ServiceManage";
import SellerLayout from "./layout/SellerLayout";
import MainSeller from "./compoment/seller/MainSeller";
import TourManageSeller from "./compoment/seller/TourManageSeller";
import ScheduleManageSeller from "./compoment/seller/ScheduleManageSeller";
import RequestTourSeller from "./compoment/seller/RequestTourSeller";
import BillManageSeller from "./compoment/seller/BillManageSeller";
import ChatboxSeller from "./compoment/seller/ChatboxSeller";
import StatisticalSeller from "./compoment/seller/StatisticalSeller";




function App() {
  const location = useLocation();
  // const isLoggedIn = useSelector(state => state.isLoggedIn);
  // const userRole = useSelector(state => state.userRole);

  const isAuthPage = ['/signin', '/signup', '/verify',
   '/admin', '/admin/accountmanage' ,'/admin/catalogmanage','/admin/tourmanage','/admin/servicemanage',
    '/seller','/seller/tourmanage','/seller/schedulemanage','/seller/requesttour','/seller/billmanage',
    '/seller/chatbox','/seller/statistical'
].includes(location.pathname);

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
          <Route path="/signup" element={<Signin />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/verify" element={<VerifyPage/>}/>


          <Route path="/tourDetails/:tourId" element={<TourDetails />} />
          <Route path="/personalInformation" element={<PersonalInformation />} />
          <Route path="/booking/:tourId" element={<Booking />} />
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
          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<MainSeller />} />
            <Route path="tourmanage" element={<TourManageSeller />} />
            <Route path="schedulemanage" element={<ScheduleManageSeller />} />
            <Route path="requesttour" element={<RequestTourSeller />} />
            <Route path="billmanage" element={<BillManageSeller />} />
            <Route path="chatbox" element={<ChatboxSeller />} />
            <Route path="statistical" element={<StatisticalSeller />} />
           
          </Route>
        </Routes>
        


        {!isAuthPage && <Footer />}

      </div>
    </Provider>

  );
}

export default App;
