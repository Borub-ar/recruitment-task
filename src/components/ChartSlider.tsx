import { useState } from 'react';
import RevenueByCountryChart from './RevenueByCountryChart';

import styles from './ChartSlider.module.css';

import data from '../../data/data.json' with { type: 'json' };

const ChartSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(data);
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <RevenueByCountryChart />
      </div>

      <div className={styles.controls}>
        <button className={styles.btn}>Previous</button>
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <button className={styles.btn}>Next</button>
      </div>
    </div>
  );
};

export default ChartSlider;
