export const formatNumbers = (value: number, ...args: any[]): string => {
  let unit = 'million';
  let decimals = 1;

  if (args.length > 0) {
    if (typeof args[0] === 'string') {
      unit = args[0];
    }
    if (typeof args[1] === 'number') {
      decimals = args[1];
    }
  }

  const formattedNumber = (value / 1000000).toFixed(decimals);
  return `${formattedNumber} ${unit}`;
};
