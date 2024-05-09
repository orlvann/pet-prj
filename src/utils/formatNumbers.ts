export const formatNumbers = (value: number): string => {
  return `${(value / 1000000).toFixed(1)} million`;
};
