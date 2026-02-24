import ChartCard from './ChartCard/ChartCard';

import aggregateOrdersByDevice from '../utils/aggregateOrdersByDevice';

interface Order {
  device: string;
}

interface OrdersByDeviceProps {
  data: Order[];
}

const OrdersByDeviceChart = ({ data }: OrdersByDeviceProps) => {
  const ordersByDevice = aggregateOrdersByDevice(data);

  console.log(ordersByDevice);

  return (
    <ChartCard title='Orders by device'>
      <div>Chart placeholder</div>
    </ChartCard>
  );
};

export default OrdersByDeviceChart;
