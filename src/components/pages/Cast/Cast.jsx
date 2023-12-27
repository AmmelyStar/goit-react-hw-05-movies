import { fetchCast } from '../../Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './style.module.css'


const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCast(movieId);
        setCasts(data);
      } catch (error) {
        console.error(error);
      }
    };
    movieId && getCast();
  }, [movieId]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={goBack} className={css.btnGoBack}>
        Go back
      </button>
      {casts.map(cast => (
        <li key={cast.cast_id} className={css.castItem}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
              alt=""
            />
          ) : (
            <div className={css.noImage}>No image</div>
          )}
          <p>Actor:{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </div>
  );
};

export default Cast;