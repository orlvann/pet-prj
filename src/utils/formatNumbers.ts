export const formatNumbers = (value: number): string => {
  return `${(value / 1000000).toFixed(1)} million`;
};

export const formatValue = (
  value: number,
  unit: string,
  decimals: number
): string => {
  const formattedNumber = (value / 1000000).toFixed(decimals);
  return `${formattedNumber} ${unit}`;
};
