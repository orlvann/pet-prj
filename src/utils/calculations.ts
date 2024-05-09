export const calculations = (numbers: number[]) => {
  return numbers.reduce((acc, number) => acc + number, 0);
};
