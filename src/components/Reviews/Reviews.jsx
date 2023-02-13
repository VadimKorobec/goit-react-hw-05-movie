import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/apiService';

const Reviews = () => {
  const [reviews, setPeviews] = useState([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMoviesReviews(id).then(setPeviews);
    if (reviews.length > 0) {
      setIsReviewsLoading(true);
    }
  }, [id, reviews]);

  return (
    <div>
      <ul>
        {isReviewsLoading ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
