import { BrowserRouter as Switch, Route, Routes, Router, useLocation } from "react-router-dom";
import './App.css';
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



function App() {
  const location = useLocation();

  const isAuthPage = ['/signin', '/signup'].includes(location.pathname);

  return (


      <div id="wrapper">
       {!isAuthPage && <Header />}

      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/offers"element={<Offers/>}/>
        <Route path="/bookingNoSignup"element={<BookingNoSignup/>}/>
        <Route path="/search"element={<Search/>}/>
        <Route path="/tourDetails"element={<TourDetails/>}/>
        <Route path="/personalInformation"element={<PersonalInformation/>}/>
        <Route path="/booking"element={<Booking/>}/>
        <Route path="/historyBooking"element={<HistoryBooking/>}/>

        <Route path="/blog"element={<Blog/>}/>
        <Route path="/contact"element={<Contact/>}/>

        <Route path="/signin"element={<Signin/>}/>
        <Route path="/signup"element={<Signup/>}/>


      </Routes>



      {!isAuthPage && <Footer />}
    </div>
    







  );
}

export default App;
