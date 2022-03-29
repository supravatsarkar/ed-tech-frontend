import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
    return (
        <div className=''>

            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;