import ChartCard from './ChartCard/ChartCard';

interface RevenueByCategoryCustomerChartProps {
  data: {
    category: string;
    customerType: string;
    revenue: number;
  }[];
}

const RevenueByCategoryCustomerChart = ({ data }: RevenueByCategoryCustomerChartProps) => {
  return (
    <ChartCard title='Revenue by category and customer type'>
      <div>test</div>
    </ChartCard>
  );
};

export default RevenueByCategoryCustomerChart;
