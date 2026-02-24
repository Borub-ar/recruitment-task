interface Order {
  device: string;
}

export interface OrdersByDeviceResult {
  device: string;
  count: number;
}

const aggregateOrdersByDevice = (orders: Order[]): OrdersByDeviceResult[] => {
  const byDevice = orders.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.device] = (acc[curr.device] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(byDevice).map(([device, count]) => ({ device, count }));
};

export default aggregateOrdersByDevice;
