import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div id='wrapper'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
           
        );
    }
}

export default Home;
