import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="rounded-lg p-4 mb-4">
      <h3 className="text-2xl font-bold">{review.name}</h3>
      <p className="text-gray-600">{review.text}</p>
      <p className="text-gray-800 mt-2">
        <strong>Rating:</strong> {review.rating}/5
      </p>
    </div>
  );
};

export default Review;
