import ChartCard from './ChartCard/ChartCard';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import aggregateRevenueByCategoryCustomer from '../utils/aggregateRevenueByCategoryCustomer';
import {
  CHART_MARGIN_BAR,
  TOOLTIP_STYLE,
  TOOLTIP_CURSOR,
  BAR_COLOR_PRIMARY,
  ACTIVE_BAR_STYLE,
  AXIS_TICK_STYLE,
  CARTESIAN_GRID_PROPS,
} from '../constants/chartStyles';

interface RevenueByCategoryCustomerChartProps {
  data: {
    quantity: number;
    customerType: string;
    unitPrice: number;
    category: string;
  }[];
}

const BAR_COLOR_ACCENT = '#f59e0b';

const RevenueByCategoryCustomerChart = ({ data }: RevenueByCategoryCustomerChartProps) => {
  const chartData = aggregateRevenueByCategoryCustomer(data);

  return (
    <ChartCard title='Revenue by category and customer type (EUR)'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={chartData} margin={CHART_MARGIN_BAR} barCategoryGap='20%'>
          <CartesianGrid strokeDasharray={CARTESIAN_GRID_PROPS.strokeDasharray} stroke={CARTESIAN_GRID_PROPS.stroke} />
          <XAxis dataKey='category' stroke='white' tick={AXIS_TICK_STYLE} />
          <YAxis dataKey='max' stroke='white' tick={AXIS_TICK_STYLE} tickFormatter={(value) => `${value} €`} />
          <Tooltip
            contentStyle={TOOLTIP_STYLE}
            cursor={TOOLTIP_CURSOR}
            formatter={(value: number | undefined) => [value != null ? `${value.toFixed(2)} €` : '—']}
          />
          <Legend
            wrapperStyle={{ paddingTop: '16px' }}
            formatter={(value) => <span style={{ color: 'var(--color-text-muted)' }}>{value}</span>}
          />
          <Bar
            dataKey='newCustomersRevenue'
            name='New customers'
            fill={BAR_COLOR_ACCENT}
            radius={[4, 4, 0, 0]}
            activeBar={{ ...ACTIVE_BAR_STYLE, fill: '#fbbf24' }}
          />
          <Bar
            dataKey='returningCustomersRevenue'
            name='Returning customers'
            fill={BAR_COLOR_PRIMARY}
            radius={[4, 4, 0, 0]}
            activeBar={ACTIVE_BAR_STYLE}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RevenueByCategoryCustomerChart;
