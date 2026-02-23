import { useState } from 'react';
import RevenueByCountryChart from './RevenueByCountryChart';

import styles from './ChartSlider.module.css';

import data from '../../data/data.json' with { type: 'json' };

const ChartSlider = () => {
  console.log(data);
  const [currentSlide, setCurrentSlide] = useState(0);

  const revenueByCountryChartData = data.orders.map(order => {
    return {
      country: order.country,
      quantity: order.quantity,
      unitPrice: order.unitPrice,
    }
  })

  const handlePrevious = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <RevenueByCountryChart data={revenueByCountryChartData} />
      </div>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={handlePrevious}>
          Previous
        </button>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${currentSlide === 0 ? styles.dotActive : ''}`}></div>
          <div className={`${styles.dot} ${currentSlide === 1 ? styles.dotActive : ''}`}></div>
          <div className={`${styles.dot} ${currentSlide === 2 ? styles.dotActive : ''}`}></div>
        </div>
        <button className={styles.btn} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ChartSlider;
