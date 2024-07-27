import React from 'react';
import Banner from './Banner';
import About from './About';
import Events from './Events/Events';
import ReviewSection from './Review/ReviewSection';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
           <Events limit={5}/>
           <ReviewSection/>
           <Footer/>
        </div>
    );
};

export default Home;