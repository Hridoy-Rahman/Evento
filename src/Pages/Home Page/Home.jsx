import React from 'react';
import Banner from './Banner';
import About from './About';
import Events from './Events/Events';
import ReviewSection from './Review/ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
           <Events limit={5}/>
           <ReviewSection/>
        </div>
    );
};

export default Home;