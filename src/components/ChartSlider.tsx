import { useState } from 'react';

import RevenueByCountryChart from './RevenueByCountryChart';
import OrdersByDeviceChart from './OrdersByDeviceChart';

import styles from './ChartSlider.module.css';

import data from '../../data/data.json' with { type: 'json' };

const SLIDE_COUNT = 3;

const ChartSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const revenueByCountryChartData = data.orders.map(order => ({
    country: order.country,
    quantity: order.quantity,
    unitPrice: order.unitPrice,
  }));

  const ordersByDeviceChartData = data.orders.map(order => ({
    device: order.device,
  }));

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(SLIDE_COUNT - 1, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slidesWrapper}>
        <div
          className={styles.slidesTrack}
          style={{ transform: `translateX(-${currentSlide * (100 / SLIDE_COUNT)}%)` }}>
          <div className={styles.slide}>
            <RevenueByCountryChart data={revenueByCountryChartData} />
          </div>
          <div className={styles.slide}>
            <OrdersByDeviceChart data={ordersByDeviceChartData} />
          </div>
          <div className={styles.slide}>
            <RevenueByCountryChart data={revenueByCountryChartData} />
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={handlePrevious} disabled={currentSlide === 0}>
          Previous
        </button>

        <div className={styles.dots}>
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type='button'
              className={`${styles.dot} ${currentSlide === i ? styles.dotActive : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>

        <button className={styles.btn} onClick={handleNext} disabled={currentSlide === SLIDE_COUNT - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ChartSlider;
