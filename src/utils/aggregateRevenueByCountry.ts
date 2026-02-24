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
    const revenue = curr.quantity * curr.unitPrice;

    if (!acc[country]) {
      acc[country] = {
        revenue: 0,
      };
    }
    acc[country].revenue += revenue;

    return acc;
  }, {});

  return Object.entries(revenueByCountry)
    .map(item => ({ country: item[0], revenue: item[1].revenue }))
    .sort((a, b) => a.country.localeCompare(b.country));
};

export default aggregateRevenueByCountry;
