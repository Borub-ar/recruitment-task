import ChartCard from './ChartCard/ChartCard';

import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import aggregateRevenueByCategoryCustomer from '../utils/aggregateRevenueByCategoryCustomer';

interface RevenueByCategoryCustomerChartProps {
  data: {
    quantity: number;
    customerType: string;
    unitPrice: number;
    category: string;
  }[];
}

const chartMargin = {
  top: 10,
  right: 30,
  left: 10,
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

const RevenueByCategoryCustomerChart = ({ data }: RevenueByCategoryCustomerChartProps) => {
  const chartData = aggregateRevenueByCategoryCustomer(data);

  return (
    <ChartCard title='Revenue by category and customer type (EUR)'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={chartData} margin={chartMargin} barCategoryGap='20%'>
          <CartesianGrid strokeDasharray='5 5' stroke='var(--color-border)' />
          <XAxis dataKey='category' stroke='white' tick={{ fill: 'var(--color-text-muted)' }} />
          <YAxis
            dataKey='max'
            stroke='white'
            tick={{ fill: 'var(--color-text-muted)' }}
            tickFormatter={(value) => `${value} €`}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            cursor={{ fill: '#1e3a5f' }}
            formatter={(value: number | undefined) => [value != null ? `${value.toFixed(2)} €` : '—']}
          />
          <Legend
            wrapperStyle={{ paddingTop: '16px' }}
            formatter={(value) => <span style={{ color: 'var(--color-text-muted)' }}>{value}</span>}
          />

          <Bar
            dataKey='newCustomersRevenue'
            name='New customers'
            fill='#f59e0b'
            radius={[4, 4, 0, 0]}
            activeBar={{ ...activeBarStyle, fill: '#fbbf24' }}
          />
          <Bar
            dataKey='returningCustomersRevenue'
            name='Returning customers'
            fill={barFill}
            radius={[4, 4, 0, 0]}
            activeBar={activeBarStyle}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RevenueByCategoryCustomerChart;
