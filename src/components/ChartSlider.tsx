import RevenueByCountryChart from './RevenueByCountryChart';

import styles from './ChartSlider.module.css';

const ChartSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <RevenueByCountryChart />
      </div>
    </div>
  );
};

export default ChartSlider;
