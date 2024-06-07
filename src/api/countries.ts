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
  png?: string;
  svg?: string;
  alt?: string;
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
  altSpellings: string[];
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
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  flags: Flags;
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

export const fetchEUCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/v3.1/region/europe`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to load European countries: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

export const useFetchEUCountries = () => {
  return useQuery<Country[], Error>('countries', fetchEUCountries);
};

export const useFetchCountryDetail = (countryCode: string | undefined) => {
  return useQuery<Country, Error>(
    ['country', countryCode],
    async () => {
      if (!countryCode)
        throw new Error('Country code is not provided or is undefined');
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch country data: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    },
    { enabled: !!countryCode }
  );
};
