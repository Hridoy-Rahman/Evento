import React from "react";
import Review from "./Review";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ReviewList = ({ reviews }) => {
  return (
    <div className="space-y-7 pl-12 px-4 w-full lg:w-3/4 lg:mx-auto rounded-lg lg:px-12 bg-gray-100 flex flex-col">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {reviews.map((review, index) => (
          <Review  key={index} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewList;
