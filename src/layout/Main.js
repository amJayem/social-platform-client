import React from 'react';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/shared/Footer';
import NavHeader from '../Pages/shared/NavHeader';

const Main = () => {
    return (
        <div className='mx-5'>
            <NavHeader/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default Main;