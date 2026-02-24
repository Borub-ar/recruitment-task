import ChartCard from './ChartCard/ChartCard';
import aggregateRevenueByCountry from '../utils/aggregateRevenueByCountry';
import {
  CHART_MARGIN_BAR,
  TOOLTIP_STYLE,
  TOOLTIP_CURSOR,
  BAR_COLOR_PRIMARY,
  ACTIVE_BAR_STYLE,
  AXIS_TICK_STYLE,
  CARTESIAN_GRID_PROPS,
} from '../constants/chartStyles';

import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface RevenueByCountryChartProps {
  data: {
    country: string;
    quantity: number;
    unitPrice: number;
  }[];
}

const RevenueByCountryChart = ({ data }: RevenueByCountryChartProps) => {
  const revenueByCountry = aggregateRevenueByCountry(data);

  return (
    <ChartCard title="Revenue by country (EUR)">
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={revenueByCountry} margin={CHART_MARGIN_BAR}>
          <CartesianGrid strokeDasharray={CARTESIAN_GRID_PROPS.strokeDasharray} stroke={CARTESIAN_GRID_PROPS.stroke} />
          <XAxis dataKey='country' stroke='white' tick={AXIS_TICK_STYLE} />
          <YAxis
            dataKey='revenue'
            stroke='white'
            tick={AXIS_TICK_STYLE}
            tickFormatter={(value) => `${value} €`}
          />
          <Tooltip
            contentStyle={TOOLTIP_STYLE}
            cursor={TOOLTIP_CURSOR}
            formatter={(value: number | undefined) => [`${value != null ? value.toFixed(2) : '—'} €`, 'Revenue']}
          />
          <Bar
            dataKey='revenue'
            fill={BAR_COLOR_PRIMARY}
            stroke={BAR_COLOR_PRIMARY}
            radius={[4, 4, 0, 0]}
            activeBar={ACTIVE_BAR_STYLE}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RevenueByCountryChart;
