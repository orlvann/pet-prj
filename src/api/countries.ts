import { useQuery } from 'react-query';

interface Country {
  name: string;
  population: number;
  flag: string;
  capital: string;
  region: string;
}

export const useCountries = () => {
  return useQuery<Country[], Error>('countries', async () => {
    const res = await fetch('https://restcountries.com/v3.1/region/europe');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });
};
