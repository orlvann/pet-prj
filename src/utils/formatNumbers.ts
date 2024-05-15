export const formatNumbers = (
  value: number,
  unit = 'mln ',
  decimals = 1
): string => {
  const number = value / 1000000;
  return `${number.toFixed(decimals)} ${unit}`;
};
