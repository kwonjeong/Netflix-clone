import React, { useState } from 'react';
import SliderItem from './slider_item/slider_item';
import styles from './slider.module.css';

const Slider = ({ netflix, method }) => {
  const [videos, setVideos] = useState([]);
  if (method === 'trending') {
    netflix.trending().then(setVideos);
  }

  return (
    <div className={styles.sliderBox}>
      <span className={styles.sliderBtn}>left</span>
      <ul className={styles.slider}>
        {videos.map((video) => (
          <SliderItem key={video.id} video={video} />
        ))}
      </ul>
      <span className={styles.sliderBtn}>right</span>
    </div>
  );
};

export default Slider;
