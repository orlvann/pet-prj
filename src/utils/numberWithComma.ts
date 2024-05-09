export const numberWithCommas = (number: number | undefined) => {
  if (number === undefined) return '';
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
