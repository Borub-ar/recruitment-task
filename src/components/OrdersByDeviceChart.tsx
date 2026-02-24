import { Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';

import ChartCard from './ChartCard/ChartCard';

import aggregateOrdersByDevice from '../utils/aggregateOrdersByDevice';

import { CHART_MARGIN_PIE } from '../constants/chartStyles';

const DEVICE_COLORS: Record<string, string> = {
  mobile: '#06b6d4',
  desktop: '#f59e0b',
  tablet: '#22c55e',
};

interface OrdersByDeviceProps {
  data: {
    device: string;
  }[];
}

const OrdersByDeviceChart = ({ data }: OrdersByDeviceProps) => {
  const ordersByDevice = aggregateOrdersByDevice(data).map(item => ({
    ...item,
    fill: DEVICE_COLORS[item.device] ?? '#64748b',
  }));

  return (
    <ChartCard title='Orders by device'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart margin={CHART_MARGIN_PIE}>
          <Legend layout='vertical' verticalAlign='middle' align='left' wrapperStyle={{ left: 10 }} />

          <Pie
            data={ordersByDevice}
            dataKey='count'
            nameKey='device'
            innerRadius='60%'
            outerRadius='80%'
            cornerRadius='50%'
            fill='#8884d8'
            label={({ name, value }) => `${name}: ${value}`}
            labelLine
            paddingAngle={5}
            isAnimationActive={false}></Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default OrdersByDeviceChart;
