import React from 'react';
import styles from './slider_item.module.css';

const SliderItem = ({ video }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  return (
    <li>
      <img
        className={styles.posterImg}
        src={`${baseURL}${video.poster_path}`}
        alt="poster"
      />
    </li>
  );
};

export default SliderItem;
