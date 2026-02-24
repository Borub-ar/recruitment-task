import ChartCard from './ChartCard/ChartCard';

interface RevenueByCategoryCustomerChartProps {
  data: {
    quantity: number;
    customerType: string;
    unitPrice: number;
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
