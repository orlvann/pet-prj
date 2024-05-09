export const calculateTotalPopulation = (data: { total: number }[]) => {
  return data.reduce((acc, item) => acc + item.total, 0);
};
