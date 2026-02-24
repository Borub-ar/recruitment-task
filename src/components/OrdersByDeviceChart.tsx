import ChartCard from './ChartCard/ChartCard';

interface Order {
  device: string;
}

interface OrdersByDeviceProps {
  data: Order[];
}

const OrdersByDeviceChart = ({ data: _data }: OrdersByDeviceProps) => {
  return (
    <ChartCard title="Orders by device">
      <div>Chart placeholder</div>
    </ChartCard>
  );
};

export default OrdersByDeviceChart;
