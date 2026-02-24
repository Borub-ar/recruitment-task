interface Order {
  quantity: number;
  customerType: string;
  unitPrice: number;
  category: string;
}

export interface RevenueByCategoryCustomerResult {
  category: string;
  newCustomersRevenue: number;
  returningCustomersRevenue: number;
}

const aggregateRevenueByCategoryCustomer = (orders: Order[]): RevenueByCategoryCustomerResult[] => {
  const revenueByCategoryCustomer = orders.reduce<
    Record<string, { newCustomersRevenue: number; returningCustomersRevenue: number }>
  >((acc, curr) => {
    const revenue = curr.unitPrice * curr.quantity;
    const category = curr.category;

    if (!acc[category]) {
      acc[category] = {
        newCustomersRevenue: 0,
        returningCustomersRevenue: 0,
      };
    }

    if (curr.customerType === 'returning') {
      acc[category].returningCustomersRevenue = acc[category].returningCustomersRevenue + revenue;
    }

    if (curr.customerType === 'new') {
      acc[category].newCustomersRevenue = acc[category].newCustomersRevenue + revenue;
    }
    return acc;
  }, {});

  return Object.entries(revenueByCategoryCustomer).map(item => ({ category: item[0], ...item[1] }));
};

export default aggregateRevenueByCategoryCustomer;
