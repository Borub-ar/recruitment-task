import styles from './RevenueByCountryChart.module.css';

import aggregateRevenueByCountry from '../utils/aggregateRevenueByCountry';

interface Data {
  country: string;
  quantity: number;
  unitPrice: number;
}

interface RevenueByCountryChartProps {
  data: Data[];
}

const RevenueByCountryChart = ({ data }: RevenueByCountryChartProps) => {
  const revenueByCountry = aggregateRevenueByCountry(data);
  console.log(revenueByCountry);
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Przychód według kraju</h2>
    </div>
  );
};

export default RevenueByCountryChart;
