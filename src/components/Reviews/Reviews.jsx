import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/apiService';

export const Reviews = () => {
  const [reviews, setPeviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMoviesReviews(moviesId).then(setPeviews);
  }, [moviesId]);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
