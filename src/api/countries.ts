import { useQuery } from 'react-query';

export interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flags: Flags;
  population: number;
}

export const fetchEUCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/region/europe');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useFetchEUCountries = () => {
  return useQuery<Country[], Error>('countries', fetchEUCountries);
};

export const useFetchCountryDetail = (countryCode: string) => {
  return useQuery<Country, Error>(
    ['country', countryCode],
    () =>
      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((res) =>
        res.json()
      ),
    { enabled: !!countryCode }
  );
};
