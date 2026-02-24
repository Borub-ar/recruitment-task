import styles from './RevenueByCountryChart.module.css';

import aggregateRevenueByCountry from '../utils/aggregateRevenueByCountry';

import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface OrderData {
  country: string;
  quantity: number;
  unitPrice: number;
}

interface RevenueByCountryChartProps {
  data: OrderData[];
}

const RevenueByCountryChart = ({ data }: RevenueByCountryChartProps) => {
  const revenueByCountry = aggregateRevenueByCountry(data);

  const chartMargin = {
    bottom: 30,
    right: 30,
  };

  const tooltipStyle = {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    padding: '8px 12px',
    boxShadow: '0 4px 12px #000000',
  };

  const barFill = '#7c3aed';

  const activeBarStyle = {
    fill: '#8b5cf6',
    stroke: '#a78bfa',
    strokeWidth: 1,
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Revenue by country</h2>

      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={revenueByCountry} margin={chartMargin}>
          <CartesianGrid strokeDasharray='5 5' stroke='var(--color-border)' />
          <XAxis dataKey='country' stroke='white' tick={{ fill: 'var(--color-text-muted)' }} />
          <YAxis dataKey='revenue' stroke='white' tick={{ fill: 'var(--color-text-muted)' }} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: '#1e3a5f' }} />

          <Bar dataKey='revenue' fill={barFill} stroke={barFill} radius={[4, 4, 0, 0]} activeBar={activeBarStyle} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueByCountryChart;
