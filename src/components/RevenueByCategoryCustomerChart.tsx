import ChartCard from './ChartCard/ChartCard';

import aggregateRevenueByCategoryCustomer from '../utils/aggregateRevenueByCategoryCustomer';

interface RevenueByCategoryCustomerChartProps {
  data: {
    quantity: number;
    customerType: string;
    unitPrice: number;
    category: string;
  }[];
}

const RevenueByCategoryCustomerChart = ({ data }: RevenueByCategoryCustomerChartProps) => {
  const revenueByCategoryCustomer = aggregateRevenueByCategoryCustomer(data);
  console.log(revenueByCategoryCustomer);

  return (
    <ChartCard title='Revenue by category and customer type'>
      <div>test</div>
    </ChartCard>
  );
};

export default RevenueByCategoryCustomerChart;
