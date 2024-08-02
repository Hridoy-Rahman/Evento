import React, { useState } from 'react';
import ReviewList from './ReviewList';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { name: 'Alice', text: 'Great event!', rating: 5 },
    { name: 'Bob', text: 'A great site', rating: 4 },
    { name: 'Hridoy', text: 'Had a wonderful time!', rating: 3.5 },
    { name: 'Shahin', text: 'Had a wonderful time!', rating: 4.5 },
    { name: 'Ahad', text: 'Had a wonderful time!', rating: 4 },
  ]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="mt-8 mb-10">
      <h1 className="text-3xl text-gradient font-bold text-center mb-8">
        Reviews
      </h1>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewSection;
