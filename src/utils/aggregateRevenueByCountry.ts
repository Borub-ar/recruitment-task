interface Order {
  country: string;
  quantity: number;
  unitPrice: number;
}

const countryMapping: Record<string, string> = {
  PL: 'Poland',
  DE: 'Germany',
  FR: 'France',
  ES: 'Spain',
  IT: 'Italy',
  NL: 'Holland',
};

const aggregateRevenueByCountry = (orders: Order[]) => {
  const revenueByCountry = orders.reduce<Record<string, { revenue: number }>>((acc, curr) => {
    const country = countryMapping[curr.country];
    const revenue = Math.round(curr.quantity * curr.unitPrice);

    if (!acc[country]) {
      acc[country] = {
        revenue: 0,
      };
    }

    acc[country].revenue += revenue;

    return acc;
  }, {});

  return revenueByCountry;
};

export default aggregateRevenueByCountry;
