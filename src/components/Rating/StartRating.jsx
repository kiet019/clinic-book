import React, { useEffect, useState } from "react";

export const StarRating = ({ rating = 0, onRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  useEffect(() => {
    if (rating !== currentRating) {
      setCurrentRating(rating);
    }
  }, [rating]);
  const handleClick = (index) => {
    setCurrentRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fas fa-star ${star <= currentRating ? "filled" : ""}`}
          onClick={() => handleClick(star)}
          style={{
            cursor: "pointer",
            color: star <= currentRating ? "#ffc107" : "#ccc",
          }}
        ></i>
      ))}
      {/* <span className="d-inline-block average-rating">({currentRating})</span> */}
    </div>
  );
};
