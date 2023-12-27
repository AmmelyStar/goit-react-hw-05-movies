import { fetchReviews } from '../../Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './style.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && getReviews();
  }, [movieId]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={goBack} className={css.btnGoBack}>
        Go back
      </button>
      {reviews && reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h3>Author:{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default Reviews;