import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  CountriesTable,
  CountriesTableProps,
} from '../../../components/CountriesTable';
import { NavigateOptions, BrowserRouter as Router, To } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

export default {
  title: 'Components/CountriesTable',
  component: CountriesTable,
  decorators: [
    (StoryFn: StoryFn) => (
      <Router>
        <ChakraProvider>
          <StoryFn />
        </ChakraProvider>
      </Router>
    ),
  ],
  argTypes: {
    navigate: {
      action: 'navigated', // This will create an action called 'navigated'
    },
    countries: {
      control: 'object',
      description: 'Array of country objects to be displayed in the table',
    },
  },
} as Meta;

const Template: StoryFn<CountriesTableProps> = (args) => {
  // Provide a mock navigate function that does nothing or logs the action
  const mockNavigate = (path: To, options?: NavigateOptions) => {
    console.log(`Mock navigate to ${path}`, options);
  };

  return <CountriesTable {...args} navigate={mockNavigate} />;
};
export const Default = Template.bind({});

Default.args = {
  countries: [
    {
      name: {
        common: 'Moldova',
        official: 'Republic of Moldova',
        nativeName: {
          ron: {
            official: 'Republica Moldova',
            common: 'Moldova',
          },
        },
      },
      tld: ['.md'],
      cca2: 'MD',
      ccn3: '498',
      cca3: 'MDA',
      cioc: 'MDA',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        MDL: {
          name: 'Moldovan leu',
          symbol: 'L',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['73'],
      },
      capital: ['Chișinău'],
      altSpellings: [
        'MD',
        'Moldova, Republic of',
        'Republic of Moldova',
        'Republica Moldova',
      ],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        ron: 'Romanian',
      },
      translations: {
        ara: {
          official: 'جمهورية مولدوڤا',
          common: 'مولدوڤا',
        },
        bre: {
          official: 'Republik Moldova',
          common: 'Moldova',
        },
        ces: {
          official: 'Moldavská republika',
          common: 'Moldavsko',
        },
        cym: {
          official: 'Republic of Moldova',
          common: 'Moldova',
        },
        deu: {
          official: 'Republik Moldau',
          common: 'Moldawien',
        },
        est: {
          official: 'Moldova Vabariik',
          common: 'Moldova',
        },
        fin: {
          official: 'Moldovan tasavalta',
          common: 'Moldova',
        },
        fra: {
          official: 'République de Moldavie',
          common: 'Moldavie',
        },
        hrv: {
          official: 'Moldavija',
          common: 'Moldova',
        },
        hun: {
          official: 'Moldovai Köztársaság',
          common: 'Moldova',
        },
        ita: {
          official: 'Repubblica di Moldova',
          common: 'Moldavia',
        },
        jpn: {
          official: 'モルドバ共和国',
          common: 'モルドバ共和国',
        },
        kor: {
          official: '몰도바 공화국',
          common: '몰도바',
        },
        nld: {
          official: 'Republiek Moldavië',
          common: 'Moldavië',
        },
        per: {
          official: 'جمهوری مولداوی',
          common: 'مولداوی',
        },
        pol: {
          official: 'Republika Mołdawii',
          common: 'Mołdawia',
        },
        por: {
          official: 'República da Moldávia',
          common: 'Moldávia',
        },
        rus: {
          official: 'Молдова',
          common: 'Молдавия',
        },
        slk: {
          official: 'Moldavská republika',
          common: 'Moldavsko',
        },
        spa: {
          official: 'República de Moldova',
          common: 'Moldavia',
        },
        srp: {
          official: 'Република Молдавија',
          common: 'Молдавија',
        },
        swe: {
          official: 'Republiken Moldavien',
          common: 'Moldavien',
        },
        tur: {
          official: 'Moldova Cumhuriyeti',
          common: 'Moldova',
        },
        urd: {
          official: 'جمہوریہ مالدووا',
          common: 'مالدووا',
        },
        zho: {
          official: '摩尔多瓦共和国',
          common: '摩尔多瓦',
        },
      },
      latlng: [47, 29],
      landlocked: true,
      borders: ['ROU', 'UKR'],
      area: 33846,
      demonyms: {
        eng: {
          f: 'Moldovan',
          m: 'Moldovan',
        },
        fra: {
          f: 'Moldave',
          m: 'Moldave',
        },
      },
      flag: '🇲🇩',
      maps: {
        googleMaps: 'https://goo.gl/maps/JjmyUuULujnDeFPf7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/58974',
      },
      population: 2617820,
      gini: {
        '2018': 25.7,
      },
      fifa: 'MDA',
      car: {
        signs: ['MD'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/md.png',
        svg: 'https://flagcdn.com/md.svg',
        alt: 'The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/md.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/md.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [47.01, 28.9],
      },
      postalCode: {
        format: 'MD-####',
        regex: '^(?:MD)*(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Bulgaria',
        official: 'Republic of Bulgaria',
        nativeName: {
          bul: {
            official: 'Република България',
            common: 'България',
          },
        },
      },
      tld: ['.bg'],
      cca2: 'BG',
      ccn3: '100',
      cca3: 'BGR',
      cioc: 'BUL',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        BGN: {
          name: 'Bulgarian lev',
          symbol: 'лв',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['59'],
      },
      capital: ['Sofia'],
      altSpellings: ['BG', 'Republic of Bulgaria', 'Република България'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        bul: 'Bulgarian',
      },
      translations: {
        ara: {
          official: 'جمهورية بلغاريا',
          common: 'بلغاريا',
        },
        bre: {
          official: 'Republik Bulgaria',
          common: 'Bulgaria',
        },
        ces: {
          official: 'Bulharská republika',
          common: 'Bulharsko',
        },
        cym: {
          official: 'Gweriniaeth Bwlgaria',
          common: 'Bwlgaria',
        },
        deu: {
          official: 'Republik Bulgarien',
          common: 'Bulgarien',
        },
        est: {
          official: 'Bulgaaria Vabariik',
          common: 'Bulgaaria',
        },
        fin: {
          official: 'Bulgarian tasavalta',
          common: 'Bulgaria',
        },
        fra: {
          official: 'République de Bulgarie',
          common: 'Bulgarie',
        },
        hrv: {
          official: 'Republika Bugarska',
          common: 'Bugarska',
        },
        hun: {
          official: 'Bolgár Köztársaság',
          common: 'Bulgária',
        },
        ita: {
          official: 'Repubblica di Bulgaria',
          common: 'Bulgaria',
        },
        jpn: {
          official: 'ブルガリア共和国',
          common: 'ブルガリア',
        },
        kor: {
          official: '불가리아 공화국',
          common: '불가리아',
        },
        nld: {
          official: 'Republiek Bulgarije',
          common: 'Bulgarije',
        },
        per: {
          official: 'جمهوری بلغارستان',
          common: 'بلغارستان',
        },
        pol: {
          official: 'Republika Bułgarii',
          common: 'Bułgaria',
        },
        por: {
          official: 'República da Bulgária',
          common: 'Bulgária',
        },
        rus: {
          official: 'Республика Болгария',
          common: 'Болгария',
        },
        slk: {
          official: 'Bulharská republika',
          common: 'Bulharsko',
        },
        spa: {
          official: 'República de Bulgaria',
          common: 'Bulgaria',
        },
        srp: {
          official: 'Република Бугарска',
          common: 'Бугарска',
        },
        swe: {
          official: 'Republiken Bulgarien',
          common: 'Bulgarien',
        },
        tur: {
          official: 'Bulgaristan Cumhuriyeti',
          common: 'Bulgaristan',
        },
        urd: {
          official: 'جمہوریہ بلغاریہ',
          common: 'بلغاریہ',
        },
        zho: {
          official: '保加利亚共和国',
          common: '保加利亚',
        },
      },
      latlng: [43, 25],
      landlocked: false,
      borders: ['GRC', 'MKD', 'ROU', 'SRB', 'TUR'],
      area: 110879,
      demonyms: {
        eng: {
          f: 'Bulgarian',
          m: 'Bulgarian',
        },
        fra: {
          f: 'Bulgare',
          m: 'Bulgare',
        },
      },
      flag: '🇧🇬',
      maps: {
        googleMaps: 'https://goo.gl/maps/F5uAhDGWzc3BrHfm9',
        openStreetMaps: 'https://www.openstreetmap.org/relation/186382',
      },
      population: 6927288,
      gini: {
        '2018': 41.3,
      },
      fifa: 'BUL',
      car: {
        signs: ['BG'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/bg.png',
        svg: 'https://flagcdn.com/bg.svg',
        alt: 'The flag of Bulgaria is composed of three equal horizontal bands of white, green and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/bg.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/bg.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [42.68, 23.32],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Germany',
        official: 'Federal Republic of Germany',
        nativeName: {
          deu: {
            official: 'Bundesrepublik Deutschland',
            common: 'Deutschland',
          },
        },
      },
      tld: ['.de'],
      cca2: 'DE',
      ccn3: '276',
      cca3: 'DEU',
      cioc: 'GER',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['9'],
      },
      capital: ['Berlin'],
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        deu: 'German',
      },
      translations: {
        ara: {
          official: 'جمهورية ألمانيا الاتحادية',
          common: 'ألمانيا',
        },
        bre: {
          official: 'Republik Kevreadel Alamagn',
          common: 'Alamagn',
        },
        ces: {
          official: 'Spolková republika Německo',
          common: 'Německo',
        },
        cym: {
          official: 'Federal Republic of Germany',
          common: 'Germany',
        },
        deu: {
          official: 'Bundesrepublik Deutschland',
          common: 'Deutschland',
        },
        est: {
          official: 'Saksamaa Liitvabariik',
          common: 'Saksamaa',
        },
        fin: {
          official: 'Saksan liittotasavalta',
          common: 'Saksa',
        },
        fra: {
          official: "République fédérale d'Allemagne",
          common: 'Allemagne',
        },
        hrv: {
          official: 'Njemačka Federativna Republika',
          common: 'Njemačka',
        },
        hun: {
          official: 'Német Szövetségi Köztársaság',
          common: 'Németország',
        },
        ita: {
          official: 'Repubblica federale di Germania',
          common: 'Germania',
        },
        jpn: {
          official: 'ドイツ連邦共和国',
          common: 'ドイツ',
        },
        kor: {
          official: '독일 연방 공화국',
          common: '독일',
        },
        nld: {
          official: 'Bondsrepubliek Duitsland',
          common: 'Duitsland',
        },
        per: {
          official: 'جمهوری فدرال آلمان',
          common: 'آلمان',
        },
        pol: {
          official: 'Republika Federalna Niemiec',
          common: 'Niemcy',
        },
        por: {
          official: 'República Federal da Alemanha',
          common: 'Alemanha',
        },
        rus: {
          official: 'Федеративная Республика Германия',
          common: 'Германия',
        },
        slk: {
          official: 'Nemecká spolková republika',
          common: 'Nemecko',
        },
        spa: {
          official: 'República Federal de Alemania',
          common: 'Alemania',
        },
        srp: {
          official: 'Савезна Република Немачка',
          common: 'Немачка',
        },
        swe: {
          official: 'Förbundsrepubliken Tyskland',
          common: 'Tyskland',
        },
        tur: {
          official: 'Almanya Federal Cumhuriyeti',
          common: 'Almanya',
        },
        urd: {
          official: 'وفاقی جمہوریہ جرمنی',
          common: 'جرمنی',
        },
        zho: {
          official: '德意志联邦共和国',
          common: '德国',
        },
      },
      latlng: [51, 9],
      landlocked: false,
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      area: 357114,
      demonyms: {
        eng: {
          f: 'German',
          m: 'German',
        },
        fra: {
          f: 'Allemande',
          m: 'Allemand',
        },
      },
      flag: '🇩🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/mD9FBMq1nvXUBrkv6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/51477',
      },
      population: 83240525,
      gini: {
        '2016': 31.9,
      },
      fifa: 'GER',
      car: {
        signs: ['DY'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/de.png',
        svg: 'https://flagcdn.com/de.svg',
        alt: 'The flag of Germany is composed of three equal horizontal bands of black, red and gold.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/de.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/de.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [52.52, 13.4],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Albania',
        official: 'Republic of Albania',
        nativeName: {
          sqi: {
            official: 'Republika e Shqipërisë',
            common: 'Shqipëria',
          },
        },
      },
      tld: ['.al'],
      cca2: 'AL',
      ccn3: '008',
      cca3: 'ALB',
      cioc: 'ALB',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        ALL: {
          name: 'Albanian lek',
          symbol: 'L',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['55'],
      },
      capital: ['Tirana'],
      altSpellings: ['AL', 'Shqipëri', 'Shqipëria', 'Shqipnia'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        sqi: 'Albanian',
      },
      translations: {
        ara: {
          official: 'جمهورية ألبانيا',
          common: 'ألبانيا',
        },
        bre: {
          official: 'Republik Albania',
          common: 'Albania',
        },
        ces: {
          official: 'Albánská republika',
          common: 'Albánie',
        },
        cym: {
          official: 'Gweriniaeth Albania',
          common: 'Albania',
        },
        deu: {
          official: 'Republik Albanien',
          common: 'Albanien',
        },
        est: {
          official: 'Albaania Vabariik',
          common: 'Albaania',
        },
        fin: {
          official: 'Albanian tasavalta',
          common: 'Albania',
        },
        fra: {
          official: "République d'Albanie",
          common: 'Albanie',
        },
        hrv: {
          official: 'Republika Albanija',
          common: 'Albanija',
        },
        hun: {
          official: 'Albán Köztársaság',
          common: 'Albánia',
        },
        ita: {
          official: "Repubblica d'Albania",
          common: 'Albania',
        },
        jpn: {
          official: 'アルバニア共和国',
          common: 'アルバニア',
        },
        kor: {
          official: '알바니아 공화국',
          common: '알바니아',
        },
        nld: {
          official: 'Republiek Albanië',
          common: 'Albanië',
        },
        per: {
          official: 'جمهوری آلبانی',
          common: 'آلبانی',
        },
        pol: {
          official: 'Republika Albanii',
          common: 'Albania',
        },
        por: {
          official: 'República da Albânia',
          common: 'Albânia',
        },
        rus: {
          official: 'Республика Албания',
          common: 'Албания',
        },
        slk: {
          official: 'Albánska republika',
          common: 'Albánsko',
        },
        spa: {
          official: 'República de Albania',
          common: 'Albania',
        },
        srp: {
          official: 'Република Албанија',
          common: 'Албанија',
        },
        swe: {
          official: 'Republiken Albanien',
          common: 'Albanien',
        },
        tur: {
          official: 'Arnavutluk Cumhuriyeti',
          common: 'Arnavutluk',
        },
        urd: {
          official: 'جمہوریہ البانیا',
          common: 'البانیا',
        },
        zho: {
          official: '阿尔巴尼亚共和国',
          common: '阿尔巴尼亚',
        },
      },
      latlng: [41, 20],
      landlocked: false,
      borders: ['MNE', 'GRC', 'MKD', 'UNK'],
      area: 28748,
      demonyms: {
        eng: {
          f: 'Albanian',
          m: 'Albanian',
        },
        fra: {
          f: 'Albanaise',
          m: 'Albanais',
        },
      },
      flag: '🇦🇱',
      maps: {
        googleMaps: 'https://goo.gl/maps/BzN9cTuj68ZA8SyZ8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/53292',
      },
      population: 2837743,
      gini: {
        '2017': 33.2,
      },
      fifa: 'ALB',
      car: {
        signs: ['AL'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/al.png',
        svg: 'https://flagcdn.com/al.svg',
        alt: 'The flag of Albania features a silhouetted double-headed black eagle at the center of a red field.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/al.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/al.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [41.32, 19.82],
      },
      postalCode: {
        format: '',
        regex: '',
      },
    },
    {
      name: {
        common: 'Montenegro',
        official: 'Montenegro',
        nativeName: {
          cnr: {
            official: 'Црна Гора',
            common: 'Црна Гора',
          },
        },
      },
      tld: ['.me'],
      cca2: 'ME',
      ccn3: '499',
      cca3: 'MNE',
      cioc: 'MNE',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['82'],
      },
      capital: ['Podgorica'],
      altSpellings: ['ME', 'Crna Gora'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        cnr: 'Montenegrin',
      },
      translations: {
        ara: {
          official: 'الجبل الاسود',
          common: 'الجبل الاسود',
        },
        bre: {
          official: 'Republik Montenegro',
          common: 'Montenegro',
        },
        ces: {
          official: 'Černá Hora',
          common: 'Černá Hora',
        },
        cym: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        deu: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        est: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        fin: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        fra: {
          official: 'Monténégro',
          common: 'Monténégro',
        },
        hrv: {
          official: 'Crna Gora',
          common: 'Crna Gora',
        },
        hun: {
          official: 'Montenegró',
          common: 'Montenegró',
        },
        ita: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        jpn: {
          official: 'モンテネグロ',
          common: 'モンテネグロ',
        },
        kor: {
          official: '몬테네그로',
          common: '몬테네그로',
        },
        nld: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        per: {
          official: 'مونته‌نگرو',
          common: 'مونته‌نگرو',
        },
        pol: {
          official: 'Czarnogóra',
          common: 'Czarnogóra',
        },
        por: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        rus: {
          official: 'Черногория',
          common: 'Черногория',
        },
        slk: {
          official: 'Čierna Hora',
          common: 'Čierna Hora',
        },
        spa: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        srp: {
          official: 'Црна Гора',
          common: 'Црна Гора',
        },
        swe: {
          official: 'Montenegro',
          common: 'Montenegro',
        },
        tur: {
          official: 'Karadağ',
          common: 'Karadağ',
        },
        urd: {
          official: 'مونٹینیگرو',
          common: 'مونٹینیگرو',
        },
        zho: {
          official: '黑山',
          common: '黑山',
        },
      },
      latlng: [42.5, 19.3],
      landlocked: false,
      borders: ['ALB', 'BIH', 'HRV', 'UNK', 'SRB'],
      area: 13812,
      demonyms: {
        eng: {
          f: 'Montenegrin',
          m: 'Montenegrin',
        },
        fra: {
          f: 'Monténégrine',
          m: 'Monténégrin',
        },
      },
      flag: '🇲🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/4THX1fM7WqANuPbB8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/53296',
      },
      population: 621718,
      gini: {
        '2016': 38.5,
      },
      fifa: 'MNE',
      car: {
        signs: ['SCG'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/me.png',
        svg: 'https://flagcdn.com/me.svg',
        alt: 'The flag of Montenegro features a large red central rectangular area surrounded by a golden-yellow border. The coat of arms of Montenegro is centered in the red rectangle.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/me.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/me.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [42.43, 19.27],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Spain',
        official: 'Kingdom of Spain',
        nativeName: {
          spa: {
            official: 'Reino de España',
            common: 'España',
          },
        },
      },
      tld: ['.es'],
      cca2: 'ES',
      ccn3: '724',
      cca3: 'ESP',
      cioc: 'ESP',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['4'],
      },
      capital: ['Madrid'],
      altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        spa: 'Spanish',
        cat: 'Catalan',
        eus: 'Basque',
        glc: 'Galician',
      },
      translations: {
        ara: {
          official: 'مملكة إسبانيا',
          common: 'إسبانيا',
        },
        bre: {
          official: 'Rouantelezh Spagn',
          common: 'Spagn',
        },
        ces: {
          official: 'Španělské království',
          common: 'Španělsko',
        },
        cym: {
          official: 'Kingdom of Spain',
          common: 'Spain',
        },
        deu: {
          official: 'Königreich Spanien',
          common: 'Spanien',
        },
        est: {
          official: 'Hispaania Kuningriik',
          common: 'Hispaania',
        },
        fin: {
          official: 'Espanjan kuningaskunta',
          common: 'Espanja',
        },
        fra: {
          official: "Royaume d'Espagne",
          common: 'Espagne',
        },
        hrv: {
          official: 'Kraljevina Španjolska',
          common: 'Španjolska',
        },
        hun: {
          official: 'Spanyol Királyság',
          common: 'Spanyolország',
        },
        ita: {
          official: 'Regno di Spagna',
          common: 'Spagna',
        },
        jpn: {
          official: 'スペイン王国',
          common: 'スペイン',
        },
        kor: {
          official: '에스파냐 왕국',
          common: '스페인',
        },
        nld: {
          official: 'Koninkrijk Spanje',
          common: 'Spanje',
        },
        per: {
          official: 'پادشاهی اسپانیا',
          common: 'اسپانیا',
        },
        pol: {
          official: 'Królestwo Hiszpanii ',
          common: 'Hiszpania',
        },
        por: {
          official: 'Reino de Espanha',
          common: 'Espanha',
        },
        rus: {
          official: 'Королевство Испания',
          common: 'Испания',
        },
        slk: {
          official: 'Španielske kráľovstvo',
          common: 'Španielsko',
        },
        spa: {
          official: 'Reino de España',
          common: 'España',
        },
        srp: {
          official: 'Краљевина Шпанија',
          common: 'Шпанија',
        },
        swe: {
          official: 'Konungariket Spanien',
          common: 'Spanien',
        },
        tur: {
          official: 'İspanya Krallığı',
          common: 'İspanya',
        },
        urd: {
          official: 'مملکتِ ہسپانیہ',
          common: 'ہسپانیہ',
        },
        zho: {
          official: '西班牙王国',
          common: '西班牙',
        },
      },
      latlng: [40, -4],
      landlocked: false,
      borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
      area: 505992,
      demonyms: {
        eng: {
          f: 'Spanish',
          m: 'Spanish',
        },
        fra: {
          f: 'Espagnole',
          m: 'Espagnol',
        },
      },
      flag: '🇪🇸',
      maps: {
        googleMaps: 'https://goo.gl/maps/138JaXW8EZzRVitY9',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1311341',
      },
      population: 47351567,
      gini: {
        '2018': 34.7,
      },
      fifa: 'ESP',
      car: {
        signs: ['E'],
        side: 'right',
      },
      timezones: ['UTC', 'UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/es.png',
        svg: 'https://flagcdn.com/es.svg',
        alt: 'The flag of Spain is composed of three horizontal bands of red, yellow and red, with the yellow band twice the height of the red bands. In the yellow band is the national coat of arms offset slightly towards the hoist side of center.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/es.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/es.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [40.4, -3.68],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Sweden',
        official: 'Kingdom of Sweden',
        nativeName: {
          swe: {
            official: 'Konungariket Sverige',
            common: 'Sverige',
          },
        },
      },
      tld: ['.se'],
      cca2: 'SE',
      ccn3: '752',
      cca3: 'SWE',
      cioc: 'SWE',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        SEK: {
          name: 'Swedish krona',
          symbol: 'kr',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['6'],
      },
      capital: ['Stockholm'],
      altSpellings: ['SE', 'Kingdom of Sweden', 'Konungariket Sverige'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        swe: 'Swedish',
      },
      translations: {
        ara: {
          official: 'مملكة السويد',
          common: 'السويد',
        },
        bre: {
          official: 'Rouantelezh Sveden',
          common: 'Sveden',
        },
        ces: {
          official: 'Švédské království',
          common: 'Švédsko',
        },
        cym: {
          official: 'Kingdom of Sweden',
          common: 'Sweden',
        },
        deu: {
          official: 'Königreich Schweden',
          common: 'Schweden',
        },
        est: {
          official: 'Rootsi Kuningriik',
          common: 'Rootsi',
        },
        fin: {
          official: 'Ruotsin kuningaskunta',
          common: 'Ruotsi',
        },
        fra: {
          official: 'Royaume de Suède',
          common: 'Suède',
        },
        hrv: {
          official: 'Kraljevina Švedska',
          common: 'Švedska',
        },
        hun: {
          official: 'Svéd Királyság',
          common: 'Svédország',
        },
        ita: {
          official: 'Regno di Svezia',
          common: 'Svezia',
        },
        jpn: {
          official: 'スウェーデン王国',
          common: 'スウェーデン',
        },
        kor: {
          official: '스웨덴 왕국',
          common: '스웨덴',
        },
        nld: {
          official: 'Koninkrijk Zweden',
          common: 'Zweden',
        },
        per: {
          official: 'پادشاهی سوئد',
          common: 'سوئد',
        },
        pol: {
          official: 'Królestwo Szwecji',
          common: 'Szwecja',
        },
        por: {
          official: 'Reino da Suécia',
          common: 'Suécia',
        },
        rus: {
          official: 'Королевство Швеция',
          common: 'Швеция',
        },
        slk: {
          official: 'Švédske kráľovstvo',
          common: 'Švédsko',
        },
        spa: {
          official: 'Reino de Suecia',
          common: 'Suecia',
        },
        srp: {
          official: 'Краљевина Шведска',
          common: 'Шведска',
        },
        swe: {
          official: 'Konungariket Sverige',
          common: 'Sverige',
        },
        tur: {
          official: 'İsveç Krallığı',
          common: 'İsveç',
        },
        urd: {
          official: 'مملکتِ سویڈن',
          common: 'سویڈن',
        },
        zho: {
          official: '瑞典王国',
          common: '瑞典',
        },
      },
      latlng: [62, 15],
      landlocked: false,
      borders: ['FIN', 'NOR'],
      area: 450295,
      demonyms: {
        eng: {
          f: 'Swedish',
          m: 'Swedish',
        },
        fra: {
          f: 'Suédoise',
          m: 'Suédois',
        },
      },
      flag: '🇸🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/iqygE491ADVgnBW39',
        openStreetMaps: 'https://www.openstreetmap.org/relation/52822',
      },
      population: 10353442,
      gini: {
        '2018': 30,
      },
      fifa: 'SWE',
      car: {
        signs: ['S'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/se.png',
        svg: 'https://flagcdn.com/se.svg',
        alt: 'The flag of Sweden has a blue field with a large golden-yellow cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/se.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/se.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [59.33, 18.05],
      },
      postalCode: {
        format: 'SE-### ##',
        regex: '^(?:SE)*(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Andorra',
        official: 'Principality of Andorra',
        nativeName: {
          cat: {
            official: "Principat d'Andorra",
            common: 'Andorra',
          },
        },
      },
      tld: ['.ad'],
      cca2: 'AD',
      ccn3: '020',
      cca3: 'AND',
      cioc: 'AND',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['76'],
      },
      capital: ['Andorra la Vella'],
      altSpellings: ['AD', 'Principality of Andorra', "Principat d'Andorra"],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        cat: 'Catalan',
      },
      translations: {
        ara: {
          official: 'إمارة أندورا',
          common: 'أندورا',
        },
        bre: {
          official: 'Priñselezh Andorra',
          common: 'Andorra',
        },
        ces: {
          official: 'Andorrské knížectví',
          common: 'Andorra',
        },
        cym: {
          official: 'Tywysogaeth Andorra',
          common: 'Andorra',
        },
        deu: {
          official: 'Fürstentum Andorra',
          common: 'Andorra',
        },
        est: {
          official: 'Andorra Vürstiriik',
          common: 'Andorra',
        },
        fin: {
          official: 'Andorran ruhtinaskunta',
          common: 'Andorra',
        },
        fra: {
          official: "Principauté d'Andorre",
          common: 'Andorre',
        },
        hrv: {
          official: 'Kneževina Andora',
          common: 'Andora',
        },
        hun: {
          official: 'Andorra',
          common: 'Andorra',
        },
        ita: {
          official: 'Principato di Andorra',
          common: 'Andorra',
        },
        jpn: {
          official: 'アンドラ公国',
          common: 'アンドラ',
        },
        kor: {
          official: '안도라 공국',
          common: '안도라',
        },
        nld: {
          official: 'Prinsdom Andorra',
          common: 'Andorra',
        },
        per: {
          official: 'شاهزاده‌نشین آندورا',
          common: 'آندورا',
        },
        pol: {
          official: 'Księstwo Andory',
          common: 'Andora',
        },
        por: {
          official: 'Principado de Andorra',
          common: 'Andorra',
        },
        rus: {
          official: 'Княжество Андорра',
          common: 'Андорра',
        },
        slk: {
          official: 'Andorrské kniežatstvo',
          common: 'Andorra',
        },
        spa: {
          official: 'Principado de Andorra',
          common: 'Andorra',
        },
        srp: {
          official: 'Кнежевина Андора',
          common: 'Андора',
        },
        swe: {
          official: 'Furstendömet Andorra',
          common: 'Andorra',
        },
        tur: {
          official: 'Andorra Prensliği',
          common: 'Andorra',
        },
        urd: {
          official: 'اماراتِ انڈورا',
          common: 'انڈورا',
        },
        zho: {
          official: '安道尔公国',
          common: '安道尔',
        },
      },
      latlng: [42.5, 1.5],
      landlocked: true,
      borders: ['FRA', 'ESP'],
      area: 468,
      demonyms: {
        eng: {
          f: 'Andorran',
          m: 'Andorran',
        },
        fra: {
          f: 'Andorrane',
          m: 'Andorran',
        },
      },
      flag: '🇦🇩',
      maps: {
        googleMaps: 'https://goo.gl/maps/JqAnacWE2qEznKgw7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/9407',
      },
      population: 77265,
      fifa: 'AND',
      car: {
        signs: ['AND'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ad.png',
        svg: 'https://flagcdn.com/ad.svg',
        alt: 'The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ad.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ad.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [42.5, 1.52],
      },
      postalCode: {
        format: 'AD###',
        regex: '^(?:AD)*(\\d{3})$',
      },
      gini: {},
    },
    {
      name: {
        common: 'Malta',
        official: 'Republic of Malta',
        nativeName: {
          eng: {
            official: 'Republic of Malta',
            common: 'Malta',
          },
          mlt: {
            official: "Repubblika ta ' Malta",
            common: 'Malta',
          },
        },
      },
      tld: ['.mt'],
      cca2: 'MT',
      ccn3: '470',
      cca3: 'MLT',
      cioc: 'MLT',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['56'],
      },
      capital: ['Valletta'],
      altSpellings: ['MT', 'Republic of Malta', "Repubblika ta' Malta"],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        eng: 'English',
        mlt: 'Maltese',
      },
      translations: {
        ara: {
          official: 'جمهورية مالطا',
          common: 'مالطا',
        },
        bre: {
          official: 'Republik Malta',
          common: 'Malta',
        },
        ces: {
          official: 'Maltská republika',
          common: 'Malta',
        },
        cym: {
          official: 'Republic of Malta',
          common: 'Malta',
        },
        deu: {
          official: 'Republik Malta',
          common: 'Malta',
        },
        est: {
          official: 'Malta Vabariik',
          common: 'Malta',
        },
        fin: {
          official: 'Maltan tasavalta',
          common: 'Malta',
        },
        fra: {
          official: 'République de Malte',
          common: 'Malte',
        },
        hrv: {
          official: 'Republika Malta',
          common: 'Malta',
        },
        hun: {
          official: 'Máltai Köztársaság',
          common: 'Málta',
        },
        ita: {
          official: 'Repubblica di Malta',
          common: 'Malta',
        },
        jpn: {
          official: 'マルタ共和国',
          common: 'マルタ',
        },
        kor: {
          official: '몰타 공화국',
          common: '몰타',
        },
        nld: {
          official: 'Republiek Malta',
          common: 'Malta',
        },
        per: {
          official: 'جمهوری مالت',
          common: 'مالت',
        },
        pol: {
          official: 'Republika Malty',
          common: 'Malta',
        },
        por: {
          official: 'República de Malta',
          common: 'Malta',
        },
        rus: {
          official: 'Республика Мальта',
          common: 'Мальта',
        },
        slk: {
          official: 'Maltská republika',
          common: 'Malta',
        },
        spa: {
          official: 'República de Malta',
          common: 'Malta',
        },
        srp: {
          official: ' Република Малта',
          common: 'Малта',
        },
        swe: {
          official: 'Republiken Malta',
          common: 'Malta',
        },
        tur: {
          official: 'Malta Cumhuriyeti',
          common: 'Malta',
        },
        urd: {
          official: 'جمہوریہ مالٹا',
          common: 'مالٹا',
        },
        zho: {
          official: '马耳他共和国',
          common: '马耳他',
        },
      },
      latlng: [35.9375, 14.3754],
      landlocked: false,
      area: 316,
      demonyms: {
        eng: {
          f: 'Maltese',
          m: 'Maltese',
        },
        fra: {
          f: 'Maltaise',
          m: 'Maltais',
        },
      },
      flag: '🇲🇹',
      maps: {
        googleMaps: 'https://goo.gl/maps/skXCqguxDxxEKVk47',
        openStreetMaps: 'https://www.openstreetmap.org/relation/365307',
      },
      population: 525285,
      gini: {
        '2018': 28.7,
      },
      fifa: 'MLT',
      car: {
        signs: ['M'],
        side: 'left',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/mt.png',
        svg: 'https://flagcdn.com/mt.svg',
        alt: 'The flag of Malta is composed of two equal vertical bands of white and red. A representation of the George cross edged in red is situated on the upper hoist-side corner of the white band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/mt.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/mt.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [35.88, 14.5],
      },
      postalCode: {
        format: '@@@ ###|@@@ ##',
        regex: '^([A-Z]{3}\\d{2}\\d?)$',
      },
      borders: [],
    },
    {
      name: {
        common: 'Czechia',
        official: 'Czech Republic',
        nativeName: {
          ces: {
            official: 'Česká republika',
            common: 'Česko',
          },
          slk: {
            official: 'Česká republika',
            common: 'Česko',
          },
        },
      },
      tld: ['.cz'],
      cca2: 'CZ',
      ccn3: '203',
      cca3: 'CZE',
      cioc: 'CZE',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        CZK: {
          name: 'Czech koruna',
          symbol: 'Kč',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['20'],
      },
      capital: ['Prague'],
      altSpellings: ['CZ', 'Česká republika', 'Česko'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        ces: 'Czech',
        slk: 'Slovak',
      },
      translations: {
        ara: {
          official: 'جمهورية التشيك',
          common: 'التشيك',
        },
        bre: {
          official: 'Republik Tchek',
          common: 'Tchekia',
        },
        ces: {
          official: 'Česká republika',
          common: 'Česko',
        },
        cym: {
          official: 'Y Weriniaeth Tsiec',
          common: 'Y Weriniaeth Tsiec',
        },
        deu: {
          official: 'Tschechische Republik',
          common: 'Tschechien',
        },
        est: {
          official: 'Tšehhi Vabariik',
          common: 'Tšehhi',
        },
        fin: {
          official: 'Tšekin tasavalta',
          common: 'Tšekki',
        },
        fra: {
          official: 'République tchèque',
          common: 'Tchéquie',
        },
        hrv: {
          official: 'Češka',
          common: 'Češka',
        },
        hun: {
          official: 'Cseh Köztársaság',
          common: 'Csehország',
        },
        ita: {
          official: 'Repubblica Ceca',
          common: 'Cechia',
        },
        jpn: {
          official: 'チェコ共和国',
          common: 'チェコ',
        },
        kor: {
          official: '체코',
          common: '체코',
        },
        nld: {
          official: 'Tsjechische Republiek',
          common: 'Tsjechië',
        },
        per: {
          official: 'جمهوری چک',
          common: 'جمهوری چک',
        },
        pol: {
          official: 'Republika Czeska',
          common: 'Czechy',
        },
        por: {
          official: 'República Checa',
          common: 'Chéquia',
        },
        rus: {
          official: 'Чешская Республика',
          common: 'Чехия',
        },
        slk: {
          official: 'Česká republika',
          common: 'Česko',
        },
        spa: {
          official: 'República Checa',
          common: 'Chequia',
        },
        srp: {
          official: 'Чешка Република',
          common: 'Чешка',
        },
        swe: {
          official: 'Republiken Tjeckien',
          common: 'Tjeckien',
        },
        tur: {
          official: 'Çek Cumhuriyeti',
          common: 'Çekya',
        },
        urd: {
          official: 'چيک جمہوريہ',
          common: 'چيک',
        },
        zho: {
          official: '捷克共和国',
          common: '捷克',
        },
      },
      latlng: [49.75, 15.5],
      landlocked: true,
      borders: ['AUT', 'DEU', 'POL', 'SVK'],
      area: 78865,
      demonyms: {
        eng: {
          f: 'Czech',
          m: 'Czech',
        },
        fra: {
          f: 'Tchèque',
          m: 'Tchèque',
        },
      },
      flag: '🇨🇿',
      maps: {
        googleMaps: 'https://goo.gl/maps/47dmgeXMZyhDHyQW8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/51684',
      },
      population: 10698896,
      gini: {
        '2018': 25,
      },
      fifa: 'CZE',
      car: {
        signs: ['CZ'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/cz.png',
        svg: 'https://flagcdn.com/cz.svg',
        alt: 'The flag of Czechia is composed of two equal horizontal bands of white and red, with a blue isosceles triangle superimposed on the hoist side of the field. The triangle has its base on the hoist end and spans about two-fifth the width of the field.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/cz.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/cz.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [50.08, 14.47],
      },
      postalCode: {
        format: '### ##',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'United Kingdom',
        official: 'United Kingdom of Great Britain and Northern Ireland',
        nativeName: {
          eng: {
            official: 'United Kingdom of Great Britain and Northern Ireland',
            common: 'United Kingdom',
          },
        },
      },
      tld: ['.uk'],
      cca2: 'GB',
      ccn3: '826',
      cca3: 'GBR',
      cioc: 'GBR',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        GBP: {
          name: 'British pound',
          symbol: '£',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['4'],
      },
      capital: ['London'],
      altSpellings: ['GB', 'UK', 'Great Britain'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        eng: 'English',
      },
      translations: {
        ara: {
          official: 'المملكة المتحدة لبريطانيا العظمى وايرلندا الشمالية',
          common: 'المملكة المتحدة',
        },
        bre: {
          official: 'Rouantelezh-Unanet Breizh-Veur ha Norzhiwerzhon',
          common: 'Rouantelezh-Unanet',
        },
        ces: {
          official: 'Spojené království Velké Británie a Severního Irska',
          common: 'Spojené království',
        },
        cym: {
          official: 'United Kingdom of Great Britain and Northern Ireland',
          common: 'United Kingdom',
        },
        deu: {
          official: 'Vereinigtes Königreich Großbritannien und Nordirland',
          common: 'Vereinigtes Königreich',
        },
        est: {
          official: 'Suurbritannia ja Põhja-Iiri Ühendkuningriik',
          common: 'Suurbritannia',
        },
        fin: {
          official:
            'Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta',
          common: 'Yhdistynyt kuningaskunta',
        },
        fra: {
          official: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
          common: 'Royaume-Uni',
        },
        hrv: {
          official: 'Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske',
          common: 'Ujedinjeno Kraljevstvo',
        },
        hun: {
          official: 'Nagy-Britannia és Észak-Írország Egyesült Királysága',
          common: 'Egyesült Királyság',
        },
        ita: {
          official: 'Regno Unito di Gran Bretagna e Irlanda del Nord',
          common: 'Regno Unito',
        },
        jpn: {
          official: 'グレート·ブリテンおよび北アイルランド連合王国',
          common: 'イギリス',
        },
        kor: {
          official: '그레이트브리튼 북아일랜드 연합 왕국',
          common: '영국',
        },
        nld: {
          official: 'Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland',
          common: 'Verenigd Koninkrijk',
        },
        per: {
          official: 'پادشاهی متحد بریتانیای کبیر و ایرلند شمالی',
          common: 'انگلیس',
        },
        pol: {
          official:
            'Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej',
          common: 'Zjednoczone Królestwo',
        },
        por: {
          official: 'Reino Unido da Grã-Bretanha e Irlanda do Norte',
          common: 'Reino Unido',
        },
        rus: {
          official:
            'Соединенное Королевство Великобритании и Северной Ирландии',
          common: 'Великобритания',
        },
        slk: {
          official: 'Spojené kráľovstvo Veľkej Británie a SevernéhoÌrska',
          common: 'Veľká Británia (Spojené kráľovstvo)',
        },
        spa: {
          official: 'Reino Unido de Gran Bretaña e Irlanda del Norte',
          common: 'Reino Unido',
        },
        srp: {
          official: 'Уједињено Краљевство Велике Британије и Северне Ирске',
          common: 'Уједињено Краљевство',
        },
        swe: {
          official: 'Förenade konungariket Storbritannien och Nordirland',
          common: 'Storbritannien',
        },
        tur: {
          official: 'Büyük Britanya ve Kuzey İrlanda Birleşik Krallığı',
          common: 'Birleşik Krallık',
        },
        urd: {
          official: 'مملکتِ متحدہ برطانیہ عظمی و شمالی آئرلینڈ',
          common: 'مملکتِ متحدہ',
        },
        zho: {
          official: '大不列颠及北爱尔兰联合王国',
          common: '英国',
        },
      },
      latlng: [54, -2],
      landlocked: false,
      borders: ['IRL'],
      area: 242900,
      demonyms: {
        eng: {
          f: 'British',
          m: 'British',
        },
        fra: {
          f: 'Britannique',
          m: 'Britannique',
        },
      },
      flag: '🇬🇧',
      maps: {
        googleMaps: 'https://goo.gl/maps/FoDtc3UKMkFsXAjHA',
        openStreetMaps: 'https://www.openstreetmap.org/relation/62149',
      },
      population: 67215293,
      gini: {
        '2017': 35.1,
      },
      car: {
        signs: ['GB'],
        side: 'left',
      },
      timezones: [
        'UTC-08:00',
        'UTC-05:00',
        'UTC-04:00',
        'UTC-03:00',
        'UTC-02:00',
        'UTC',
        'UTC+01:00',
        'UTC+02:00',
        'UTC+06:00',
      ],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/gb.png',
        svg: 'https://flagcdn.com/gb.svg',
        alt: 'The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/gb.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/gb.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [51.5, -0.08],
      },
      postalCode: {
        format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
        regex:
          '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
      },
      fifa: '',
    },
    {
      name: {
        common: 'Gibraltar',
        official: 'Gibraltar',
        nativeName: {
          eng: {
            official: 'Gibraltar',
            common: 'Gibraltar',
          },
        },
      },
      tld: ['.gi'],
      cca2: 'GI',
      ccn3: '292',
      cca3: 'GIB',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        GIP: {
          name: 'Gibraltar pound',
          symbol: '£',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['50'],
      },
      capital: ['Gibraltar'],
      altSpellings: ['GI'],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        eng: 'English',
      },
      translations: {
        ara: {
          official: 'جبل طارق',
          common: 'جبل طارق',
        },
        bre: {
          official: 'Jibraltar',
          common: 'Jibraltar',
        },
        ces: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        cym: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        deu: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        est: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        fin: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        fra: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        hrv: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        hun: {
          official: 'Gibraltár',
          common: 'Gibraltár',
        },
        ita: {
          official: 'Gibilterra',
          common: 'Gibilterra',
        },
        jpn: {
          official: 'ジブラルタル',
          common: 'ジブラルタル',
        },
        kor: {
          official: '지브롤터',
          common: '지브롤터',
        },
        nld: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        per: {
          official: 'جبل طارق',
          common: 'جبل طارق',
        },
        pol: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        por: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        rus: {
          official: 'Гибралтар',
          common: 'Гибралтар',
        },
        slk: {
          official: 'Gibraltár',
          common: 'Gibraltár',
        },
        spa: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        srp: {
          official: 'Гибралтар',
          common: 'Гибралтар',
        },
        swe: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
        tur: {
          official: 'Cebelitarık',
          common: 'Cebelitarık',
        },
        urd: {
          official: 'جبل الطارق',
          common: 'جبل الطارق',
        },
        zho: {
          official: '直布罗陀',
          common: '直布罗陀',
        },
      },
      latlng: [36.13333333, -5.35],
      landlocked: false,
      borders: ['ESP'],
      area: 6,
      demonyms: {
        eng: {
          f: 'Gibraltar',
          m: 'Gibraltar',
        },
        fra: {
          f: 'Gibraltarienne',
          m: 'Gibraltarien',
        },
      },
      flag: '🇬🇮',
      maps: {
        googleMaps: 'https://goo.gl/maps/CEoHAs1t6byCBhHFA',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1278736',
      },
      population: 33691,
      fifa: 'GIB',
      car: {
        signs: ['GBZ'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/gi.png',
        svg: 'https://flagcdn.com/gi.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/gi.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/gi.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [36.13, -5.35],
      },
      cioc: '',
      gini: {},
      postalCode: {
        format: '',
        regex: '',
      },
    },
    {
      name: {
        common: 'Cyprus',
        official: 'Republic of Cyprus',
        nativeName: {
          ell: {
            official: 'Δημοκρατία της Κύπρος',
            common: 'Κύπρος',
          },
          tur: {
            official: 'Kıbrıs Cumhuriyeti',
            common: 'Kıbrıs',
          },
        },
      },
      tld: ['.cy'],
      cca2: 'CY',
      ccn3: '196',
      cca3: 'CYP',
      cioc: 'CYP',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['57'],
      },
      capital: ['Nicosia'],
      altSpellings: [
        'CY',
        'Kýpros',
        'Kıbrıs',
        'Republic of Cyprus',
        'Κυπριακή Δημοκρατία',
        'Kıbrıs Cumhuriyeti',
      ],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        ell: 'Greek',
        tur: 'Turkish',
      },
      translations: {
        ara: {
          official: 'جمهورية قبرص',
          common: 'قبرص',
        },
        bre: {
          official: 'Republik Kiprenez',
          common: 'Kiprenez',
        },
        ces: {
          official: 'Kyperská republika',
          common: 'Kypr',
        },
        cym: {
          official: 'Gweriniaeth Cyprus',
          common: 'Cyprus',
        },
        deu: {
          official: 'Republik Zypern',
          common: 'Zypern',
        },
        est: {
          official: 'Küprose Vabariik',
          common: 'Küpros',
        },
        fin: {
          official: 'Kyproksen tasavalta',
          common: 'Kypros',
        },
        fra: {
          official: 'République de Chypre',
          common: 'Chypre',
        },
        hrv: {
          official: 'Republika Cipar',
          common: 'Cipar',
        },
        hun: {
          official: 'Ciprusi Köztársaság',
          common: 'Ciprus',
        },
        ita: {
          official: 'Repubblica di Cipro',
          common: 'Cipro',
        },
        jpn: {
          official: 'キプロス共和国',
          common: 'キプロス',
        },
        kor: {
          official: '키프로스 공화국',
          common: '키프로스',
        },
        nld: {
          official: 'Republiek Cyprus',
          common: 'Cyprus',
        },
        per: {
          official: 'جمهوری قبرس',
          common: 'قِبرِس',
        },
        pol: {
          official: 'Republika Cypryjska',
          common: 'Cypr',
        },
        por: {
          official: 'República de Chipre',
          common: 'Chipre',
        },
        rus: {
          official: 'Республика Кипр',
          common: 'Кипр',
        },
        slk: {
          official: 'Cyperská republika',
          common: 'Cyprus',
        },
        spa: {
          official: 'República de Chipre',
          common: 'Chipre',
        },
        srp: {
          official: 'Кипарска Република',
          common: 'Кипар',
        },
        swe: {
          official: 'Republiken Cypern',
          common: 'Cypern',
        },
        tur: {
          official: 'Kıbrıs Cumhuriyeti',
          common: 'Kıbrıs',
        },
        urd: {
          official: 'جمہوریہ قبرص',
          common: 'قبرص',
        },
        zho: {
          official: '塞浦路斯共和国',
          common: '塞浦路斯',
        },
      },
      latlng: [35, 33],
      landlocked: false,
      area: 9251,
      demonyms: {
        eng: {
          f: 'Cypriot',
          m: 'Cypriot',
        },
        fra: {
          f: 'Chypriote',
          m: 'Chypriote',
        },
      },
      flag: '🇨🇾',
      maps: {
        googleMaps: 'https://goo.gl/maps/77hPBRdLid8yD5Bm7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/307787',
      },
      population: 1207361,
      gini: {
        '2018': 32.7,
      },
      fifa: 'CYP',
      car: {
        signs: ['CY'],
        side: 'left',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/cy.png',
        svg: 'https://flagcdn.com/cy.svg',
        alt: 'The flag of Cyprus has a white field, at the center of which is a copper-colored silhouette of the Island of Cyprus above two green olive branches crossed at the stem.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/cy.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/cy.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [35.17, 33.37],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
      borders: [],
    },
    {
      name: {
        common: 'Monaco',
        official: 'Principality of Monaco',
        nativeName: {
          fra: {
            official: 'Principauté de Monaco',
            common: 'Monaco',
          },
        },
      },
      tld: ['.mc'],
      cca2: 'MC',
      ccn3: '492',
      cca3: 'MCO',
      cioc: 'MON',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['77'],
      },
      capital: ['Monaco'],
      altSpellings: ['MC', 'Principality of Monaco', 'Principauté de Monaco'],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        fra: 'French',
      },
      translations: {
        ara: {
          official: 'إمارة موناكو',
          common: 'موناكو',
        },
        bre: {
          official: 'Priñselezh Monako',
          common: 'Monako',
        },
        ces: {
          official: 'Monacké knížectví',
          common: 'Monako',
        },
        cym: {
          official: 'Principality of Monaco',
          common: 'Monaco',
        },
        deu: {
          official: 'Fürstentum Monaco',
          common: 'Monaco',
        },
        est: {
          official: 'Monaco Vürstiriik',
          common: 'Monaco',
        },
        fin: {
          official: 'Monacon ruhtinaskunta',
          common: 'Monaco',
        },
        fra: {
          official: 'Principauté de Monaco',
          common: 'Monaco',
        },
        hrv: {
          official: 'Kneževina Monako',
          common: 'Monako',
        },
        hun: {
          official: 'Monacói Hercegség',
          common: 'Monaco',
        },
        ita: {
          official: 'Principato di Monaco',
          common: 'Principato di Monaco',
        },
        jpn: {
          official: 'モナコ公国',
          common: 'モナコ',
        },
        kor: {
          official: '모나코 공국',
          common: '모나코',
        },
        nld: {
          official: 'Vorstendom Monaco',
          common: 'Monaco',
        },
        per: {
          official: 'شاهزاده‌نشین موناکو',
          common: 'موناکو',
        },
        pol: {
          official: 'Księstwo Monako',
          common: 'Monako',
        },
        por: {
          official: 'Principado do Mónaco',
          common: 'Mónaco',
        },
        rus: {
          official: 'Княжество Монако',
          common: 'Монако',
        },
        slk: {
          official: 'Monacké kniežatstvo',
          common: 'Monako',
        },
        spa: {
          official: 'Principado de Mónaco',
          common: 'Mónaco',
        },
        srp: {
          official: 'Кнежевина Монако',
          common: 'Монако',
        },
        swe: {
          official: 'Furstendömet Monaco',
          common: 'Monaco',
        },
        tur: {
          official: 'Monako Prensliği',
          common: 'Monako',
        },
        urd: {
          official: 'جمہوریہ مناکو',
          common: 'موناکو',
        },
        zho: {
          official: '摩纳哥公国',
          common: '摩纳哥',
        },
      },
      latlng: [43.73333333, 7.4],
      landlocked: false,
      borders: ['FRA'],
      area: 2.02,
      demonyms: {
        eng: {
          f: 'Monegasque',
          m: 'Monegasque',
        },
        fra: {
          f: 'Monégasque',
          m: 'Monégasque',
        },
      },
      flag: '🇲🇨',
      maps: {
        googleMaps: 'https://goo.gl/maps/DGpndDot28bYdXYn7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1124039',
      },
      population: 39244,
      car: {
        signs: ['MC'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/mc.png',
        svg: 'https://flagcdn.com/mc.svg',
        alt: 'The flag of Monaco is composed of two equal horizontal bands of red and white.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/mc.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/mc.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [43.73, 7.42],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
      gini: {},
      fifa: '',
    },
    {
      name: {
        common: 'Russia',
        official: 'Russian Federation',
        nativeName: {
          rus: {
            official: 'Российская Федерация',
            common: 'Россия',
          },
        },
      },
      tld: ['.ru', '.su', '.рф'],
      cca2: 'RU',
      ccn3: '643',
      cca3: 'RUS',
      cioc: 'RUS',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        RUB: {
          name: 'Russian ruble',
          symbol: '₽',
        },
      },
      idd: {
        root: '+7',
        suffixes: ['3', '4', '5', '8', '9'],
      },
      capital: ['Moscow'],
      altSpellings: ['RU', 'Russian Federation', 'Российская Федерация'],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        rus: 'Russian',
      },
      translations: {
        ara: {
          official: 'روسيا الاتحادية',
          common: 'روسيا',
        },
        bre: {
          official: 'Kevread Rusia',
          common: 'Rusia',
        },
        ces: {
          official: 'Ruská federace',
          common: 'Rusko',
        },
        cym: {
          official: 'Russian Federation',
          common: 'Russia',
        },
        deu: {
          official: 'Russische Föderation',
          common: 'Russland',
        },
        est: {
          official: 'Venemaa Föderatsioon',
          common: 'Venemaa',
        },
        fin: {
          official: 'Venäjän federaatio',
          common: 'Venäjä',
        },
        fra: {
          official: 'Fédération de Russie',
          common: 'Russie',
        },
        hrv: {
          official: 'Ruska Federacija',
          common: 'Rusija',
        },
        hun: {
          official: 'Oroszországi Föderáció',
          common: 'Oroszország',
        },
        ita: {
          official: 'Federazione russa',
          common: 'Russia',
        },
        jpn: {
          official: 'ロシア連邦',
          common: 'ロシア連邦',
        },
        kor: {
          official: '러시아 연방',
          common: '러시아',
        },
        nld: {
          official: 'Russische Federatie',
          common: 'Rusland',
        },
        per: {
          official: 'فدراسیون روسیه',
          common: 'روسیه',
        },
        pol: {
          official: 'Federacja Rosyjska',
          common: 'Rosja',
        },
        por: {
          official: 'Federação Russa',
          common: 'Rússia',
        },
        rus: {
          official: 'Российская Федерация',
          common: 'Россия',
        },
        slk: {
          official: 'Ruská federácia',
          common: 'Rusko',
        },
        spa: {
          official: 'Federación de Rusia',
          common: 'Rusia',
        },
        srp: {
          official: 'Руска Федерација',
          common: 'Русија',
        },
        swe: {
          official: 'Ryska federationen',
          common: 'Ryssland',
        },
        tur: {
          official: 'Rusya Federasyonu',
          common: 'Rusya',
        },
        urd: {
          official: 'روسی وفاق',
          common: 'روس',
        },
        zho: {
          official: '俄罗斯联邦',
          common: '俄罗斯',
        },
      },
      latlng: [60, 100],
      landlocked: false,
      borders: [
        'AZE',
        'BLR',
        'CHN',
        'EST',
        'FIN',
        'GEO',
        'KAZ',
        'PRK',
        'LVA',
        'LTU',
        'MNG',
        'NOR',
        'POL',
        'UKR',
      ],
      area: 17098242,
      demonyms: {
        eng: {
          f: 'Russian',
          m: 'Russian',
        },
        fra: {
          f: 'Russe',
          m: 'Russe',
        },
      },
      flag: '🇷🇺',
      maps: {
        googleMaps: 'https://goo.gl/maps/4F4PpDhGJgVvLby57',
        openStreetMaps:
          'https://www.openstreetmap.org/relation/60189#map=3/65.15/105.29',
      },
      population: 144104080,
      gini: {
        '2018': 37.5,
      },
      fifa: 'RUS',
      car: {
        signs: ['RUS'],
        side: 'right',
      },
      timezones: [
        'UTC+03:00',
        'UTC+04:00',
        'UTC+06:00',
        'UTC+07:00',
        'UTC+08:00',
        'UTC+09:00',
        'UTC+10:00',
        'UTC+11:00',
        'UTC+12:00',
      ],
      continents: ['Europe', 'Asia'],
      flags: {
        png: 'https://flagcdn.com/w320/ru.png',
        svg: 'https://flagcdn.com/ru.svg',
        alt: 'The flag of Russia is composed of three equal horizontal bands of white, blue and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ru.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ru.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [55.75, 37.6],
      },
      postalCode: {
        format: '######',
        regex: '^(\\d{6})$',
      },
    },
    {
      name: {
        common: 'Ireland',
        official: 'Republic of Ireland',
        nativeName: {
          eng: {
            official: 'Republic of Ireland',
            common: 'Ireland',
          },
          gle: {
            official: 'Poblacht na hÉireann',
            common: 'Éire',
          },
        },
      },
      tld: ['.ie'],
      cca2: 'IE',
      ccn3: '372',
      cca3: 'IRL',
      cioc: 'IRL',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['53'],
      },
      capital: ['Dublin'],
      altSpellings: [
        'IE',
        'Éire',
        'Republic of Ireland',
        'Poblacht na hÉireann',
      ],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        eng: 'English',
        gle: 'Irish',
      },
      translations: {
        ara: {
          official: 'جمهورية أيرلندا',
          common: 'أيرلندا',
        },
        bre: {
          official: 'Republik Iwerzhon',
          common: 'Iwerzhon',
        },
        ces: {
          official: 'Irsko',
          common: 'Irsko',
        },
        cym: {
          official: 'Republic of Ireland',
          common: 'Ireland',
        },
        deu: {
          official: 'Republik Irland',
          common: 'Irland',
        },
        est: {
          official: 'Iirimaa',
          common: 'Iirimaa',
        },
        fin: {
          official: 'Irlannin tasavalta',
          common: 'Irlanti',
        },
        fra: {
          official: "République d'Irlande",
          common: 'Irlande',
        },
        hrv: {
          official: 'Republika Irska',
          common: 'Irska',
        },
        hun: {
          official: 'Ír Köztársaság',
          common: 'Írország',
        },
        ita: {
          official: "Repubblica d'Irlanda",
          common: 'Irlanda',
        },
        jpn: {
          official: 'アイルランド共和国',
          common: 'アイルランド',
        },
        kor: {
          official: '아일랜드 공화국',
          common: '아일랜드',
        },
        nld: {
          official: 'Republic of Ireland',
          common: 'Ierland',
        },
        per: {
          official: 'ایرلند',
          common: 'ایرلند',
        },
        pol: {
          official: 'Republika Irlandii',
          common: 'Irlandia',
        },
        por: {
          official: 'República da Irlanda',
          common: 'Irlanda',
        },
        rus: {
          official: 'Ирландия',
          common: 'Ирландия',
        },
        slk: {
          official: 'Írska republika',
          common: 'Írsko',
        },
        spa: {
          official: 'República de Irlanda',
          common: 'Irlanda',
        },
        srp: {
          official: 'Република Ирска',
          common: 'Ирска',
        },
        swe: {
          official: 'Irland',
          common: 'Irland',
        },
        tur: {
          official: 'İrlanda Cumhuriyeti',
          common: 'İrlanda',
        },
        urd: {
          official: 'جمہوریہ جزیرہ آئرلینڈ',
          common: 'جزیرہ آئرلینڈ',
        },
        zho: {
          official: '爱尔兰共和国',
          common: '爱尔兰',
        },
      },
      latlng: [53, -8],
      landlocked: false,
      borders: ['GBR'],
      area: 70273,
      demonyms: {
        eng: {
          f: 'Irish',
          m: 'Irish',
        },
        fra: {
          f: 'Irlandaise',
          m: 'Irlandais',
        },
      },
      flag: '🇮🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/hxd1BKxgpchStzQC6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/62273',
      },
      population: 4994724,
      gini: {
        '2017': 31.4,
      },
      fifa: 'IRL',
      car: {
        signs: ['IRL'],
        side: 'left',
      },
      timezones: ['UTC'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ie.png',
        svg: 'https://flagcdn.com/ie.svg',
        alt: 'The flag of Ireland is composed of three equal vertical bands of green, white and orange.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ie.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ie.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [53.32, -6.23],
      },
      postalCode: {
        format: '',
        regex: '',
      },
    },
    {
      name: {
        common: 'France',
        official: 'French Republic',
        nativeName: {
          fra: {
            official: 'République française',
            common: 'France',
          },
        },
      },
      tld: ['.fr'],
      cca2: 'FR',
      ccn3: '250',
      cca3: 'FRA',
      cioc: 'FRA',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['3'],
      },
      capital: ['Paris'],
      altSpellings: ['FR', 'French Republic', 'République française'],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        fra: 'French',
      },
      translations: {
        ara: {
          official: 'الجمهورية الفرنسية',
          common: 'فرنسا',
        },
        bre: {
          official: 'Republik Frañs',
          common: 'Frañs',
        },
        ces: {
          official: 'Francouzská republika',
          common: 'Francie',
        },
        cym: {
          official: 'French Republic',
          common: 'France',
        },
        deu: {
          official: 'Französische Republik',
          common: 'Frankreich',
        },
        est: {
          official: 'Prantsuse Vabariik',
          common: 'Prantsusmaa',
        },
        fin: {
          official: 'Ranskan tasavalta',
          common: 'Ranska',
        },
        fra: {
          official: 'République française',
          common: 'France',
        },
        hrv: {
          official: 'Francuska Republika',
          common: 'Francuska',
        },
        hun: {
          official: 'Francia Köztársaság',
          common: 'Franciaország',
        },
        ita: {
          official: 'Repubblica francese',
          common: 'Francia',
        },
        jpn: {
          official: 'フランス共和国',
          common: 'フランス',
        },
        kor: {
          official: '프랑스 공화국',
          common: '프랑스',
        },
        nld: {
          official: 'Franse Republiek',
          common: 'Frankrijk',
        },
        per: {
          official: 'جمهوری فرانسه',
          common: 'فرانسه',
        },
        pol: {
          official: 'Republika Francuska',
          common: 'Francja',
        },
        por: {
          official: 'República Francesa',
          common: 'França',
        },
        rus: {
          official: 'Французская Республика',
          common: 'Франция',
        },
        slk: {
          official: 'Francúzska republika',
          common: 'Francúzsko',
        },
        spa: {
          official: 'República francés',
          common: 'Francia',
        },
        srp: {
          official: 'Француска Република',
          common: 'Француска',
        },
        swe: {
          official: 'Republiken Frankrike',
          common: 'Frankrike',
        },
        tur: {
          official: 'Fransa Cumhuriyeti',
          common: 'Fransa',
        },
        urd: {
          official: 'جمہوریہ فرانس',
          common: 'فرانس',
        },
        zho: {
          official: '法兰西共和国',
          common: '法国',
        },
      },
      latlng: [46, 2],
      landlocked: false,
      borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
      area: 551695,
      demonyms: {
        eng: {
          f: 'French',
          m: 'French',
        },
        fra: {
          f: 'Française',
          m: 'Français',
        },
      },
      flag: '🇫🇷',
      maps: {
        googleMaps: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1403916',
      },
      population: 67391582,
      gini: {
        '2018': 32.4,
      },
      fifa: 'FRA',
      car: {
        signs: ['F'],
        side: 'right',
      },
      timezones: [
        'UTC-10:00',
        'UTC-09:30',
        'UTC-09:00',
        'UTC-08:00',
        'UTC-04:00',
        'UTC-03:00',
        'UTC+01:00',
        'UTC+02:00',
        'UTC+03:00',
        'UTC+04:00',
        'UTC+05:00',
        'UTC+10:00',
        'UTC+11:00',
        'UTC+12:00',
      ],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/fr.png',
        svg: 'https://flagcdn.com/fr.svg',
        alt: 'The flag of France is composed of three equal vertical bands of blue, white and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/fr.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/fr.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [48.87, 2.33],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Belarus',
        official: 'Republic of Belarus',
        nativeName: {
          bel: {
            official: 'Рэспубліка Беларусь',
            common: 'Белару́сь',
          },
          rus: {
            official: 'Республика Беларусь',
            common: 'Беларусь',
          },
        },
      },
      tld: ['.by'],
      cca2: 'BY',
      ccn3: '112',
      cca3: 'BLR',
      cioc: 'BLR',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        BYN: {
          name: 'Belarusian ruble',
          symbol: 'Br',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['75'],
      },
      capital: ['Minsk'],
      altSpellings: [
        'BY',
        'Bielaruś',
        'Republic of Belarus',
        'Белоруссия',
        'Республика Белоруссия',
      ],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        bel: 'Belarusian',
        rus: 'Russian',
      },
      translations: {
        ara: {
          official: 'جمهورية بيلاروسيا',
          common: 'بيلاروسيا',
        },
        bre: {
          official: 'Republik Belarus',
          common: 'Belarus',
        },
        ces: {
          official: 'Běloruská republika',
          common: 'Bělorusko',
        },
        cym: {
          official: 'Gweriniaeth Belarws',
          common: 'Belarws',
        },
        deu: {
          official: 'Republik Belarus',
          common: 'Weißrussland',
        },
        est: {
          official: 'Valgevene Vabariik',
          common: 'Valgevene',
        },
        fin: {
          official: 'Valko-Venäjän tasavalta',
          common: 'Valko-Venäjä',
        },
        fra: {
          official: 'République de Biélorussie',
          common: 'Biélorussie',
        },
        hrv: {
          official: 'Republika Bjelorusija',
          common: 'Bjelorusija',
        },
        hun: {
          official: 'Fehérorosz Köztársaság',
          common: 'Fehéroroszország',
        },
        ita: {
          official: 'Repubblica di Belarus',
          common: 'Bielorussia',
        },
        jpn: {
          official: 'ベラルーシ共和国',
          common: 'ベラルーシ',
        },
        kor: {
          official: '벨라루스 공화국',
          common: '벨라루스',
        },
        nld: {
          official: 'Republiek Belarus',
          common: 'Wit-Rusland',
        },
        per: {
          official: 'جمهوری بلاروس',
          common: 'بلاروس',
        },
        pol: {
          official: 'Republika Białorusi',
          common: 'Białoruś',
        },
        por: {
          official: 'República da Bielorrússia',
          common: 'Bielorússia',
        },
        rus: {
          official: 'Республика Беларусь',
          common: 'Беларусь',
        },
        slk: {
          official: 'Bieloruská republika',
          common: 'Bielorusko',
        },
        spa: {
          official: 'República de Belarús',
          common: 'Bielorrusia',
        },
        srp: {
          official: 'Република Белорусија',
          common: 'Белорусија',
        },
        swe: {
          official: 'Republiken Vitryssland',
          common: 'Belarus',
        },
        tur: {
          official: 'Belarus Cumhuriyeti',
          common: 'Belarus',
        },
        urd: {
          official: 'جمہوریہ بیلاروس',
          common: 'بیلاروس',
        },
        zho: {
          official: '白俄罗斯共和国',
          common: '白俄罗斯',
        },
      },
      latlng: [53, 28],
      landlocked: true,
      borders: ['LVA', 'LTU', 'POL', 'RUS', 'UKR'],
      area: 207600,
      demonyms: {
        eng: {
          f: 'Belarusian',
          m: 'Belarusian',
        },
        fra: {
          f: 'Biélorusse',
          m: 'Biélorusse',
        },
      },
      flag: '🇧🇾',
      maps: {
        googleMaps: 'https://goo.gl/maps/PJUDU3EBPSszCQcu6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/59065',
      },
      population: 9398861,
      gini: {
        '2019': 25.3,
      },
      fifa: 'BLR',
      car: {
        signs: ['BY'],
        side: 'right',
      },
      timezones: ['UTC+03:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/by.png',
        svg: 'https://flagcdn.com/by.svg',
        alt: 'The flag of Belarus features a vertical band, with a white and red ornamental pattern, spanning about one-fifth the width of the field on the hoist side. Adjoining the vertical band are two horizontal bands of red and green, with the red band twice the height of the green band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/by.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/by.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [53.9, 27.57],
      },
      postalCode: {
        format: '######',
        regex: '^(\\d{6})$',
      },
    },
    {
      name: {
        common: 'Portugal',
        official: 'Portuguese Republic',
        nativeName: {
          por: {
            official: 'República português',
            common: 'Portugal',
          },
        },
      },
      tld: ['.pt'],
      cca2: 'PT',
      ccn3: '620',
      cca3: 'PRT',
      cioc: 'POR',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['51'],
      },
      capital: ['Lisbon'],
      altSpellings: [
        'PT',
        'Portuguesa',
        'Portuguese Republic',
        'República Portuguesa',
      ],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        por: 'Portuguese',
      },
      translations: {
        ara: {
          official: 'الجمهورية البرتغالية',
          common: 'البرتغال',
        },
        bre: {
          official: 'Republik Portugalat',
          common: 'Portugal',
        },
        ces: {
          official: 'Portugalská republika',
          common: 'Portugalsko',
        },
        cym: {
          official: 'Portuguese Republic',
          common: 'Portugal',
        },
        deu: {
          official: 'Portugiesische Republik',
          common: 'Portugal',
        },
        est: {
          official: 'Portugali Vabariik',
          common: 'Portugal',
        },
        fin: {
          official: 'Portugalin tasavalta',
          common: 'Portugali',
        },
        fra: {
          official: 'République portugaise',
          common: 'Portugal',
        },
        hrv: {
          official: 'Portugalska Republika',
          common: 'Portugal',
        },
        hun: {
          official: 'Portugál Köztársaság',
          common: 'Portugália',
        },
        ita: {
          official: 'Repubblica portoghese',
          common: 'Portogallo',
        },
        jpn: {
          official: 'ポルトガル共和国',
          common: 'ポルトガル',
        },
        kor: {
          official: '포르투갈 공화국',
          common: '포르투갈',
        },
        nld: {
          official: 'Portugese Republiek',
          common: 'Portugal',
        },
        per: {
          official: 'جمهوری پرتغال',
          common: 'پرتغال',
        },
        pol: {
          official: 'Republika Portugalska',
          common: 'Portugalia',
        },
        por: {
          official: 'República português',
          common: 'Portugal',
        },
        rus: {
          official: 'Португальская Республика',
          common: 'Португалия',
        },
        slk: {
          official: 'Portugalská republika',
          common: 'Portugalsko',
        },
        spa: {
          official: 'República Portuguesa',
          common: 'Portugal',
        },
        srp: {
          official: 'Португалска Република',
          common: 'Португал',
        },
        swe: {
          official: 'Republiken Portugal',
          common: 'Portugal',
        },
        tur: {
          official: 'Portekiz Cumhuriyeti',
          common: 'Portekiz',
        },
        urd: {
          official: 'جمہوریہ پرتگال',
          common: 'پرتگال',
        },
        zho: {
          official: '葡萄牙共和国',
          common: '葡萄牙',
        },
      },
      latlng: [39.5, -8],
      landlocked: false,
      borders: ['ESP'],
      area: 92090,
      demonyms: {
        eng: {
          f: 'Portuguese',
          m: 'Portuguese',
        },
        fra: {
          f: 'Portugaise',
          m: 'Portugais',
        },
      },
      flag: '🇵🇹',
      maps: {
        googleMaps: 'https://goo.gl/maps/BaTBSyc4GWMmbAKB8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/295480',
      },
      population: 10305564,
      gini: {
        '2018': 33.5,
      },
      fifa: 'POR',
      car: {
        signs: ['P'],
        side: 'right',
      },
      timezones: ['UTC-01:00', 'UTC'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/pt.png',
        svg: 'https://flagcdn.com/pt.svg',
        alt: 'The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/pt.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/pt.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [38.72, -9.13],
      },
      postalCode: {
        format: '####-###',
        regex: '^(\\d{7})$',
      },
    },
    {
      name: {
        common: 'Croatia',
        official: 'Republic of Croatia',
        nativeName: {
          hrv: {
            official: 'Republika Hrvatska',
            common: 'Hrvatska',
          },
        },
      },
      tld: ['.hr'],
      cca2: 'HR',
      ccn3: '191',
      cca3: 'HRV',
      cioc: 'CRO',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['85'],
      },
      capital: ['Zagreb'],
      altSpellings: [
        'HR',
        'Hrvatska',
        'Republic of Croatia',
        'Republika Hrvatska',
      ],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        hrv: 'Croatian',
      },
      translations: {
        ara: {
          official: 'جمهورية كرواتيا',
          common: 'كرواتيا',
        },
        bre: {
          official: 'Republik Kroatia',
          common: 'Kroatia',
        },
        ces: {
          official: 'Chorvatská republika',
          common: 'Chorvatsko',
        },
        cym: {
          official: 'Gweriniaeth Croatia',
          common: 'Croatia',
        },
        deu: {
          official: 'Republik Kroatien',
          common: 'Kroatien',
        },
        est: {
          official: 'Horvaatia Vabariik',
          common: 'Horvaatia',
        },
        fin: {
          official: 'Kroatian tasavalta',
          common: 'Kroatia',
        },
        fra: {
          official: 'République de Croatie',
          common: 'Croatie',
        },
        hrv: {
          official: 'Republika Hrvatska',
          common: 'Hrvatska',
        },
        hun: {
          official: 'Horvát Köztársaság',
          common: 'Horvátország',
        },
        ita: {
          official: 'Repubblica di Croazia',
          common: 'Croazia',
        },
        jpn: {
          official: 'クロアチア共和国',
          common: 'クロアチア',
        },
        kor: {
          official: '크로아티아 공화국',
          common: '크로아티아',
        },
        nld: {
          official: 'Republiek Kroatië',
          common: 'Kroatië',
        },
        per: {
          official: 'جمهوری کرواسی',
          common: 'کرُواسی',
        },
        pol: {
          official: 'Republika Chorwacji',
          common: 'Chorwacja',
        },
        por: {
          official: 'República da Croácia',
          common: 'Croácia',
        },
        rus: {
          official: 'Республика Хорватия',
          common: 'Хорватия',
        },
        slk: {
          official: 'Chorvátska republika',
          common: 'Chorvátsko',
        },
        spa: {
          official: 'República de Croacia',
          common: 'Croacia',
        },
        srp: {
          official: 'Република Хрватска',
          common: 'Хрватска',
        },
        swe: {
          official: 'Republiken Kroatien',
          common: 'Kroatien',
        },
        tur: {
          official: 'Hırvatistan Cumhuriyeti',
          common: 'Hırvatistan',
        },
        urd: {
          official: 'جمہوریہ کرویئشا',
          common: 'کرویئشا',
        },
        zho: {
          official: '克罗地亚共和国',
          common: '克罗地亚',
        },
      },
      latlng: [45.16666666, 15.5],
      landlocked: false,
      borders: ['BIH', 'HUN', 'MNE', 'SRB', 'SVN'],
      area: 56594,
      demonyms: {
        eng: {
          f: 'Croatian',
          m: 'Croatian',
        },
        fra: {
          f: 'Croate',
          m: 'Croate',
        },
      },
      flag: '🇭🇷',
      maps: {
        googleMaps: 'https://goo.gl/maps/qSG6xTKUmrYpwmGQ6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/214885',
      },
      population: 4047200,
      gini: {
        '2018': 29.7,
      },
      fifa: 'CRO',
      car: {
        signs: ['HR'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/hr.png',
        svg: 'https://flagcdn.com/hr.svg',
        alt: 'The flag of Croatia is composed of three equal horizontal bands of red, white and blue, with coat of arms of Croatia superimposed in the center.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/hr.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/hr.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [45.8, 16],
      },
      postalCode: {
        format: 'HR-#####',
        regex: '^(?:HR)*(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Liechtenstein',
        official: 'Principality of Liechtenstein',
        nativeName: {
          deu: {
            official: 'Fürstentum Liechtenstein',
            common: 'Liechtenstein',
          },
        },
      },
      tld: ['.li'],
      cca2: 'LI',
      ccn3: '438',
      cca3: 'LIE',
      cioc: 'LIE',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        CHF: {
          name: 'Swiss franc',
          symbol: 'Fr',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['23'],
      },
      capital: ['Vaduz'],
      altSpellings: [
        'LI',
        'Principality of Liechtenstein',
        'Fürstentum Liechtenstein',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        deu: 'German',
      },
      translations: {
        ara: {
          official: 'إمارة ليختنشتاين',
          common: 'ليختنشتاين',
        },
        bre: {
          official: 'Priñselezh Liechtenstein',
          common: 'Liechtenstein',
        },
        ces: {
          official: 'Knížectví Lichtenštejnské',
          common: 'Lichtenštejnsko',
        },
        cym: {
          official: 'Principality of Liechtenstein',
          common: 'Liechtenstein',
        },
        deu: {
          official: 'Fürstentum Liechtenstein',
          common: 'Liechtenstein',
        },
        est: {
          official: 'Liechtensteini Vürstiriik',
          common: 'Liechtenstein',
        },
        fin: {
          official: 'Liechensteinin ruhtinaskunta',
          common: 'Liechenstein',
        },
        fra: {
          official: 'Principauté du Liechtenstein',
          common: 'Liechtenstein',
        },
        hrv: {
          official: 'Kneževina Lihtenštajn',
          common: 'Lihtenštajn',
        },
        hun: {
          official: 'Liechtensteini Hercegség',
          common: 'Liechtenstein',
        },
        ita: {
          official: 'Principato del Liechtenstein',
          common: 'Liechtenstein',
        },
        jpn: {
          official: 'リヒテンシュタイン公国',
          common: 'リヒテンシュタイン',
        },
        kor: {
          official: '리히텐슈타인 공국',
          common: '리히텐슈타인',
        },
        nld: {
          official: 'Vorstendom Liechtenstein',
          common: 'Liechtenstein',
        },
        per: {
          official: 'شاهزاده‌نشین لیختن‌اشتاین',
          common: 'لیختن‌اشتاین',
        },
        pol: {
          official: 'Księstwo Liechtensteinu',
          common: 'Liechtenstein',
        },
        por: {
          official: 'Principado de Liechtenstein',
          common: 'Liechtenstein',
        },
        rus: {
          official: 'Княжество Лихтенштейн',
          common: 'Лихтенштейн',
        },
        slk: {
          official: 'Lichtenštajnské kniežatstvo',
          common: 'Lichtenštajnsko',
        },
        spa: {
          official: 'Principado de Liechtenstein',
          common: 'Liechtenstein',
        },
        srp: {
          official: 'Кнежевина Лихтенштајн',
          common: 'Лихтенштајн',
        },
        swe: {
          official: 'Furstendömet Liechtenstein',
          common: 'Liechtenstein',
        },
        tur: {
          official: 'Lihtenştayn Prensliği',
          common: 'Lihtenştayn',
        },
        urd: {
          official: 'امارات لیختینستائن',
          common: 'لیختینستائن',
        },
        zho: {
          official: '列支敦士登公国',
          common: '列支敦士登',
        },
      },
      latlng: [47.26666666, 9.53333333],
      landlocked: true,
      borders: ['AUT', 'CHE'],
      area: 160,
      demonyms: {
        eng: {
          f: 'Liechtensteiner',
          m: 'Liechtensteiner',
        },
        fra: {
          f: 'Liechtensteinoise',
          m: 'Liechtensteinois',
        },
      },
      flag: '🇱🇮',
      maps: {
        googleMaps: 'https://goo.gl/maps/KNuHeiJzAPodwM7y6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1155955',
      },
      population: 38137,
      fifa: 'LIE',
      car: {
        signs: ['FL'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/li.png',
        svg: 'https://flagcdn.com/li.svg',
        alt: 'The flag of Liechtenstein is composed of two equal horizontal bands of blue and red, with a golden-yellow crown on the hoist side of the blue band.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/li.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/li.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [47.13, 9.52],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
      gini: {},
    },
    {
      name: {
        common: 'Hungary',
        official: 'Hungary',
        nativeName: {
          hun: {
            official: 'Magyarország',
            common: 'Magyarország',
          },
        },
      },
      tld: ['.hu'],
      cca2: 'HU',
      ccn3: '348',
      cca3: 'HUN',
      cioc: 'HUN',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        HUF: {
          name: 'Hungarian forint',
          symbol: 'Ft',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['6'],
      },
      capital: ['Budapest'],
      altSpellings: ['HU'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        hun: 'Hungarian',
      },
      translations: {
        ara: {
          official: 'الجمهورية المجرية',
          common: 'المجر',
        },
        bre: {
          official: 'Hungaria',
          common: 'Hungaria',
        },
        ces: {
          official: 'Maďarsko',
          common: 'Maďarsko',
        },
        cym: {
          official: 'Hungary',
          common: 'Hungary',
        },
        deu: {
          official: 'Ungarn',
          common: 'Ungarn',
        },
        est: {
          official: 'Ungari',
          common: 'Ungari',
        },
        fin: {
          official: 'Unkari',
          common: 'Unkari',
        },
        fra: {
          official: 'Hongrie',
          common: 'Hongrie',
        },
        hrv: {
          official: 'Madžarska',
          common: 'Mađarska',
        },
        hun: {
          official: 'Magyarország',
          common: 'Magyarország',
        },
        ita: {
          official: 'Ungheria',
          common: 'Ungheria',
        },
        jpn: {
          official: 'ハンガリー',
          common: 'ハンガリー',
        },
        kor: {
          official: '헝가리',
          common: '헝가리',
        },
        nld: {
          official: 'Hongarije',
          common: 'Hongarije',
        },
        per: {
          official: 'مجارستان',
          common: 'مجارستان',
        },
        pol: {
          official: 'Węgry',
          common: 'Węgry',
        },
        por: {
          official: 'Hungria',
          common: 'Hungria',
        },
        rus: {
          official: 'Венгрия',
          common: 'Венгрия',
        },
        slk: {
          official: 'Maďarsko',
          common: 'Maďarsko',
        },
        spa: {
          official: 'Hungría',
          common: 'Hungría',
        },
        srp: {
          official: 'Мађарска',
          common: 'Мађарска',
        },
        swe: {
          official: 'Ungern',
          common: 'Ungern',
        },
        tur: {
          official: 'Macaristan',
          common: 'Macaristan',
        },
        urd: {
          official: 'مجارستان',
          common: 'مجارستان',
        },
        zho: {
          official: '匈牙利',
          common: '匈牙利',
        },
      },
      latlng: [47, 20],
      landlocked: true,
      borders: ['AUT', 'HRV', 'ROU', 'SRB', 'SVK', 'SVN', 'UKR'],
      area: 93028,
      demonyms: {
        eng: {
          f: 'Hungarian',
          m: 'Hungarian',
        },
        fra: {
          f: 'Hongroise',
          m: 'Hongrois',
        },
      },
      flag: '🇭🇺',
      maps: {
        googleMaps: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/21335',
      },
      population: 9749763,
      gini: {
        '2018': 29.6,
      },
      fifa: 'HUN',
      car: {
        signs: ['H'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/hu.png',
        svg: 'https://flagcdn.com/hu.svg',
        alt: 'The flag of Hungary is composed of three equal horizontal bands of red, white and green.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/hu.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/hu.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [47.5, 19.08],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Iceland',
        official: 'Iceland',
        nativeName: {
          isl: {
            official: 'Ísland',
            common: 'Ísland',
          },
        },
      },
      tld: ['.is'],
      cca2: 'IS',
      ccn3: '352',
      cca3: 'ISL',
      cioc: 'ISL',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        ISK: {
          name: 'Icelandic króna',
          symbol: 'kr',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['54'],
      },
      capital: ['Reykjavik'],
      altSpellings: ['IS', 'Island', 'Republic of Iceland', 'Lýðveldið Ísland'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        isl: 'Icelandic',
      },
      translations: {
        ara: {
          official: 'آيسلندا',
          common: 'آيسلندا',
        },
        bre: {
          official: 'Island',
          common: 'Island',
        },
        ces: {
          official: 'Island',
          common: 'Island',
        },
        cym: {
          official: 'Iceland',
          common: 'Iceland',
        },
        deu: {
          official: 'Island',
          common: 'Island',
        },
        est: {
          official: 'Islandi Vabariik',
          common: 'Island',
        },
        fin: {
          official: 'Islanti',
          common: 'Islanti',
        },
        fra: {
          official: "République d'Islande",
          common: 'Islande',
        },
        hrv: {
          official: 'Island',
          common: 'Island',
        },
        hun: {
          official: 'Izland',
          common: 'Izland',
        },
        ita: {
          official: 'Islanda',
          common: 'Islanda',
        },
        jpn: {
          official: 'アイスランド',
          common: 'アイスランド',
        },
        kor: {
          official: '아이슬란드 공화국',
          common: '아이슬란드',
        },
        nld: {
          official: 'IJsland',
          common: 'IJsland',
        },
        per: {
          official: 'جمهوری ایسلند',
          common: 'ایسلند',
        },
        pol: {
          official: 'Republika Islandii',
          common: 'Islandia',
        },
        por: {
          official: 'Islândia',
          common: 'Islândia',
        },
        rus: {
          official: 'Исландия',
          common: 'Исландия',
        },
        slk: {
          official: 'Islandská republika',
          common: 'Island',
        },
        spa: {
          official: 'Islandia',
          common: 'Islandia',
        },
        srp: {
          official: 'Исланд',
          common: 'Исланд',
        },
        swe: {
          official: 'Island',
          common: 'Island',
        },
        tur: {
          official: 'İzlanda',
          common: 'İzlanda',
        },
        urd: {
          official: 'آئس لینڈ',
          common: 'آئس لینڈ',
        },
        zho: {
          official: '冰岛',
          common: '冰岛',
        },
      },
      latlng: [65, -18],
      landlocked: false,
      area: 103000,
      demonyms: {
        eng: {
          f: 'Icelander',
          m: 'Icelander',
        },
        fra: {
          f: 'Islandaise',
          m: 'Islandais',
        },
      },
      flag: '🇮🇸',
      maps: {
        googleMaps: 'https://goo.gl/maps/WxFWSQuc3oamNxoE6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/299133',
      },
      population: 366425,
      gini: {
        '2017': 26.1,
      },
      fifa: 'ISL',
      car: {
        signs: ['IS'],
        side: 'right',
      },
      timezones: ['UTC'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/is.png',
        svg: 'https://flagcdn.com/is.svg',
        alt: 'The flag of Iceland has a blue field with a large white-edged red cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/is.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/is.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [64.15, -21.95],
      },
      postalCode: {
        format: '###',
        regex: '^(\\d{3})$',
      },
      borders: [],
    },
    {
      name: {
        common: 'Poland',
        official: 'Republic of Poland',
        nativeName: {
          pol: {
            official: 'Rzeczpospolita Polska',
            common: 'Polska',
          },
        },
      },
      tld: ['.pl'],
      cca2: 'PL',
      ccn3: '616',
      cca3: 'POL',
      cioc: 'POL',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        PLN: {
          name: 'Polish złoty',
          symbol: 'zł',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['8'],
      },
      capital: ['Warsaw'],
      altSpellings: ['PL', 'Republic of Poland', 'Rzeczpospolita Polska'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        pol: 'Polish',
      },
      translations: {
        ara: {
          official: 'الجمهورية البولندية',
          common: 'بولندا',
        },
        bre: {
          official: 'Republik Polonia',
          common: 'Polonia',
        },
        ces: {
          official: 'Polská republika',
          common: 'Polsko',
        },
        cym: {
          official: 'Republic of Poland',
          common: 'Poland',
        },
        deu: {
          official: 'Republik Polen',
          common: 'Polen',
        },
        est: {
          official: 'Poola Vabariik',
          common: 'Poola',
        },
        fin: {
          official: 'Puolan tasavalta',
          common: 'Puola',
        },
        fra: {
          official: 'République de Pologne',
          common: 'Pologne',
        },
        hrv: {
          official: 'Republika Poljska',
          common: 'Poljska',
        },
        hun: {
          official: 'Lengyel Köztársaság',
          common: 'Lengyelország',
        },
        ita: {
          official: 'Repubblica di Polonia',
          common: 'Polonia',
        },
        jpn: {
          official: 'ポーランド共和国',
          common: 'ポーランド',
        },
        kor: {
          official: '폴란드 공화국',
          common: '폴란드',
        },
        nld: {
          official: 'Republiek Polen',
          common: 'Polen',
        },
        per: {
          official: 'جمهوری لهستان',
          common: 'لهستان',
        },
        pol: {
          official: 'Rzeczpospolita Polska',
          common: 'Polska',
        },
        por: {
          official: 'República da Polónia',
          common: 'Polónia',
        },
        rus: {
          official: 'Республика Польша',
          common: 'Польша',
        },
        slk: {
          official: 'Poľská republika',
          common: 'Poľsko',
        },
        spa: {
          official: 'República de Polonia',
          common: 'Polonia',
        },
        srp: {
          official: 'Република Пољска',
          common: 'Пољска',
        },
        swe: {
          official: 'Republiken Polen',
          common: 'Polen',
        },
        tur: {
          official: 'Polonya Cumhuriyeti',
          common: 'Polonya',
        },
        urd: {
          official: 'جمہوریہ پولینڈ',
          common: 'پولینڈ',
        },
        zho: {
          official: '波兰共和国',
          common: '波兰',
        },
      },
      latlng: [52, 20],
      landlocked: false,
      borders: ['BLR', 'CZE', 'DEU', 'LTU', 'RUS', 'SVK', 'UKR'],
      area: 312679,
      demonyms: {
        eng: {
          f: 'Polish',
          m: 'Polish',
        },
        fra: {
          f: 'Polonaise',
          m: 'Polonais',
        },
      },
      flag: '🇵🇱',
      maps: {
        googleMaps: 'https://goo.gl/maps/gY9Xw4Sf4415P4949',
        openStreetMaps: 'https://www.openstreetmap.org/relation/49715',
      },
      population: 37950802,
      gini: {
        '2018': 30.2,
      },
      fifa: 'POL',
      car: {
        signs: ['PL'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/pl.png',
        svg: 'https://flagcdn.com/pl.svg',
        alt: 'The flag of Poland is composed of two equal horizontal bands of white and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/pl.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/pl.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [52.25, 21],
      },
      postalCode: {
        format: '##-###',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Switzerland',
        official: 'Swiss Confederation',
        nativeName: {
          fra: {
            official: 'Confédération suisse',
            common: 'Suisse',
          },
          gsw: {
            official: 'Schweizerische Eidgenossenschaft',
            common: 'Schweiz',
          },
          ita: {
            official: 'Confederazione Svizzera',
            common: 'Svizzera',
          },
          roh: {
            official: 'Confederaziun svizra',
            common: 'Svizra',
          },
        },
      },
      tld: ['.ch'],
      cca2: 'CH',
      ccn3: '756',
      cca3: 'CHE',
      cioc: 'SUI',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        CHF: {
          name: 'Swiss franc',
          symbol: 'Fr.',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['1'],
      },
      capital: ['Bern'],
      altSpellings: [
        'CH',
        'Swiss Confederation',
        'Schweiz',
        'Suisse',
        'Svizzera',
        'Svizra',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        fra: 'French',
        gsw: 'Swiss German',
        ita: 'Italian',
        roh: 'Romansh',
      },
      translations: {
        ara: {
          official: 'الاتحاد السويسري',
          common: 'سويسرا',
        },
        bre: {
          official: 'Kengevredad Suis',
          common: 'Suis',
        },
        ces: {
          official: 'Švýcarská konfederace',
          common: 'Švýcarsko',
        },
        cym: {
          official: 'Swiss Confederation',
          common: 'Switzerland',
        },
        deu: {
          official: 'Schweizerische Eidgenossenschaft',
          common: 'Schweiz',
        },
        est: {
          official: 'Šveitsi Konföderatsioon',
          common: 'Šveits',
        },
        fin: {
          official: 'Sveitsin valaliitto',
          common: 'Sveitsi',
        },
        fra: {
          official: 'Confédération suisse',
          common: 'Suisse',
        },
        hrv: {
          official: 'švicarska Konfederacija',
          common: 'Švicarska',
        },
        hun: {
          official: 'Svájc',
          common: 'Svájc',
        },
        ita: {
          official: 'Confederazione svizzera',
          common: 'Svizzera',
        },
        jpn: {
          official: 'スイス連邦',
          common: 'スイス',
        },
        kor: {
          official: '스위스 연방',
          common: '스위스',
        },
        nld: {
          official: 'Zwitserse Confederatie',
          common: 'Zwitserland',
        },
        per: {
          official: 'کنفدراسیون سوئیس',
          common: 'سوئیس',
        },
        pol: {
          official: 'Konfederacja Szwajcarska',
          common: 'Szwajcaria',
        },
        por: {
          official: 'Confederação Suíça',
          common: 'Suíça',
        },
        rus: {
          official: 'Швейцарская Конфедерация',
          common: 'Швейцария',
        },
        slk: {
          official: 'Švajčiarska konfederácia',
          common: 'Švajčiarsko',
        },
        spa: {
          official: 'Confederación Suiza',
          common: 'Suiza',
        },
        srp: {
          official: 'Швајцарска Конфедерација',
          common: 'Швајцарска',
        },
        swe: {
          official: 'Schweiziska edsförbundet',
          common: 'Schweiz',
        },
        tur: {
          official: 'İsviçre Konfederasyonu',
          common: 'İsviçre',
        },
        urd: {
          official: 'سوئیس  متحدہ',
          common: 'سویٹذرلینڈ',
        },
        zho: {
          official: '瑞士联邦',
          common: '瑞士',
        },
      },
      latlng: [47, 8],
      landlocked: true,
      borders: ['AUT', 'FRA', 'ITA', 'LIE', 'DEU'],
      area: 41284,
      demonyms: {
        eng: {
          f: 'Swiss',
          m: 'Swiss',
        },
        fra: {
          f: 'Suisse',
          m: 'Suisse',
        },
      },
      flag: '🇨🇭',
      maps: {
        googleMaps: 'https://goo.gl/maps/uVuZcXaxSx5jLyEC9',
        openStreetMaps: 'https://www.openstreetmap.org/relation/51701',
      },
      population: 8654622,
      gini: {
        '2018': 33.1,
      },
      fifa: 'SUI',
      car: {
        signs: ['CH'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ch.png',
        svg: 'https://flagcdn.com/ch.svg',
        alt: 'The flag of Switzerland is square shaped. It features a white Swiss cross centered on a red field.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ch.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ch.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [46.92, 7.47],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'North Macedonia',
        official: 'Republic of North Macedonia',
        nativeName: {
          mkd: {
            official: 'Република Северна Македонија',
            common: 'Македонија',
          },
        },
      },
      tld: ['.mk'],
      cca2: 'MK',
      ccn3: '807',
      cca3: 'MKD',
      cioc: 'MKD',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        MKD: {
          name: 'denar',
          symbol: 'den',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['89'],
      },
      capital: ['Skopje'],
      altSpellings: [
        'MK',
        'The former Yugoslav Republic of Macedonia',
        'Republic of North Macedonia',
        'Macedonia, The Former Yugoslav Republic of',
        'Република Северна Македонија',
      ],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        mkd: 'Macedonian',
      },
      translations: {
        ara: {
          official: 'جمهورية شمال مقدونيا',
          common: 'شمال مقدونيا',
        },
        bre: {
          official: 'Republik Makedonia an Norzh',
          common: 'Makedonia an Norzh',
        },
        ces: {
          official: 'Republika Severní Makedonie',
          common: 'Severní Makedonie',
        },
        cym: {
          official: 'Republic of North Macedonia',
          common: 'North Macedonia',
        },
        deu: {
          official: 'Republik Nordmazedonien',
          common: 'Nordmazedonien',
        },
        est: {
          official: 'Põhja-Makedoonia Vabariik',
          common: 'Põhja-Makedoonia',
        },
        fin: {
          official: 'Pohjois-Makedonian tasavalta',
          common: 'Pohjois-Makedonia',
        },
        fra: {
          official: 'République de Macédoine du Nord',
          common: 'Macédoine du Nord',
        },
        hrv: {
          official: 'Republika Sjeverna Makedonija',
          common: 'Sjeverna Makedonija',
        },
        hun: {
          official: 'Észak-macedón Köztársaság',
          common: 'Észak-Macedónia',
        },
        ita: {
          official: 'Repubblica di Macedonia del Nord',
          common: 'Macedonia del Nord',
        },
        jpn: {
          official: '北マケドニア共和国',
          common: '北マケドニア ',
        },
        kor: {
          official: '북마케도니아 공화국',
          common: '북마케도니아',
        },
        nld: {
          official: 'Republiek Noord-Macedonië',
          common: 'Noord-Macedonië',
        },
        per: {
          official: 'جمهوری مقدونیه شمالی',
          common: 'مقدونیه شمالی',
        },
        pol: {
          official: 'Republika Macedonii Północnej',
          common: 'Macedonia Północna',
        },
        por: {
          official: 'República da Macedônia do Norte',
          common: 'Macedónia do Norte',
        },
        rus: {
          official: 'Республика Северная Македония',
          common: 'Северная Македония',
        },
        slk: {
          official: 'Severomacedónska republika',
          common: 'Severné Macedónsko',
        },
        spa: {
          official: 'República de Macedonia del Norte',
          common: 'Macedonia del Norte',
        },
        srp: {
          official: 'Република Северна Македонија',
          common: 'Северна Македонија',
        },
        swe: {
          official: 'Republiken Nordmakedonien',
          common: 'Nordmakedonien',
        },
        tur: {
          official: 'Kuzey Makedonya Cumhuriyeti',
          common: 'Kuzey Makedonya',
        },
        urd: {
          official: 'جمہوریہ مقدونیہ',
          common: 'شمالی مقدونیہ',
        },
        zho: {
          official: '北馬其頓共和國',
          common: '北馬其頓',
        },
      },
      latlng: [41.83333333, 22],
      landlocked: true,
      borders: ['ALB', 'BGR', 'GRC', 'UNK', 'SRB'],
      area: 25713,
      demonyms: {
        eng: {
          f: 'Macedonian',
          m: 'Macedonian',
        },
        fra: {
          f: 'Macédonienne',
          m: 'Macédonien',
        },
      },
      flag: '🇲🇰',
      maps: {
        googleMaps: 'https://goo.gl/maps/55Q8MEnF6ACdu3q79',
        openStreetMaps: 'https://www.openstreetmap.org/relation/53293',
      },
      population: 2077132,
      gini: {
        '2018': 33,
      },
      fifa: 'MKD',
      car: {
        signs: ['MK'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/mk.png',
        svg: 'https://flagcdn.com/mk.svg',
        alt: 'The flag of North Macedonia has a red field, at the center of which is a golden-yellow sun with eight broadening rays that extend to the edges of the field.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/mk.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/mk.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [42, 21.43],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Kosovo',
        official: 'Republic of Kosovo',
        nativeName: {
          sqi: {
            official: 'Republika e Kosovës',
            common: 'Kosova',
          },
          srp: {
            official: 'Република Косово',
            common: 'Косово',
          },
        },
      },
      cca2: 'XK',
      cca3: 'UNK',
      cioc: 'KOS',
      status: 'user-assigned',
      unMember: false,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['83'],
      },
      capital: ['Pristina'],
      altSpellings: ['XK', 'Република Косово'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        sqi: 'Albanian',
        srp: 'Serbian',
      },
      translations: {
        ara: {
          official: 'جمهورية كوسوفو',
          common: 'كوسوفو',
        },
        bre: {
          official: 'Republik Kosovo',
          common: 'Kosovo',
        },
        ces: {
          official: 'Kosovská republika',
          common: 'Kosovo',
        },
        cym: {
          official: 'Republic of Kosovo',
          common: 'Kosovo',
        },
        deu: {
          official: 'Republik Kosovo',
          common: 'Kosovo',
        },
        est: {
          official: 'Kosovo Vabariik',
          common: 'Kosovo',
        },
        fin: {
          official: 'Kosovon tasavalta',
          common: 'Kosovo',
        },
        fra: {
          official: 'République du Kosovo',
          common: 'Kosovo',
        },
        hrv: {
          official: 'Republika Kosovo',
          common: 'Kosovo',
        },
        hun: {
          official: 'Koszovó',
          common: 'Koszovó',
        },
        ita: {
          official: 'Repubblica del Kosovo',
          common: 'Kosovo',
        },
        kor: {
          official: '코소보 공화국',
          common: '코소보',
        },
        nld: {
          official: 'Republiek Kosovo',
          common: 'Kosovo',
        },
        per: {
          official: 'جمهوری کوزوو',
          common: 'کوزوو',
        },
        pol: {
          official: 'Republika Kosowa',
          common: 'Kosowo',
        },
        por: {
          official: 'República do Kosovo',
          common: 'Kosovo',
        },
        rus: {
          official: 'Республика Косово',
          common: 'Республика Косово',
        },
        slk: {
          official: 'Republika Kosovo',
          common: 'Kosovo',
        },
        spa: {
          official: 'República de Kosovo',
          common: 'Kosovo',
        },
        srp: {
          official: 'Република Косово',
          common: 'Косово',
        },
        swe: {
          official: 'Republiken Kosovo',
          common: 'Kosovo',
        },
        tur: {
          official: 'Kosova Cumhuriyeti',
          common: 'Kosova',
        },
        urd: {
          official: 'جمہوریہ کوسووہ',
          common: 'کوسووہ',
        },
        zho: {
          official: '科索沃共和国',
          common: '科索沃',
        },
      },
      latlng: [42.666667, 21.166667],
      landlocked: true,
      borders: ['ALB', 'MKD', 'MNE', 'SRB'],
      area: 10908,
      demonyms: {
        eng: {
          f: 'Kosovar',
          m: 'Kosovar',
        },
        fra: {
          f: 'Kosovare',
          m: 'Kosovar',
        },
      },
      flag: '🇽🇰',
      maps: {
        googleMaps: 'https://goo.gl/maps/CSC4Yc8SWPgburuD9',
        openStreetMaps: 'https://www.openstreetmap.org/relation/2088990',
      },
      population: 1775378,
      gini: {
        '2017': 29,
      },
      fifa: 'KVX',
      car: {
        signs: ['CS'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/xk.png',
        svg: 'https://flagcdn.com/xk.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/xk.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/xk.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [42.67, 21.17],
      },
      tld: [],
      ccn3: '',
      independent: false,
      postalCode: {
        format: '',
        regex: '',
      },
    },
    {
      name: {
        common: 'Belgium',
        official: 'Kingdom of Belgium',
        nativeName: {
          deu: {
            official: 'Königreich Belgien',
            common: 'Belgien',
          },
          fra: {
            official: 'Royaume de Belgique',
            common: 'Belgique',
          },
          nld: {
            official: 'Koninkrijk België',
            common: 'België',
          },
        },
      },
      tld: ['.be'],
      cca2: 'BE',
      ccn3: '056',
      cca3: 'BEL',
      cioc: 'BEL',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['2'],
      },
      capital: ['Brussels'],
      altSpellings: [
        'BE',
        'België',
        'Belgie',
        'Belgien',
        'Belgique',
        'Kingdom of Belgium',
        'Koninkrijk België',
        'Royaume de Belgique',
        'Königreich Belgien',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        deu: 'German',
        fra: 'French',
        nld: 'Dutch',
      },
      translations: {
        ara: {
          official: 'مملكة بلجيكا',
          common: 'بلجيكا',
        },
        bre: {
          official: 'Rouantelezh Belgia',
          common: 'Belgia',
        },
        ces: {
          official: 'Belgické království',
          common: 'Belgie',
        },
        cym: {
          official: 'Teyrnas Gwlad Belg',
          common: 'Gwlad Belg',
        },
        deu: {
          official: 'Königreich Belgien',
          common: 'Belgien',
        },
        est: {
          official: 'Belgia Kuningriik',
          common: 'Belgia',
        },
        fin: {
          official: 'Belgian kuningaskunta',
          common: 'Belgia',
        },
        fra: {
          official: 'Royaume de Belgique',
          common: 'Belgique',
        },
        hrv: {
          official: 'Kraljevina Belgija',
          common: 'Belgija',
        },
        hun: {
          official: 'Belga Királyság',
          common: 'Belgium',
        },
        ita: {
          official: 'Regno del Belgio',
          common: 'Belgio',
        },
        jpn: {
          official: 'ベルギー王国',
          common: 'ベルギー',
        },
        kor: {
          official: '벨기에 왕국',
          common: '벨기에',
        },
        nld: {
          official: 'Koninkrijk België',
          common: 'België',
        },
        per: {
          official: 'پادشاهی بلژیک',
          common: 'بلژیک',
        },
        pol: {
          official: 'Królestwo Belgii',
          common: 'Belgia',
        },
        por: {
          official: 'Reino da Bélgica',
          common: 'Bélgica',
        },
        rus: {
          official: 'Королевство Бельгия',
          common: 'Бельгия',
        },
        slk: {
          official: 'Belgické kráľovstvo',
          common: 'Belgicko',
        },
        spa: {
          official: 'Reino de Bélgica',
          common: 'Bélgica',
        },
        srp: {
          official: 'Краљевина Белгија',
          common: 'Белгија',
        },
        swe: {
          official: 'Konungariket Belgien',
          common: 'Belgien',
        },
        tur: {
          official: 'Belçika Krallığı',
          common: 'Belğika',
        },
        urd: {
          official: 'مملکتِ بلجئیم',
          common: 'بلجئیم',
        },
        zho: {
          official: '比利时王国',
          common: '比利时',
        },
      },
      latlng: [50.83333333, 4],
      landlocked: false,
      borders: ['FRA', 'DEU', 'LUX', 'NLD'],
      area: 30528,
      demonyms: {
        eng: {
          f: 'Belgian',
          m: 'Belgian',
        },
        fra: {
          f: 'Belge',
          m: 'Belge',
        },
      },
      flag: '🇧🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/UQQzat85TCtPRXAL8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/52411',
      },
      population: 11555997,
      gini: {
        '2018': 27.2,
      },
      fifa: 'BEL',
      car: {
        signs: ['B'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/be.png',
        svg: 'https://flagcdn.com/be.svg',
        alt: 'The flag of Belgium is composed of three equal vertical bands of black, yellow and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/be.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/be.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [50.83, 4.33],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Serbia',
        official: 'Republic of Serbia',
        nativeName: {
          srp: {
            official: 'Република Србија',
            common: 'Србија',
          },
        },
      },
      tld: ['.rs', '.срб'],
      cca2: 'RS',
      ccn3: '688',
      cca3: 'SRB',
      cioc: 'SRB',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        RSD: {
          name: 'Serbian dinar',
          symbol: 'дин.',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['81'],
      },
      capital: ['Belgrade'],
      altSpellings: [
        'RS',
        'Srbija',
        'Republic of Serbia',
        'Република Србија',
        'Republika Srbija',
      ],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        srp: 'Serbian',
      },
      translations: {
        ara: {
          official: 'جمهورية صيربيا',
          common: 'صيربيا',
        },
        bre: {
          official: 'Republik Serbia',
          common: 'Serbia',
        },
        ces: {
          official: 'Srbská republika',
          common: 'Srbsko',
        },
        cym: {
          official: 'Republic of Serbia',
          common: 'Serbia',
        },
        deu: {
          official: 'Republik Serbien',
          common: 'Serbien',
        },
        est: {
          official: 'Serbia Vabariik',
          common: 'Serbia',
        },
        fin: {
          official: 'Serbian tasavalta',
          common: 'Serbia',
        },
        fra: {
          official: 'République de Serbie',
          common: 'Serbie',
        },
        hrv: {
          official: 'Republika Srbija',
          common: 'Srbija',
        },
        hun: {
          official: 'Szerb Köztársaság',
          common: 'Szerbia',
        },
        ita: {
          official: 'Repubblica di Serbia',
          common: 'Serbia',
        },
        jpn: {
          official: 'セルビア共和国',
          common: 'セルビア',
        },
        kor: {
          official: '세르비아 공화국',
          common: '세르비아',
        },
        nld: {
          official: 'Republiek Servië',
          common: 'Servië',
        },
        per: {
          official: 'جمهوری صربستان',
          common: 'صربستان',
        },
        pol: {
          official: 'Republika Serbii',
          common: 'Serbia',
        },
        por: {
          official: 'República da Sérvia',
          common: 'Sérvia',
        },
        rus: {
          official: 'Республика Сербия',
          common: 'Сербия',
        },
        slk: {
          official: 'Srbská republika',
          common: 'Srbsko',
        },
        spa: {
          official: 'República de Serbia',
          common: 'Serbia',
        },
        srp: {
          official: 'Република Србија',
          common: 'Србија',
        },
        swe: {
          official: 'Republiken Serbien',
          common: 'Serbien',
        },
        tur: {
          official: 'Sırbistan Cumhuriyeti',
          common: 'Sırbistan',
        },
        urd: {
          official: 'جمہوریہ سربیا',
          common: 'سربیا',
        },
        zho: {
          official: '塞尔维亚共和国',
          common: '塞尔维亚',
        },
      },
      latlng: [44, 21],
      landlocked: true,
      borders: ['BIH', 'BGR', 'HRV', 'HUN', 'UNK', 'MKD', 'MNE', 'ROU'],
      area: 88361,
      demonyms: {
        eng: {
          f: 'Serbian',
          m: 'Serbian',
        },
        fra: {
          f: 'Serbe',
          m: 'Serbe',
        },
      },
      flag: '🇷🇸',
      maps: {
        googleMaps: 'https://goo.gl/maps/2Aqof7aV2Naq8YEK8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1741311',
      },
      population: 6908224,
      gini: {
        '2017': 36.2,
      },
      fifa: 'SRB',
      car: {
        signs: ['SRB'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/rs.png',
        svg: 'https://flagcdn.com/rs.svg',
        alt: 'The flag of Serbia is composed of three equal horizontal bands of red, blue and white. The coat of arms of Serbia is superimposed at the center of the field slightly towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/rs.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/rs.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [44.83, 20.5],
      },
      postalCode: {
        format: '######',
        regex: '^(\\d{6})$',
      },
    },
    {
      name: {
        common: 'Netherlands',
        official: 'Kingdom of the Netherlands',
        nativeName: {
          nld: {
            official: 'Koninkrijk der Nederlanden',
            common: 'Nederland',
          },
        },
      },
      tld: ['.nl'],
      cca2: 'NL',
      ccn3: '528',
      cca3: 'NLD',
      cioc: 'NED',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['1'],
      },
      capital: ['Amsterdam'],
      altSpellings: ['NL', 'Holland', 'Nederland', 'The Netherlands'],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        nld: 'Dutch',
      },
      translations: {
        ara: {
          official: 'مملكة هولندا',
          common: 'هولندا',
        },
        bre: {
          official: 'Rouantelezh an Izelvroioù',
          common: 'Izelvroioù',
        },
        ces: {
          official: 'Nizozemské království',
          common: 'Nizozemsko',
        },
        cym: {
          official: 'Kingdom of the Netherlands',
          common: 'Netherlands',
        },
        deu: {
          official: 'Niederlande',
          common: 'Niederlande',
        },
        est: {
          official: 'Madalmaade Kuningriik',
          common: 'Holland',
        },
        fin: {
          official: 'Alankomaat',
          common: 'Alankomaat',
        },
        fra: {
          official: 'Pays-Bas',
          common: 'Pays-Bas',
        },
        hrv: {
          official: 'Holandija',
          common: 'Nizozemska',
        },
        hun: {
          official: 'Holland Királyság',
          common: 'Hollandia',
        },
        ita: {
          official: 'Paesi Bassi',
          common: 'Paesi Bassi',
        },
        jpn: {
          official: 'オランダ',
          common: 'オランダ',
        },
        kor: {
          official: '네덜란드 왕국',
          common: '네덜란드',
        },
        nld: {
          official: 'Nederland',
          common: 'Nederland',
        },
        per: {
          official: 'هلند',
          common: 'هلند',
        },
        pol: {
          official: 'Królestwo Niderlandów',
          common: 'Holandia',
        },
        por: {
          official: 'Holanda',
          common: 'Holanda',
        },
        rus: {
          official: 'Нидерланды',
          common: 'Нидерланды',
        },
        slk: {
          official: 'Holandské kráľovstvo',
          common: 'Holansko',
        },
        spa: {
          official: 'Países Bajos',
          common: 'Países Bajos',
        },
        srp: {
          official: 'Краљевина Холандија',
          common: 'Холандија',
        },
        swe: {
          official: 'Nederländerna',
          common: 'Nederländerna',
        },
        tur: {
          official: 'Hollanda',
          common: 'Hollanda',
        },
        urd: {
          official: 'مملکتِ نیدرلینڈز',
          common: 'نیدرلینڈز',
        },
        zho: {
          official: '荷兰',
          common: '荷兰',
        },
      },
      latlng: [52.5, 5.75],
      landlocked: false,
      borders: ['BEL', 'DEU'],
      area: 41850,
      demonyms: {
        eng: {
          f: 'Dutch',
          m: 'Dutch',
        },
        fra: {
          f: 'Néerlandaise',
          m: 'Néerlandais',
        },
      },
      flag: '🇳🇱',
      maps: {
        googleMaps: 'https://goo.gl/maps/Hv6zQswGhFxoVVBm6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/47796',
      },
      population: 16655799,
      gini: {
        '2018': 28.1,
      },
      fifa: 'NED',
      car: {
        signs: ['NL'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/nl.png',
        svg: 'https://flagcdn.com/nl.svg',
        alt: 'The flag of the Netherlands is composed of three equal horizontal bands of red, white and blue.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/nl.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/nl.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [52.35, 4.92],
      },
      postalCode: {
        format: '#### @@',
        regex: '^(\\d{4}[A-Z]{2})$',
      },
    },
    {
      name: {
        common: 'Denmark',
        official: 'Kingdom of Denmark',
        nativeName: {
          dan: {
            official: 'Kongeriget Danmark',
            common: 'Danmark',
          },
        },
      },
      tld: ['.dk'],
      cca2: 'DK',
      ccn3: '208',
      cca3: 'DNK',
      cioc: 'DEN',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        DKK: {
          name: 'Danish krone',
          symbol: 'kr',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['5'],
      },
      capital: ['Copenhagen'],
      altSpellings: [
        'DK',
        'Danmark',
        'Kingdom of Denmark',
        'Kongeriget Danmark',
      ],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        dan: 'Danish',
      },
      translations: {
        ara: {
          official: 'مملكة الدنمارك',
          common: 'الدنمارك',
        },
        bre: {
          official: 'Rouantelezh Danmark',
          common: 'Danmark',
        },
        ces: {
          official: 'Dánské království',
          common: 'Dánsko',
        },
        cym: {
          official: 'Teyrnas Denmarc',
          common: 'Denmarc',
        },
        deu: {
          official: 'Königreich Dänemark',
          common: 'Dänemark',
        },
        est: {
          official: 'Taani Kuningriik',
          common: 'Taani',
        },
        fin: {
          official: 'Tanskan kuningaskunta',
          common: 'Tanska',
        },
        fra: {
          official: 'Royaume du Danemark',
          common: 'Danemark',
        },
        hrv: {
          official: 'Kraljevina Danska',
          common: 'Danska',
        },
        hun: {
          official: 'Dán Királyság',
          common: 'Dánia',
        },
        ita: {
          official: 'Regno di Danimarca',
          common: 'Danimarca',
        },
        jpn: {
          official: 'デンマーク王国',
          common: 'デンマーク',
        },
        kor: {
          official: '덴마크 왕국',
          common: '덴마크',
        },
        nld: {
          official: 'Koninkrijk Denemarken',
          common: 'Denemarken',
        },
        per: {
          official: 'پادشاهی دانمارک',
          common: 'دانمارک',
        },
        pol: {
          official: 'Królestwo Danii',
          common: 'Dania',
        },
        por: {
          official: 'Reino da Dinamarca',
          common: 'Dinamarca',
        },
        rus: {
          official: 'Королевство Дания',
          common: 'Дания',
        },
        slk: {
          official: 'Dánske kráľovstvo',
          common: 'Dánsko',
        },
        spa: {
          official: 'Reino de Dinamarca',
          common: 'Dinamarca',
        },
        srp: {
          official: 'Краљевина Данска',
          common: 'Данска',
        },
        swe: {
          official: 'Konungariket Danmark',
          common: 'Danmark',
        },
        tur: {
          official: 'Danimarka Krallığı',
          common: 'Danimarka',
        },
        urd: {
          official: 'مملکتِ ڈنمارک',
          common: 'ڈنمارک',
        },
        zho: {
          official: '丹麦王国',
          common: '丹麦',
        },
      },
      latlng: [56, 10],
      landlocked: false,
      borders: ['DEU'],
      area: 43094,
      demonyms: {
        eng: {
          f: 'Danish',
          m: 'Danish',
        },
        fra: {
          f: 'Danoise',
          m: 'Danois',
        },
      },
      flag: '🇩🇰',
      maps: {
        googleMaps: 'https://goo.gl/maps/UddGPN7hAyrtpFiT6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/50046',
      },
      population: 5831404,
      gini: {
        '2018': 28.2,
      },
      fifa: 'DEN',
      car: {
        signs: ['DK'],
        side: 'right',
      },
      timezones: ['UTC-04:00', 'UTC-03:00', 'UTC-01:00', 'UTC', 'UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/dk.png',
        svg: 'https://flagcdn.com/dk.svg',
        alt: 'The flag of Denmark has a red field with a large white cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/dk.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/dk.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [55.67, 12.58],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Luxembourg',
        official: 'Grand Duchy of Luxembourg',
        nativeName: {
          deu: {
            official: 'Großherzogtum Luxemburg',
            common: 'Luxemburg',
          },
          fra: {
            official: 'Grand-Duché de Luxembourg',
            common: 'Luxembourg',
          },
          ltz: {
            official: 'Groussherzogtum Lëtzebuerg',
            common: 'Lëtzebuerg',
          },
        },
      },
      tld: ['.lu'],
      cca2: 'LU',
      ccn3: '442',
      cca3: 'LUX',
      cioc: 'LUX',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['52'],
      },
      capital: ['Luxembourg'],
      altSpellings: [
        'LU',
        'Grand Duchy of Luxembourg',
        'Grand-Duché de Luxembourg',
        'Großherzogtum Luxemburg',
        'Groussherzogtum Lëtzebuerg',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: {
        deu: 'German',
        fra: 'French',
        ltz: 'Luxembourgish',
      },
      translations: {
        ara: {
          official: 'دوقية لوكسمبورغ',
          common: 'لوكسمبورغ',
        },
        bre: {
          official: 'Dugelezh Veur Luksembourg',
          common: 'Luksembourg',
        },
        ces: {
          official: 'Lucemburské velkovévodství',
          common: 'Lucembursko',
        },
        cym: {
          official: 'Grand Duchy of Luxembourg',
          common: 'Luxembourg',
        },
        deu: {
          official: 'Großherzogtum Luxemburg,',
          common: 'Luxemburg',
        },
        est: {
          official: 'Luksemburgi Suurhertsogiriik',
          common: 'Luksemburg',
        },
        fin: {
          official: 'Luxemburgin suurherttuakunta',
          common: 'Luxemburg',
        },
        fra: {
          official: 'Grand-Duché de Luxembourg',
          common: 'Luxembourg',
        },
        hrv: {
          official: 'Veliko Vojvodstvo Luksemburg',
          common: 'Luksemburg',
        },
        hun: {
          official: 'Luxemburgi Nagyhercegség',
          common: 'Luxemburg',
        },
        ita: {
          official: 'Granducato di Lussemburgo',
          common: 'Lussemburgo',
        },
        jpn: {
          official: 'ルクセンブルク大公国',
          common: 'ルクセンブルク',
        },
        kor: {
          official: '룩셈부르크 대공국',
          common: '룩셈부르크',
        },
        nld: {
          official: 'Groothertogdom Luxemburg',
          common: 'Luxemburg',
        },
        per: {
          official: 'دوک‌نشین لوکزامبورگ',
          common: 'لوکزامبورگ',
        },
        pol: {
          official: 'Wielkie Księstwo Luksemburga',
          common: 'Luksemburg',
        },
        por: {
          official: 'Grão-Ducado do Luxemburgo',
          common: 'Luxemburgo',
        },
        rus: {
          official: 'Великое Герцогство Люксембург',
          common: 'Люксембург',
        },
        slk: {
          official: 'Luxemburské veľkovojvodstvo',
          common: 'Luxembursko',
        },
        spa: {
          official: 'Gran Ducado de Luxemburgo',
          common: 'Luxemburgo',
        },
        srp: {
          official: 'Велико Војводство Луксембург',
          common: 'Луксембург',
        },
        swe: {
          official: 'Storhertigdömet Luxemburg',
          common: 'Luxemburg',
        },
        tur: {
          official: 'Lüksemburg Büyük Dükalığı',
          common: 'Lüksemburg',
        },
        urd: {
          official: 'دوقیہ کبیرلکسمبرگ',
          common: 'لکسمبرگ',
        },
        zho: {
          official: '卢森堡大公国',
          common: '卢森堡',
        },
      },
      latlng: [49.75, 6.16666666],
      landlocked: true,
      borders: ['BEL', 'FRA', 'DEU'],
      area: 2586,
      demonyms: {
        eng: {
          f: 'Luxembourger',
          m: 'Luxembourger',
        },
        fra: {
          f: 'Luxembourgeoise',
          m: 'Luxembourgeois',
        },
      },
      flag: '🇱🇺',
      maps: {
        googleMaps: 'https://goo.gl/maps/L6b2AgndgHprt2Ko9',
        openStreetMaps:
          'https://www.openstreetmap.org/relation/2171347#map=10/49.8167/6.1335',
      },
      population: 632275,
      gini: {
        '2018': 35.4,
      },
      fifa: 'LUX',
      car: {
        signs: ['L'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/lu.png',
        svg: 'https://flagcdn.com/lu.svg',
        alt: 'The flag of Luxembourg is composed of three equal horizontal bands of red, white and light blue.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/lu.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/lu.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [49.6, 6.12],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Faroe Islands',
        official: 'Faroe Islands',
        nativeName: {
          dan: {
            official: 'Færøerne',
            common: 'Færøerne',
          },
          fao: {
            official: 'Føroyar',
            common: 'Føroyar',
          },
        },
      },
      tld: ['.fo'],
      cca2: 'FO',
      ccn3: '234',
      cca3: 'FRO',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        DKK: {
          name: 'Danish krone',
          symbol: 'kr',
        },
        FOK: {
          name: 'Faroese króna',
          symbol: 'kr',
        },
      },
      idd: {
        root: '+2',
        suffixes: ['98'],
      },
      capital: ['Tórshavn'],
      altSpellings: ['FO', 'Føroyar', 'Færøerne'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        dan: 'Danish',
        fao: 'Faroese',
      },
      translations: {
        ara: {
          official: 'جزر فارو',
          common: 'جزر فارو',
        },
        bre: {
          official: 'Inizi Faero',
          common: 'Inizi Faero',
        },
        ces: {
          official: 'Faerské ostrovy',
          common: 'Faerské ostrovy',
        },
        cym: {
          official: 'Faroe Islands',
          common: 'Faroe Islands',
        },
        deu: {
          official: 'Färöer',
          common: 'Färöer-Inseln',
        },
        est: {
          official: 'Fääri saared',
          common: 'Fääri saared',
        },
        fin: {
          official: 'Färsaaret',
          common: 'Färsaaret',
        },
        fra: {
          official: 'Îles Féroé',
          common: 'Îles Féroé',
        },
        hrv: {
          official: 'Farski Otoci',
          common: 'Farski Otoci',
        },
        hun: {
          official: 'Feröer',
          common: 'Feröer',
        },
        ita: {
          official: 'Isole Faroe',
          common: 'Isole Far Oer',
        },
        jpn: {
          official: 'フェロー諸島',
          common: 'フェロー諸島',
        },
        kor: {
          official: '페로 제도',
          common: '페로 제도',
        },
        nld: {
          official: 'Faeröer',
          common: 'Faeröer',
        },
        per: {
          official: 'جزایر فاروئه',
          common: 'جزایر فاروئه',
        },
        pol: {
          official: 'Wyspy Owcze',
          common: 'Wyspy Owcze',
        },
        por: {
          official: 'Ilhas Faroe',
          common: 'Ilhas Faroé',
        },
        rus: {
          official: 'Фарерские острова',
          common: 'Фарерские острова',
        },
        slk: {
          official: 'Faerské ostrovy',
          common: 'Faerské ostrovy',
        },
        spa: {
          official: 'Islas Feroe',
          common: 'Islas Faroe',
        },
        srp: {
          official: 'Фарска острва',
          common: 'Фарска острва',
        },
        swe: {
          official: 'Färöarna',
          common: 'Färöarna',
        },
        tur: {
          official: 'Faroe Adaları',
          common: 'Faroe Adaları',
        },
        urd: {
          official: 'جزائر فارو',
          common: 'جزائر فارو',
        },
        zho: {
          official: '法罗群岛',
          common: '法罗群岛',
        },
      },
      latlng: [62, -7],
      landlocked: false,
      area: 1393,
      demonyms: {
        eng: {
          f: 'Faroese',
          m: 'Faroese',
        },
        fra: {
          f: 'Féroïenne',
          m: 'Féroïen',
        },
      },
      flag: '🇫🇴',
      maps: {
        googleMaps: 'https://goo.gl/maps/6sTru4SmHdEVcNkM6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/52939',
      },
      population: 48865,
      fifa: 'FRO',
      car: {
        signs: ['FO'],
        side: 'right',
      },
      timezones: ['UTC+00:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/fo.png',
        svg: 'https://flagcdn.com/fo.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/fo.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/fo.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [62.01, -6.77],
      },
      postalCode: {
        format: 'FO-###',
        regex: '^(?:FO)*(\\d{3})$',
      },
      cioc: '',
      borders: [],
      gini: {},
    },
    {
      name: {
        common: 'Slovenia',
        official: 'Republic of Slovenia',
        nativeName: {
          slv: {
            official: 'Republika Slovenija',
            common: 'Slovenija',
          },
        },
      },
      tld: ['.si'],
      cca2: 'SI',
      ccn3: '705',
      cca3: 'SVN',
      cioc: 'SLO',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['86'],
      },
      capital: ['Ljubljana'],
      altSpellings: ['SI', 'Republic of Slovenia', 'Republika Slovenija'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        slv: 'Slovene',
      },
      translations: {
        ara: {
          official: 'جمهورية سلوفينيا',
          common: 'سلوفينيا',
        },
        bre: {
          official: 'Republik Slovenia',
          common: 'Slovenia',
        },
        ces: {
          official: 'Slovinská republika',
          common: 'Slovinsko',
        },
        cym: {
          official: 'Republic of Slovenia',
          common: 'Slovenia',
        },
        deu: {
          official: 'Republik Slowenien',
          common: 'Slowenien',
        },
        est: {
          official: 'Sloveenia Vabariik',
          common: 'Sloveenia',
        },
        fin: {
          official: 'Slovenian tasavalta',
          common: 'Slovenia',
        },
        fra: {
          official: 'République de Slovénie',
          common: 'Slovénie',
        },
        hrv: {
          official: 'Republika Slovenija',
          common: 'Slovenija',
        },
        hun: {
          official: 'Szlovén Köztársaság',
          common: 'Szlovénia',
        },
        ita: {
          official: 'Repubblica di Slovenia',
          common: 'Slovenia',
        },
        jpn: {
          official: 'スロベニア共和国',
          common: 'スロベニア',
        },
        kor: {
          official: '슬로베니아 공화국',
          common: '슬로베니아',
        },
        nld: {
          official: 'Republiek Slovenië',
          common: 'Slovenië',
        },
        per: {
          official: 'جمهوری اسلوونی',
          common: 'اسلوونی',
        },
        pol: {
          official: 'Republika Słowenii',
          common: 'Słowenia',
        },
        por: {
          official: 'República da Eslovénia',
          common: 'Eslovénia',
        },
        rus: {
          official: 'Республика Словения',
          common: 'Словения',
        },
        slk: {
          official: 'Slovinská republika',
          common: 'Slovinsko',
        },
        spa: {
          official: 'República de Eslovenia',
          common: 'Eslovenia',
        },
        srp: {
          official: 'Република Словенија',
          common: 'Словенија',
        },
        swe: {
          official: 'Republiken Slovenien',
          common: 'Slovenien',
        },
        tur: {
          official: 'Slovenya Cumhuriyeti',
          common: 'Slovenya',
        },
        urd: {
          official: 'جمہوریہ سلووینیا',
          common: 'سلووینیا',
        },
        zho: {
          official: '斯洛文尼亚共和国',
          common: '斯洛文尼亚',
        },
      },
      latlng: [46.11666666, 14.81666666],
      landlocked: false,
      borders: ['AUT', 'HRV', 'ITA', 'HUN'],
      area: 20273,
      demonyms: {
        eng: {
          f: 'Slovene',
          m: 'Slovene',
        },
        fra: {
          f: 'Slovène',
          m: 'Slovène',
        },
      },
      flag: '🇸🇮',
      maps: {
        googleMaps: 'https://goo.gl/maps/7zgFmswcCJh5L5D49',
        openStreetMaps: 'https://www.openstreetmap.org/relation/218657',
      },
      population: 2100126,
      gini: {
        '2018': 24.6,
      },
      fifa: 'SVN',
      car: {
        signs: ['SLO'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/si.png',
        svg: 'https://flagcdn.com/si.svg',
        alt: 'The flag of Slovenia is composed of three equal horizontal bands of white, blue and red. The national coat of arms is situated in the upper hoist side of the field centered on the boundary between the white and blue bands.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/si.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/si.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [46.05, 14.52],
      },
      postalCode: {
        format: 'SI- ####',
        regex: '^(?:SI)*(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Ukraine',
        official: 'Ukraine',
        nativeName: {
          ukr: {
            official: 'Україна',
            common: 'Україна',
          },
        },
      },
      tld: ['.ua', '.укр'],
      cca2: 'UA',
      ccn3: '804',
      cca3: 'UKR',
      cioc: 'UKR',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        UAH: {
          name: 'Ukrainian hryvnia',
          symbol: '₴',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['80'],
      },
      capital: ['Kyiv'],
      altSpellings: ['UA', 'Ukrayina'],
      region: 'Europe',
      subregion: 'Eastern Europe',
      languages: {
        ukr: 'Ukrainian',
      },
      translations: {
        ara: {
          official: 'أوكرانيا',
          common: 'أوكرانيا',
        },
        bre: {
          official: 'Ukraina',
          common: 'Ukraina',
        },
        ces: {
          official: 'Ukrajina',
          common: 'Ukrajina',
        },
        cym: {
          official: 'Ukraine',
          common: 'Ukraine',
        },
        deu: {
          official: 'Ukraine',
          common: 'Ukraine',
        },
        est: {
          official: 'Ukraina',
          common: 'Ukraina',
        },
        fin: {
          official: 'Ukraina',
          common: 'Ukraina',
        },
        fra: {
          official: 'Ukraine',
          common: 'Ukraine',
        },
        hrv: {
          official: 'Ukrajina',
          common: 'Ukrajina',
        },
        hun: {
          official: 'Ukrajna',
          common: 'Ukrajna',
        },
        ita: {
          official: 'Ucraina',
          common: 'Ucraina',
        },
        jpn: {
          official: 'ウクライナ',
          common: 'ウクライナ',
        },
        kor: {
          official: '우크라이나',
          common: '우크라이나',
        },
        nld: {
          official: 'Oekraïne',
          common: 'Oekraïne',
        },
        per: {
          official: 'اوکراین',
          common: 'اوکراین',
        },
        pol: {
          official: 'Ukraina',
          common: 'Ukraina',
        },
        por: {
          official: 'Ucrânia',
          common: 'Ucrânia',
        },
        rus: {
          official: 'Украина',
          common: 'Украина',
        },
        slk: {
          official: 'Ukrajina',
          common: 'Ukrajina',
        },
        spa: {
          official: 'Ucrania',
          common: 'Ucrania',
        },
        srp: {
          official: 'Украјина',
          common: 'Украјина',
        },
        swe: {
          official: 'Ukraina',
          common: 'Ukraina',
        },
        tur: {
          official: 'Ukrayna',
          common: 'Ukrayna',
        },
        urd: {
          official: 'یوکرین',
          common: 'یوکرین',
        },
        zho: {
          official: '乌克兰',
          common: '乌克兰',
        },
      },
      latlng: [49, 32],
      landlocked: false,
      borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK'],
      area: 603500,
      demonyms: {
        eng: {
          f: 'Ukrainian',
          m: 'Ukrainian',
        },
        fra: {
          f: 'Ukrainienne',
          m: 'Ukrainien',
        },
      },
      flag: '🇺🇦',
      maps: {
        googleMaps: 'https://goo.gl/maps/DvgJMiPJ7aozKFZv7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/60199',
      },
      population: 44134693,
      gini: {
        '2019': 26.6,
      },
      fifa: 'UKR',
      car: {
        signs: ['UA'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ua.png',
        svg: 'https://flagcdn.com/ua.svg',
        alt: 'The flag of Ukraine is composed of two equal horizontal bands of blue and yellow.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ua.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ua.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [50.43, 30.52],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Finland',
        official: 'Republic of Finland',
        nativeName: {
          fin: {
            official: 'Suomen tasavalta',
            common: 'Suomi',
          },
          swe: {
            official: 'Republiken Finland',
            common: 'Finland',
          },
        },
      },
      tld: ['.fi'],
      cca2: 'FI',
      ccn3: '246',
      cca3: 'FIN',
      cioc: 'FIN',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['58'],
      },
      capital: ['Helsinki'],
      altSpellings: [
        'FI',
        'Suomi',
        'Republic of Finland',
        'Suomen tasavalta',
        'Republiken Finland',
      ],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        fin: 'Finnish',
        swe: 'Swedish',
      },
      translations: {
        ara: {
          official: 'جمهورية فنلندا',
          common: 'فنلندا',
        },
        bre: {
          official: 'Republik Finland',
          common: 'Finland',
        },
        ces: {
          official: 'Finská republika',
          common: 'Finsko',
        },
        cym: {
          official: 'Republic of Finland',
          common: 'Finland',
        },
        deu: {
          official: 'Republik Finnland',
          common: 'Finnland',
        },
        est: {
          official: 'Soome Vabariik',
          common: 'Soome',
        },
        fin: {
          official: 'Suomen tasavalta',
          common: 'Suomi',
        },
        fra: {
          official: 'République de Finlande',
          common: 'Finlande',
        },
        hrv: {
          official: 'Republika Finska',
          common: 'Finska',
        },
        hun: {
          official: 'Finn Köztársaság',
          common: 'Finnország',
        },
        ita: {
          official: 'Repubblica di Finlandia',
          common: 'Finlandia',
        },
        jpn: {
          official: 'フィンランド共和国',
          common: 'フィンランド',
        },
        kor: {
          official: '핀란드 공화국',
          common: '핀란드',
        },
        nld: {
          official: 'Republiek Finland',
          common: 'Finland',
        },
        per: {
          official: 'جمهوری فنلاند',
          common: 'فنلاند',
        },
        pol: {
          official: 'Republika Finlandii',
          common: 'Finlandia',
        },
        por: {
          official: 'República da Finlândia',
          common: 'Finlândia',
        },
        rus: {
          official: 'Финляндская Республика',
          common: 'Финляндия',
        },
        slk: {
          official: 'Fínska republika',
          common: 'Fínsko',
        },
        spa: {
          official: 'República de Finlandia',
          common: 'Finlandia',
        },
        srp: {
          official: 'Република Финска',
          common: 'Финска',
        },
        swe: {
          official: 'Republiken Finland',
          common: 'Finland',
        },
        tur: {
          official: 'Finlandiya Cumhuriyeti',
          common: 'Finlandiya',
        },
        urd: {
          official: 'جمہوریہ فن لینڈ',
          common: 'فن لینڈ',
        },
        zho: {
          official: '芬兰共和国',
          common: '芬兰',
        },
      },
      latlng: [64, 26],
      landlocked: false,
      borders: ['NOR', 'SWE', 'RUS'],
      area: 338424,
      demonyms: {
        eng: {
          f: 'Finnish',
          m: 'Finnish',
        },
        fra: {
          f: 'Finlandaise',
          m: 'Finlandais',
        },
      },
      flag: '🇫🇮',
      maps: {
        googleMaps: 'https://goo.gl/maps/HjgWDCNKRAYHrkMn8',
        openStreetMaps: 'openstreetmap.org/relation/54224',
      },
      population: 5530719,
      gini: {
        '2018': 27.3,
      },
      fifa: 'FIN',
      car: {
        signs: ['FIN'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/fi.png',
        svg: 'https://flagcdn.com/fi.svg',
        alt: 'The flag of Finland has a white field with a large blue cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/fi.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/fi.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [60.17, 24.93],
      },
      postalCode: {
        format: '#####',
        regex: '^(?:FI)*(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Austria',
        official: 'Republic of Austria',
        nativeName: {
          bar: {
            official: 'Republik Österreich',
            common: 'Österreich',
          },
        },
      },
      tld: ['.at'],
      cca2: 'AT',
      ccn3: '040',
      cca3: 'AUT',
      cioc: 'AUT',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['3'],
      },
      capital: ['Vienna'],
      altSpellings: ['AT', 'Osterreich', 'Oesterreich'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        de: 'German',
      },
      translations: {
        ara: {
          official: 'جمهورية النمسا',
          common: 'النمسا',
        },
        bre: {
          official: 'Republik Aostria',
          common: 'Aostria',
        },
        ces: {
          official: 'Rakouská republika',
          common: 'Rakousko',
        },
        cym: {
          official: 'Gweriniaeth Awstria',
          common: 'Awstria',
        },
        deu: {
          official: 'Republik Österreich',
          common: 'Österreich',
        },
        est: {
          official: 'Austria Vabariik',
          common: 'Austria',
        },
        fin: {
          official: 'Itävallan tasavalta',
          common: 'Itävalta',
        },
        fra: {
          official: "République d'Autriche",
          common: 'Autriche',
        },
        hrv: {
          official: 'Republika Austrija',
          common: 'Austrija',
        },
        hun: {
          official: 'Ausztria',
          common: 'Ausztria',
        },
        ita: {
          official: "Repubblica d'Austria",
          common: 'Austria',
        },
        jpn: {
          official: 'オーストリア共和国',
          common: 'オーストリア',
        },
        kor: {
          official: '오스트리아 공화국',
          common: '오스트리아',
        },
        nld: {
          official: 'Republiek Oostenrijk',
          common: 'Oostenrijk',
        },
        per: {
          official: 'جمهوری اتریش',
          common: 'اتریش',
        },
        pol: {
          official: 'Republika Austrii',
          common: 'Austria',
        },
        por: {
          official: 'República da Áustria',
          common: 'Áustria',
        },
        rus: {
          official: 'Австрийская Республика',
          common: 'Австрия',
        },
        slk: {
          official: 'Rakúska republika',
          common: 'Rakúsko',
        },
        spa: {
          official: 'República de Austria',
          common: 'Austria',
        },
        srp: {
          official: 'Република Аустрија',
          common: 'Аустрија',
        },
        swe: {
          official: 'Republiken Österrike',
          common: 'Österrike',
        },
        tur: {
          official: 'Avusturya Cumhuriyeti',
          common: 'Avusturya',
        },
        urd: {
          official: 'جمہوریہ آسٹریا',
          common: 'آسٹریا',
        },
        zho: {
          official: '奥地利共和国',
          common: '奥地利',
        },
      },
      latlng: [47.33333333, 13.33333333],
      landlocked: true,
      borders: ['CZE', 'DEU', 'HUN', 'ITA', 'LIE', 'SVK', 'SVN', 'CHE'],
      area: 83871,
      demonyms: {
        eng: {
          f: 'Austrian',
          m: 'Austrian',
        },
        fra: {
          f: 'Autrichienne',
          m: 'Autrichien',
        },
      },
      flag: '🇦🇹',
      maps: {
        googleMaps: 'https://goo.gl/maps/pCWpWQhznHyRzQcu9',
        openStreetMaps: 'https://www.openstreetmap.org/relation/16239',
      },
      population: 8917205,
      gini: {
        '2018': 30.8,
      },
      fifa: 'AUT',
      car: {
        signs: ['A'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/at.png',
        svg: 'https://flagcdn.com/at.svg',
        alt: 'The flag of Austria is composed of three equal horizontal bands of red, white and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/at.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/at.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [48.2, 16.37],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Bosnia and Herzegovina',
        official: 'Bosnia and Herzegovina',
        nativeName: {
          bos: {
            official: 'Bosna i Hercegovina',
            common: 'Bosna i Hercegovina',
          },
          hrv: {
            official: 'Bosna i Hercegovina',
            common: 'Bosna i Hercegovina',
          },
          srp: {
            official: 'Босна и Херцеговина',
            common: 'Босна и Херцеговина',
          },
        },
      },
      tld: ['.ba'],
      cca2: 'BA',
      ccn3: '070',
      cca3: 'BIH',
      cioc: 'BIH',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        BAM: {
          name: 'Bosnia and Herzegovina convertible mark',
          symbol: '',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['87'],
      },
      capital: ['Sarajevo'],
      altSpellings: ['BA', 'Bosnia-Herzegovina', 'Босна и Херцеговина'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        bos: 'Bosnian',
        hrv: 'Croatian',
        srp: 'Serbian',
      },
      translations: {
        ara: {
          official: 'جمهورية البوسنة والهرسك',
          common: 'البوسنة والهرسك',
        },
        bre: {
          official: 'Bosnia-ha-Herzegovina',
          common: 'Bosnia-ha-Herzegovina',
        },
        ces: {
          official: 'Bosna a Hercegovina',
          common: 'Bosna a Hercegovina',
        },
        cym: {
          official: 'Bosnia a Hercegovina',
          common: 'Bosnia a Hercegovina',
        },
        deu: {
          official: 'Bosnien und Herzegowina',
          common: 'Bosnien und Herzegowina',
        },
        est: {
          official: 'Bosnia ja Hertsegoviina',
          common: 'Bosnia ja Hertsegoviina',
        },
        fin: {
          official: 'Bosnia ja Hertsegovina',
          common: 'Bosnia ja Hertsegovina',
        },
        fra: {
          official: 'Bosnie-et-Herzégovine',
          common: 'Bosnie-Herzégovine',
        },
        hrv: {
          official: 'Bosna i Hercegovina',
          common: 'Bosna i Hercegovina',
        },
        hun: {
          official: 'Bosznia-Hercegovina',
          common: 'Bosznia-Hercegovina',
        },
        ita: {
          official: 'Bosnia-Erzegovina',
          common: 'Bosnia ed Erzegovina',
        },
        jpn: {
          official: 'ボスニア·ヘルツェゴビナ',
          common: 'ボスニア・ヘルツェゴビナ',
        },
        kor: {
          official: '보스니아 헤르체고비나',
          common: '보스니아 헤르체고비나',
        },
        nld: {
          official: 'Bosnië-Herzegovina',
          common: 'Bosnië en Herzegovina',
        },
        per: {
          official: 'بوسنی و هرزگوین',
          common: 'بوسنی و هرزگوین',
        },
        pol: {
          official: 'Bośnia i Hercegowina',
          common: 'Bośnia i Hercegowina',
        },
        por: {
          official: 'Bósnia e Herzegovina',
          common: 'Bósnia e Herzegovina',
        },
        rus: {
          official: 'Босния и Герцеговина',
          common: 'Босния и Герцеговина',
        },
        slk: {
          official: 'Republika Bosny a Hercegoviny',
          common: 'Bosna a Hercegovina',
        },
        spa: {
          official: 'Bosnia y Herzegovina',
          common: 'Bosnia y Herzegovina',
        },
        srp: {
          official: 'Босна и Херцеговина',
          common: 'Босна и Херцеговина',
        },
        swe: {
          official: 'Bosnien och Hercegovina',
          common: 'Bosnien och Hercegovina',
        },
        tur: {
          official: 'Bosna ve Hersek',
          common: 'Bosna-Hersek',
        },
        urd: {
          official: 'بوسنیا و ہرزیگووینا',
          common: 'بوسنیا و ہرزیگووینا',
        },
        zho: {
          official: '波斯尼亚和黑塞哥维那',
          common: '波斯尼亚和黑塞哥维那',
        },
      },
      latlng: [44, 18],
      landlocked: false,
      borders: ['HRV', 'MNE', 'SRB'],
      area: 51209,
      demonyms: {
        eng: {
          f: 'Bosnian, Herzegovinian',
          m: 'Bosnian, Herzegovinian',
        },
        fra: {
          f: 'Bosnienne',
          m: 'Bosnien',
        },
      },
      flag: '🇧🇦',
      maps: {
        googleMaps: 'https://www.google.com/maps/place/Bosnia+and+Herzegovina',
        openStreetMaps: 'https://www.openstreetmap.org/relation/2528142',
      },
      population: 3280815,
      gini: {
        '2011': 33,
      },
      fifa: 'BIH',
      car: {
        signs: ['BIH'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ba.png',
        svg: 'https://flagcdn.com/ba.svg',
        alt: 'The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ba.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ba.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [43.87, 18.42],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Greece',
        official: 'Hellenic Republic',
        nativeName: {
          ell: {
            official: 'Ελληνική Δημοκρατία',
            common: 'Ελλάδα',
          },
        },
      },
      tld: ['.gr'],
      cca2: 'GR',
      ccn3: '300',
      cca3: 'GRC',
      cioc: 'GRE',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['0'],
      },
      capital: ['Athens'],
      altSpellings: [
        'GR',
        'Elláda',
        'Hellenic Republic',
        'Ελληνική Δημοκρατία',
      ],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        ell: 'Greek',
      },
      translations: {
        ara: {
          official: 'الجمهورية الهيلينية',
          common: 'اليونان',
        },
        bre: {
          official: 'Republik Hellenek',
          common: 'Gres',
        },
        ces: {
          official: 'Řecká republika',
          common: 'Řecko',
        },
        cym: {
          official: 'Hellenic Republic',
          common: 'Greece',
        },
        deu: {
          official: 'Hellenische Republik',
          common: 'Griechenland',
        },
        est: {
          official: 'Kreeka Vabariik',
          common: 'Kreeka',
        },
        fin: {
          official: 'Helleenien tasavalta',
          common: 'Kreikka',
        },
        fra: {
          official: 'République hellénique',
          common: 'Grèce',
        },
        hrv: {
          official: 'Helenska Republika',
          common: 'Grčka',
        },
        hun: {
          official: 'Görög Köztársaság',
          common: 'Görögország',
        },
        ita: {
          official: 'Repubblica ellenica',
          common: 'Grecia',
        },
        jpn: {
          official: 'ギリシャ共和国',
          common: 'ギリシャ',
        },
        kor: {
          official: '그리스 공화국',
          common: '그리스',
        },
        nld: {
          official: 'Helleense Republiek',
          common: 'Griekenland',
        },
        per: {
          official: 'جمهوری یونان',
          common: 'یونان',
        },
        pol: {
          official: 'Republika Grecka',
          common: 'Grecja',
        },
        por: {
          official: 'República Helénica',
          common: 'Grécia',
        },
        rus: {
          official: 'Греческая Республика',
          common: 'Греция',
        },
        slk: {
          official: 'Grécka republika',
          common: 'Greécko',
        },
        spa: {
          official: 'República Helénica',
          common: 'Grecia',
        },
        srp: {
          official: 'Хеленска Република',
          common: 'Грчка',
        },
        swe: {
          official: 'Republiken Grekland',
          common: 'Grekland',
        },
        tur: {
          official: 'Helen Cumhuriyeti',
          common: 'Yunanistan',
        },
        urd: {
          official: 'جمہوریہ ہیلینیہ',
          common: 'یونان',
        },
        zho: {
          official: '希腊共和国',
          common: '希腊',
        },
      },
      latlng: [39, 22],
      landlocked: false,
      borders: ['ALB', 'BGR', 'TUR', 'MKD'],
      area: 131990,
      demonyms: {
        eng: {
          f: 'Greek',
          m: 'Greek',
        },
        fra: {
          f: 'Grecque',
          m: 'Grec',
        },
      },
      flag: '🇬🇷',
      maps: {
        googleMaps: 'https://goo.gl/maps/LHGcAvuRyD2iKECC6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/192307',
      },
      population: 10715549,
      gini: {
        '2018': 32.9,
      },
      fifa: 'GRE',
      car: {
        signs: ['GR'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/gr.png',
        svg: 'https://flagcdn.com/gr.svg',
        alt: 'The flag of Greece is composed of nine equal horizontal bands of blue alternating with white. A blue square bearing a white cross is superimposed in the canton.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/gr.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/gr.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [37.98, 23.73],
      },
      postalCode: {
        format: '### ##',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Guernsey',
        official: 'Bailiwick of Guernsey',
        nativeName: {
          eng: {
            official: 'Bailiwick of Guernsey',
            common: 'Guernsey',
          },
          fra: {
            official: 'Bailliage de Guernesey',
            common: 'Guernesey',
          },
          nfr: {
            official: 'Dgèrnésiais',
            common: 'Dgèrnésiais',
          },
        },
      },
      tld: ['.gg'],
      cca2: 'GG',
      ccn3: '831',
      cca3: 'GGY',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        GBP: {
          name: 'British pound',
          symbol: '£',
        },
        GGP: {
          name: 'Guernsey pound',
          symbol: '£',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['4'],
      },
      capital: ['St. Peter Port'],
      altSpellings: ['GG', 'Bailiwick of Guernsey', 'Bailliage de Guernesey'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        eng: 'English',
        fra: 'French',
        nfr: 'Guernésiais',
      },
      translations: {
        ara: {
          official: 'غيرنزي',
          common: 'غيرنزي',
        },
        bre: {
          official: 'Gwernenez',
          common: 'Gwernenez',
        },
        ces: {
          official: 'Rychtářství Guernsey',
          common: 'Guernsey',
        },
        cym: {
          official: 'Bailiwick of Guernsey',
          common: 'Guernsey',
        },
        deu: {
          official: 'Vogtei Guernsey',
          common: 'Guernsey',
        },
        est: {
          official: 'Guernsey foogtkond',
          common: 'Guernsey',
        },
        fin: {
          official: 'Guernsey',
          common: 'Guernsey',
        },
        fra: {
          official: 'Bailliage de Guernesey',
          common: 'Guernesey',
        },
        hrv: {
          official: 'Struka Guernsey',
          common: 'Guernsey',
        },
        hun: {
          official: 'Guernsey',
          common: 'Guernsey',
        },
        ita: {
          official: 'Baliato di Guernsey',
          common: 'Guernsey',
        },
        jpn: {
          official: 'ガーンジーの得意分野',
          common: 'ガーンジー',
        },
        kor: {
          official: '건지 섬',
          common: '건지 섬',
        },
        nld: {
          official: 'Baljuwschap Guernsey',
          common: 'Guernsey',
        },
        per: {
          official: 'گرنزی',
          common: 'گرنزی',
        },
        pol: {
          official: 'Baliwat Guernsey',
          common: 'Guernsey',
        },
        por: {
          official: 'Bailiado de Guernsey',
          common: 'Guernsey',
        },
        rus: {
          official: 'Коронное владение Гернси',
          common: 'Гернси',
        },
        slk: {
          official: 'Guernsey',
          common: 'Guernsey',
        },
        spa: {
          official: 'Bailía de Guernsey',
          common: 'Guernsey',
        },
        srp: {
          official: 'Бејливик Гернзи',
          common: 'Гернзи',
        },
        swe: {
          official: 'Guernsey',
          common: 'Guernsey',
        },
        tur: {
          official: 'Guernsey Muhafızlığı',
          common: 'Guernsey',
        },
        urd: {
          official: 'گرنزی رودبار',
          common: 'گرنزی',
        },
        zho: {
          official: '根西岛',
          common: '根西岛',
        },
      },
      latlng: [49.46666666, -2.58333333],
      landlocked: false,
      area: 78,
      demonyms: {
        eng: {
          f: 'Channel Islander',
          m: 'Channel Islander',
        },
        fra: {
          f: 'Guernesiaise',
          m: 'Guernesiais',
        },
      },
      flag: '🇬🇬',
      maps: {
        googleMaps: 'https://goo.gl/maps/6kXnQU5QvEZMD9VB7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/270009',
      },
      population: 62999,
      car: {
        signs: ['GBG'],
        side: 'left',
      },
      timezones: ['UTC+00:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/gg.png',
        svg: 'https://flagcdn.com/gg.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/gg.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/gg.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [49.45, -2.54],
      },
      postalCode: {
        format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
        regex:
          '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
      },
      cioc: '',
      borders: [],
      gini: {},
      fifa: '',
    },
    {
      name: {
        common: 'Estonia',
        official: 'Republic of Estonia',
        nativeName: {
          est: {
            official: 'Eesti Vabariik',
            common: 'Eesti',
          },
        },
      },
      tld: ['.ee'],
      cca2: 'EE',
      ccn3: '233',
      cca3: 'EST',
      cioc: 'EST',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['72'],
      },
      capital: ['Tallinn'],
      altSpellings: ['EE', 'Eesti', 'Republic of Estonia', 'Eesti Vabariik'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        est: 'Estonian',
      },
      translations: {
        ara: {
          official: 'جمهورية إستونيا',
          common: 'إستونيا',
        },
        bre: {
          official: 'Republik Estonia',
          common: 'Estonia',
        },
        ces: {
          official: 'Estonská republika',
          common: 'Estonsko',
        },
        cym: {
          official: 'Gweriniaeth Estonia',
          common: 'Estonia',
        },
        deu: {
          official: 'Republik Estland',
          common: 'Estland',
        },
        est: {
          official: 'Eesti Vabariik',
          common: 'Eesti',
        },
        fin: {
          official: 'Viron tasavalta',
          common: 'Viro',
        },
        fra: {
          official: "République d'Estonie",
          common: 'Estonie',
        },
        hrv: {
          official: 'Republika Estonija',
          common: 'Estonija',
        },
        hun: {
          official: 'Észt Köztársaság',
          common: 'Észtország',
        },
        ita: {
          official: 'Repubblica di Estonia',
          common: 'Estonia',
        },
        jpn: {
          official: 'エストニア共和国',
          common: 'エストニア',
        },
        kor: {
          official: '에스토니아 공화국',
          common: '에스토니아',
        },
        nld: {
          official: 'Republiek Estland',
          common: 'Estland',
        },
        per: {
          official: 'جمهوری استونی',
          common: 'اِستونی',
        },
        pol: {
          official: 'Republika Estońska',
          common: 'Estonia',
        },
        por: {
          official: 'República da Estónia',
          common: 'Estónia',
        },
        rus: {
          official: 'Эстонская Республика',
          common: 'Эстония',
        },
        slk: {
          official: 'Estónska republika',
          common: 'Estónsko',
        },
        spa: {
          official: 'República de Estonia',
          common: 'Estonia',
        },
        srp: {
          official: 'Естонска Република',
          common: 'Естонија',
        },
        swe: {
          official: 'Republiken Estland',
          common: 'Estland',
        },
        tur: {
          official: 'Estonya Cumhuriyeti',
          common: 'Estonya',
        },
        urd: {
          official: 'جمہوریہ اسٹونیا',
          common: 'اسٹونیا',
        },
        zho: {
          official: '爱沙尼亚共和国',
          common: '爱沙尼亚',
        },
      },
      latlng: [59, 26],
      landlocked: false,
      borders: ['LVA', 'RUS'],
      area: 45227,
      demonyms: {
        eng: {
          f: 'Estonian',
          m: 'Estonian',
        },
        fra: {
          f: 'Estonienne',
          m: 'Estonien',
        },
      },
      flag: '🇪🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/6SsynwGUodL1sDvq8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/79510',
      },
      population: 1331057,
      gini: {
        '2018': 30.3,
      },
      fifa: 'EST',
      car: {
        signs: ['EST'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ee.png',
        svg: 'https://flagcdn.com/ee.svg',
        alt: 'The flag of Estonia is composed of three equal horizontal bands of blue, black and white.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ee.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ee.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [59.43, 24.72],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'San Marino',
        official: 'Republic of San Marino',
        nativeName: {
          ita: {
            official: 'Repubblica di San Marino',
            common: 'San Marino',
          },
        },
      },
      tld: ['.sm'],
      cca2: 'SM',
      ccn3: '674',
      cca3: 'SMR',
      cioc: 'SMR',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['78'],
      },
      capital: ['City of San Marino'],
      altSpellings: [
        'SM',
        'Republic of San Marino',
        'Repubblica di San Marino',
      ],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        ita: 'Italian',
      },
      translations: {
        ara: {
          official: 'جمهورية سان مارينو',
          common: 'سان مارينو',
        },
        bre: {
          official: 'Republik San Marino',
          common: 'San Marino',
        },
        ces: {
          official: 'Republika San Marino',
          common: 'San Marino',
        },
        cym: {
          official: 'Republic of San Marino',
          common: 'San Marino',
        },
        deu: {
          official: 'Republik San Marino',
          common: 'San Marino',
        },
        est: {
          official: 'San Marino Vabariik',
          common: 'San Marino',
        },
        fin: {
          official: 'San Marinon seesteinen tasavalta',
          common: 'San Marino',
        },
        fra: {
          official: 'République de Saint-Marin',
          common: 'Saint-Marin',
        },
        hrv: {
          official: 'Većina Serene Republika San Marino',
          common: 'San Marino',
        },
        hun: {
          official: 'San Marino Köztársaság',
          common: 'San Marino',
        },
        ita: {
          official: 'Serenissima Repubblica di San Marino',
          common: 'San Marino',
        },
        jpn: {
          official: 'サンマリノのほとんどセリーヌ共和国',
          common: 'サンマリノ',
        },
        kor: {
          official: '산마리노 공화국',
          common: '산마리노',
        },
        nld: {
          official: 'Meest Serene Republiek San Marino',
          common: 'San Marino',
        },
        per: {
          official: 'جمهوری سان مارینو',
          common: 'سان مارینو',
        },
        pol: {
          official: 'Republika San Marino',
          common: 'San Marino',
        },
        por: {
          official: 'Sereníssima República de San Marino',
          common: 'San Marino',
        },
        rus: {
          official: 'Большинство Serene Республика Сан-Марино',
          common: 'Сан-Марино',
        },
        slk: {
          official: 'Sanmarínska republika',
          common: 'San Maríno',
        },
        spa: {
          official: 'Serenísima República de San Marino',
          common: 'San Marino',
        },
        srp: {
          official: 'Најузвишенија Република Сан Марино',
          common: 'Сан Марино',
        },
        swe: {
          official: 'Republiken San Marino',
          common: 'San Marino',
        },
        tur: {
          official: 'San Marino Cumhuriyeti',
          common: 'San Marino',
        },
        urd: {
          official: 'جمہوریہ سان مارینو',
          common: 'سان مارینو',
        },
        zho: {
          official: '圣马力诺共和国',
          common: '圣马力诺',
        },
      },
      latlng: [43.76666666, 12.41666666],
      landlocked: true,
      borders: ['ITA'],
      area: 61,
      demonyms: {
        eng: {
          f: 'Sammarinese',
          m: 'Sammarinese',
        },
        fra: {
          f: 'Saint-Marinaise',
          m: 'Saint-Marinais',
        },
      },
      flag: '🇸🇲',
      maps: {
        googleMaps: 'https://goo.gl/maps/rxCVJjm8dVY93RPY8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/54624',
      },
      population: 33938,
      fifa: 'SMR',
      car: {
        signs: ['RSM'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/sm.png',
        svg: 'https://flagcdn.com/sm.svg',
        alt: 'The flag of San Marino is composed of two equal horizontal bands of white and light blue, with the national coat of arms superimposed in the center.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/sm.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/sm.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [43.94, 12.45],
      },
      postalCode: {
        format: '4789#',
        regex: '^(4789\\d)$',
      },
      gini: {},
    },
    {
      name: {
        common: 'Vatican City',
        official: 'Vatican City State',
        nativeName: {
          ita: {
            official: 'Stato della Città del Vaticano',
            common: 'Vaticano',
          },
          lat: {
            official: 'Status Civitatis Vaticanæ',
            common: 'Vaticanæ',
          },
        },
      },
      tld: ['.va'],
      cca2: 'VA',
      ccn3: '336',
      cca3: 'VAT',
      independent: true,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['906698', '79'],
      },
      capital: ['Vatican City'],
      altSpellings: [
        'VA',
        'Holy See (Vatican City State)',
        'Vatican City State',
        'Stato della Città del Vaticano',
      ],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        ita: 'Italian',
        lat: 'Latin',
      },
      translations: {
        ara: {
          official: 'دولة مدينة الفاتيكان',
          common: 'مدينة الفاتيكان',
        },
        bre: {
          official: 'Riez Keoded ar Vatikan',
          common: 'Vatikan',
        },
        ces: {
          official: 'Městský stát Vatikán',
          common: 'Vatikán',
        },
        cym: {
          official: 'Vatican City State',
          common: 'Vatican City',
        },
        deu: {
          official: 'Staat Vatikanstadt',
          common: 'Vatikanstadt',
        },
        est: {
          official: 'Vatikani Linnriik',
          common: 'Vatikan',
        },
        fin: {
          official: 'Vatikaanin kaupunkivaltio',
          common: 'Vatikaani',
        },
        fra: {
          official: 'Cité du Vatican',
          common: 'Cité du Vatican',
        },
        hrv: {
          official: 'Vatikan',
          common: 'Vatikan',
        },
        hun: {
          official: 'Vatikán Állam',
          common: 'Vatikán',
        },
        ita: {
          official: 'Città del Vaticano',
          common: 'Città del Vaticano',
        },
        jpn: {
          official: 'バチカン市国の状態',
          common: 'バチカン市国',
        },
        kor: {
          official: '바티칸 시국',
          common: '바티칸',
        },
        nld: {
          official: 'Vaticaanstad',
          common: 'Vaticaanstad',
        },
        per: {
          official: 'دولت‌شهر واتیکان',
          common: 'واتیکان',
        },
        pol: {
          official: 'Państwo Watykańskie',
          common: 'Watykan',
        },
        por: {
          official: 'Cidade do Vaticano',
          common: 'Cidade do Vaticano',
        },
        rus: {
          official: 'Город-государство Ватикан',
          common: 'Ватикан',
        },
        slk: {
          official: 'Svätá stolica (Vatikánsky mestský štát',
          common: 'Vatikán',
        },
        spa: {
          official: 'Ciudad del Vaticano',
          common: 'Ciudad del Vaticano',
        },
        srp: {
          official: 'Град Ватикан',
          common: 'Ватикан',
        },
        swe: {
          official: 'Vatikanstaten',
          common: 'Vatikanstaten',
        },
        tur: {
          official: 'Vatikan Şehir Devleti',
          common: 'Vatikan',
        },
        urd: {
          official: 'ویٹیکن سٹی',
          common: 'ویٹیکن سٹی',
        },
        zho: {
          official: '梵蒂冈城国',
          common: '梵蒂冈',
        },
      },
      latlng: [41.9, 12.45],
      landlocked: true,
      borders: ['ITA'],
      area: 0.44,
      demonyms: {
        eng: {
          f: 'Vatican',
          m: 'Vatican',
        },
        fra: {
          f: 'Vaticane',
          m: 'Vatican',
        },
      },
      flag: '🇻🇦',
      maps: {
        googleMaps: 'https://goo.gl/maps/DTKvw5Bd1QZaDZmE8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/36989',
      },
      population: 451,
      car: {
        signs: ['V'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/va.png',
        svg: 'https://flagcdn.com/va.svg',
        alt: 'The flag of Vatican City is square shaped. It is composed of two equal vertical bands of yellow and white, with national coat of arms centered in the white band. The national coat of arms comprises the Papal Tiara superimposed on two crossed keys.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/va.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/va.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [41.9, 12.45],
      },
      cioc: '',
      gini: {},
      fifa: '',
      postalCode: {
        format: '',
        regex: '',
      },
    },
    {
      name: {
        common: 'Italy',
        official: 'Italian Republic',
        nativeName: {
          ita: {
            official: 'Repubblica italiana',
            common: 'Italia',
          },
        },
      },
      tld: ['.it'],
      cca2: 'IT',
      ccn3: '380',
      cca3: 'ITA',
      cioc: 'ITA',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['9'],
      },
      capital: ['Rome'],
      altSpellings: ['IT', 'Italian Republic', 'Repubblica italiana'],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: {
        ita: 'Italian',
      },
      translations: {
        ara: {
          official: 'الجمهورية الإيطالية',
          common: 'إيطاليا',
        },
        bre: {
          official: 'Republik Italia',
          common: 'Italia',
        },
        ces: {
          official: 'Italská republika',
          common: 'Itálie',
        },
        cym: {
          official: 'Italian Republic',
          common: 'Italy',
        },
        deu: {
          official: 'Italienische Republik',
          common: 'Italien',
        },
        est: {
          official: 'Itaalia Vabariik',
          common: 'Itaalia',
        },
        fin: {
          official: 'Italian tasavalta',
          common: 'Italia',
        },
        fra: {
          official: 'République italienne',
          common: 'Italie',
        },
        hrv: {
          official: 'talijanska Republika',
          common: 'Italija',
        },
        hun: {
          official: 'Olasz Köztársaság',
          common: 'Olaszország',
        },
        ita: {
          official: 'Repubblica italiana',
          common: 'Italia',
        },
        jpn: {
          official: 'イタリア共和国',
          common: 'イタリア',
        },
        kor: {
          official: '이탈리아 공화국',
          common: '이탈리아',
        },
        nld: {
          official: 'Italiaanse Republiek',
          common: 'Italië',
        },
        per: {
          official: 'جمهوری ایتالیا',
          common: 'ایتالیا',
        },
        pol: {
          official: 'Republika Włoska',
          common: 'Włochy',
        },
        por: {
          official: 'República Italiana',
          common: 'Itália',
        },
        rus: {
          official: 'итальянская Республика',
          common: 'Италия',
        },
        slk: {
          official: 'Talianska republika',
          common: 'Taliansko',
        },
        spa: {
          official: 'República Italiana',
          common: 'Italia',
        },
        srp: {
          official: 'Италијанска Република',
          common: 'Италија',
        },
        swe: {
          official: 'Republiken Italien',
          common: 'Italien',
        },
        tur: {
          official: 'İtalyan Cumhuriyeti',
          common: 'İtalya',
        },
        urd: {
          official: 'جمہوریہ اطالیہ',
          common: 'اطالیہ',
        },
        zho: {
          official: '意大利共和国',
          common: '意大利',
        },
      },
      latlng: [42.83333333, 12.83333333],
      landlocked: false,
      borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
      area: 301336,
      demonyms: {
        eng: {
          f: 'Italian',
          m: 'Italian',
        },
        fra: {
          f: 'Italienne',
          m: 'Italien',
        },
      },
      flag: '🇮🇹',
      maps: {
        googleMaps: 'https://goo.gl/maps/8M1K27TDj7StTRTq8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/365331',
      },
      population: 59554023,
      gini: {
        '2017': 35.9,
      },
      fifa: 'ITA',
      car: {
        signs: ['I'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/it.png',
        svg: 'https://flagcdn.com/it.svg',
        alt: 'The flag of Italy is composed of three equal vertical bands of green, white and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/it.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/it.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [41.9, 12.48],
      },
      postalCode: {
        format: '#####',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Slovakia',
        official: 'Slovak Republic',
        nativeName: {
          slk: {
            official: 'Slovenská republika',
            common: 'Slovensko',
          },
        },
      },
      tld: ['.sk'],
      cca2: 'SK',
      ccn3: '703',
      cca3: 'SVK',
      cioc: 'SVK',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['21'],
      },
      capital: ['Bratislava'],
      altSpellings: ['SK', 'Slovak Republic', 'Slovenská republika'],
      region: 'Europe',
      subregion: 'Central Europe',
      languages: {
        slk: 'Slovak',
      },
      translations: {
        ara: {
          official: 'جمهورية سلوفاكيا',
          common: 'سلوفاكيا',
        },
        bre: {
          official: 'Republik Slovak',
          common: 'Slovakia',
        },
        ces: {
          official: 'Slovenská republika',
          common: 'Slovensko',
        },
        cym: {
          official: 'Slovak Republic',
          common: 'Slovakia',
        },
        deu: {
          official: 'Slowakische Republik',
          common: 'Slowakei',
        },
        est: {
          official: 'Slovaki Vabariik',
          common: 'Slovakkia',
        },
        fin: {
          official: 'Slovakian tasavalta',
          common: 'Slovakia',
        },
        fra: {
          official: 'République slovaque',
          common: 'Slovaquie',
        },
        hrv: {
          official: 'slovačka',
          common: 'Slovačka',
        },
        hun: {
          official: 'Szlovák Köztársaság',
          common: 'Szlovákia',
        },
        ita: {
          official: 'Repubblica slovacca',
          common: 'Slovacchia',
        },
        jpn: {
          official: 'スロバキア共和国',
          common: 'スロバキア',
        },
        kor: {
          official: '슬로바키아 공화국',
          common: '슬로바키아',
        },
        nld: {
          official: 'Slowaakse Republiek',
          common: 'Slowakije',
        },
        per: {
          official: 'جمهوری اسلواکی',
          common: 'اِسلُواکی',
        },
        pol: {
          official: 'Republika Słowacka',
          common: 'Słowacja',
        },
        por: {
          official: 'República Eslovaca',
          common: 'Eslováquia',
        },
        rus: {
          official: 'Словацкая Республика',
          common: 'Словакия',
        },
        slk: {
          official: 'Slovenská republika',
          common: 'Slovensko',
        },
        spa: {
          official: 'República Eslovaca',
          common: 'República Eslovaca',
        },
        srp: {
          official: 'Словачка Република',
          common: 'Словачка',
        },
        swe: {
          official: 'Republiken Slovakien',
          common: 'Slovakien',
        },
        tur: {
          official: 'Slovak Cumhuriyeti',
          common: 'Slovakya',
        },
        urd: {
          official: 'جمہوریہ سلوواکیہ',
          common: 'سلوواکیہ',
        },
        zho: {
          official: '斯洛伐克共和国',
          common: '斯洛伐克',
        },
      },
      latlng: [48.66666666, 19.5],
      landlocked: true,
      borders: ['AUT', 'CZE', 'HUN', 'POL', 'UKR'],
      area: 49037,
      demonyms: {
        eng: {
          f: 'Slovak',
          m: 'Slovak',
        },
        fra: {
          f: 'Slovaque',
          m: 'Slovaque',
        },
      },
      flag: '🇸🇰',
      maps: {
        googleMaps: 'https://goo.gl/maps/uNSH2wW4bLoZVYJj7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/14296',
      },
      population: 5458827,
      gini: {
        '2018': 25,
      },
      fifa: 'SVK',
      car: {
        signs: ['SK'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/sk.png',
        svg: 'https://flagcdn.com/sk.svg',
        alt: 'The flag of Slovakia is composed of three equal horizontal bands of white, blue and red. The coat of arms of Slovakia is superimposed at the center of the field slightly towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/sk.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/sk.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [48.15, 17.12],
      },
      postalCode: {
        format: '###  ##',
        regex: '^(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Lithuania',
        official: 'Republic of Lithuania',
        nativeName: {
          lit: {
            official: 'Lietuvos Respublikos',
            common: 'Lietuva',
          },
        },
      },
      tld: ['.lt'],
      cca2: 'LT',
      ccn3: '440',
      cca3: 'LTU',
      cioc: 'LTU',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['70'],
      },
      capital: ['Vilnius'],
      altSpellings: ['LT', 'Republic of Lithuania', 'Lietuvos Respublika'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        lit: 'Lithuanian',
      },
      translations: {
        ara: {
          official: 'جمهورية ليتوانيا',
          common: 'ليتوانيا',
        },
        bre: {
          official: 'Republik Lituania',
          common: 'Lituania',
        },
        ces: {
          official: 'Litevská republika',
          common: 'Litva',
        },
        cym: {
          official: 'Republic of Lithuania',
          common: 'Lithuania',
        },
        deu: {
          official: 'Republik Litauen',
          common: 'Litauen',
        },
        est: {
          official: 'Leedu Vabariik',
          common: 'Leedu',
        },
        fin: {
          official: 'Liettuan tasavalta',
          common: 'Liettua',
        },
        fra: {
          official: 'République de Lituanie',
          common: 'Lituanie',
        },
        hrv: {
          official: 'Republika Litva',
          common: 'Litva',
        },
        hun: {
          official: 'Litván Köztársaság',
          common: 'Litvánia',
        },
        ita: {
          official: 'Repubblica di Lituania',
          common: 'Lituania',
        },
        jpn: {
          official: 'リトアニア共和国',
          common: 'リトアニア',
        },
        kor: {
          official: '리투아니아 공화국',
          common: '리투아니아',
        },
        nld: {
          official: 'Republiek Litouwen',
          common: 'Litouwen',
        },
        per: {
          official: 'لیتوانیایی‌ها',
          common: 'لیتوانیایی‌ها',
        },
        pol: {
          official: 'Republika Litewska',
          common: 'Litwa',
        },
        por: {
          official: 'República da Lituânia',
          common: 'Lituânia',
        },
        rus: {
          official: 'Литовская Республика',
          common: 'Литва',
        },
        slk: {
          official: 'Litovská republika',
          common: 'Litva',
        },
        spa: {
          official: 'República de Lituania',
          common: 'Lituania',
        },
        srp: {
          official: 'Литванска Република',
          common: 'Литванија',
        },
        swe: {
          official: 'Republiken Litauen',
          common: 'Litauen',
        },
        tur: {
          official: 'Litvanya Cumhuriyeti',
          common: 'Litvanya',
        },
        urd: {
          official: 'جمہوریہ لتھووینیا',
          common: 'لتھووینیا',
        },
        zho: {
          official: '立陶宛共和国',
          common: '立陶宛',
        },
      },
      latlng: [56, 24],
      landlocked: false,
      borders: ['BLR', 'LVA', 'POL', 'RUS'],
      area: 65300,
      demonyms: {
        eng: {
          f: 'Lithuanian',
          m: 'Lithuanian',
        },
        fra: {
          f: 'Lituanienne',
          m: 'Lituanien',
        },
      },
      flag: '🇱🇹',
      maps: {
        googleMaps: 'https://goo.gl/maps/dd1s9rrLjrK2G8yY6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/72596',
      },
      population: 2794700,
      gini: {
        '2018': 35.7,
      },
      fifa: 'LTU',
      car: {
        signs: ['LT'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/lt.png',
        svg: 'https://flagcdn.com/lt.svg',
        alt: 'The flag of Lithuania is composed of three equal horizontal bands of yellow, green and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/lt.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/lt.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [54.68, 25.32],
      },
      postalCode: {
        format: 'LT-#####',
        regex: '^(?:LT)*(\\d{5})$',
      },
    },
    {
      name: {
        common: 'Isle of Man',
        official: 'Isle of Man',
        nativeName: {
          eng: {
            official: 'Isle of Man',
            common: 'Isle of Man',
          },
          glv: {
            official: 'Ellan Vannin or Mannin',
            common: 'Mannin',
          },
        },
      },
      tld: ['.im'],
      cca2: 'IM',
      ccn3: '833',
      cca3: 'IMN',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        GBP: {
          name: 'British pound',
          symbol: '£',
        },
        IMP: {
          name: 'Manx pound',
          symbol: '£',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['4'],
      },
      capital: ['Douglas'],
      altSpellings: ['IM', 'Ellan Vannin', 'Mann', 'Mannin'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        eng: 'English',
        glv: 'Manx',
      },
      translations: {
        ara: {
          official: 'جزيرة مان',
          common: 'جزيرة مان',
        },
        bre: {
          official: 'Enez Vanav',
          common: 'Enez Vanav',
        },
        ces: {
          official: 'Ostrov Man',
          common: 'Ostrov Man',
        },
        cym: {
          official: 'Isle of Man',
          common: 'Isle of Man',
        },
        deu: {
          official: 'Isle of Man',
          common: 'Insel Man',
        },
        est: {
          official: 'Mani saar',
          common: 'Mani saar',
        },
        fin: {
          official: 'Mansaari',
          common: 'Mansaari',
        },
        fra: {
          official: 'Isle of Man',
          common: 'Île de Man',
        },
        hrv: {
          official: 'Mana ostrvo',
          common: 'Otok Man',
        },
        hun: {
          official: 'Man',
          common: 'Man',
        },
        ita: {
          official: 'Isola di Man',
          common: 'Isola di Man',
        },
        jpn: {
          official: 'マン島',
          common: 'マン島',
        },
        kor: {
          official: '맨섬',
          common: '맨섬',
        },
        nld: {
          official: 'Isle of Man',
          common: 'Isle of Man',
        },
        per: {
          official: 'جزیرهٔ مَن',
          common: 'جزیرهٔ مَن',
        },
        pol: {
          official: 'Wyspa Man',
          common: 'Wyspa Man',
        },
        por: {
          official: 'Isle of Man',
          common: 'Ilha de Man',
        },
        rus: {
          official: 'Остров Мэн',
          common: 'Остров Мэн',
        },
        slk: {
          official: 'Ostrov Man',
          common: 'Man',
        },
        spa: {
          official: 'Isla de Man',
          common: 'Isla de Man',
        },
        srp: {
          official: 'Острво Мен',
          common: 'Острво Мен',
        },
        swe: {
          official: 'Isle of Man',
          common: 'Isle of Man',
        },
        tur: {
          official: 'Man Adası',
          common: 'Man Adası',
        },
        urd: {
          official: 'آئل آف مین',
          common: 'آئل آف مین',
        },
        zho: {
          official: '马恩岛',
          common: '马恩岛',
        },
      },
      latlng: [54.25, -4.5],
      landlocked: false,
      area: 572,
      demonyms: {
        eng: {
          f: 'Manx',
          m: 'Manx',
        },
      },
      flag: '🇮🇲',
      maps: {
        googleMaps: 'https://goo.gl/maps/4DqVHDgVaFgnh8ZV8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/62269',
      },
      population: 85032,
      car: {
        signs: ['GBM'],
        side: 'left',
      },
      timezones: ['UTC+00:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/im.png',
        svg: 'https://flagcdn.com/im.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/im.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/im.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [54.15, -4.48],
      },
      postalCode: {
        format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
        regex:
          '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
      },
      cioc: '',
      borders: [],
      gini: {},
      fifa: '',
    },
    {
      name: {
        common: 'Norway',
        official: 'Kingdom of Norway',
        nativeName: {
          nno: {
            official: 'Kongeriket Noreg',
            common: 'Noreg',
          },
          nob: {
            official: 'Kongeriket Norge',
            common: 'Norge',
          },
          smi: {
            official: 'Norgga gonagasriika',
            common: 'Norgga',
          },
        },
      },
      tld: ['.no'],
      cca2: 'NO',
      ccn3: '578',
      cca3: 'NOR',
      cioc: 'NOR',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        NOK: {
          name: 'Norwegian krone',
          symbol: 'kr',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['7'],
      },
      capital: ['Oslo'],
      altSpellings: [
        'NO',
        'Norge',
        'Noreg',
        'Kingdom of Norway',
        'Kongeriket Norge',
        'Kongeriket Noreg',
      ],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        nno: 'Norwegian Nynorsk',
        nob: 'Norwegian Bokmål',
        smi: 'Sami',
      },
      translations: {
        ara: {
          official: 'مملكة النرويج',
          common: 'النرويج',
        },
        bre: {
          official: 'Rouantelezh Norvegia',
          common: 'Norvegia',
        },
        ces: {
          official: 'Norské království',
          common: 'Norsko',
        },
        cym: {
          official: 'Kingdom of Norway',
          common: 'Norway',
        },
        deu: {
          official: 'Königreich Norwegen',
          common: 'Norwegen',
        },
        est: {
          official: 'Norra Kuningriik',
          common: 'Norra',
        },
        fin: {
          official: 'Norjan kuningaskunta',
          common: 'Norja',
        },
        fra: {
          official: 'Royaume de Norvège',
          common: 'Norvège',
        },
        hrv: {
          official: 'Kraljevina Norveška',
          common: 'Norveška',
        },
        hun: {
          official: 'Norvég Királyság',
          common: 'Norvégia',
        },
        ita: {
          official: 'Regno di Norvegia',
          common: 'Norvegia',
        },
        jpn: {
          official: 'ノルウェー王国',
          common: 'ノルウェー',
        },
        kor: {
          official: '노르웨이 왕국',
          common: '노르웨이',
        },
        nld: {
          official: 'Koninkrijk Noorwegen',
          common: 'Noorwegen',
        },
        per: {
          official: 'پادشاهی نروژ',
          common: 'نروژ',
        },
        pol: {
          official: 'Królestwo Norwegii',
          common: 'Norwegia',
        },
        por: {
          official: 'Reino da Noruega',
          common: 'Noruega',
        },
        rus: {
          official: 'Королевство Норвегия',
          common: 'Норвегия',
        },
        slk: {
          official: 'Nórske kráľovstvo',
          common: 'Nórsko',
        },
        spa: {
          official: 'Reino de Noruega',
          common: 'Noruega',
        },
        srp: {
          official: 'Краљевина Норвешка',
          common: 'Норвешка',
        },
        swe: {
          official: 'Konungariket Norge',
          common: 'Norge',
        },
        tur: {
          official: 'Norveç Krallığı',
          common: 'Norveç',
        },
        urd: {
          official: 'مملکتِ ناروے',
          common: 'ناروے',
        },
        zho: {
          official: '挪威王国',
          common: '挪威',
        },
      },
      latlng: [62, 10],
      landlocked: false,
      borders: ['FIN', 'SWE', 'RUS'],
      area: 323802,
      demonyms: {
        eng: {
          f: 'Norwegian',
          m: 'Norwegian',
        },
        fra: {
          f: 'Norvégienne',
          m: 'Norvégien',
        },
      },
      flag: '🇳🇴',
      maps: {
        googleMaps: 'https://goo.gl/maps/htWRrphA7vNgQNdSA',
        openStreetMaps: 'https://www.openstreetmap.org/relation/2978650',
      },
      population: 5379475,
      gini: {
        '2018': 27.6,
      },
      fifa: 'NOR',
      car: {
        signs: ['N'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/no.png',
        svg: 'https://flagcdn.com/no.svg',
        alt: 'The flag of Norway has a red field with a large white-edged navy blue cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/no.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/no.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [59.92, 10.75],
      },
      postalCode: {
        format: '####',
        regex: '^(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Latvia',
        official: 'Republic of Latvia',
        nativeName: {
          lav: {
            official: 'Latvijas Republikas',
            common: 'Latvija',
          },
        },
      },
      tld: ['.lv'],
      cca2: 'LV',
      ccn3: '428',
      cca3: 'LVA',
      cioc: 'LAT',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['71'],
      },
      capital: ['Riga'],
      altSpellings: ['LV', 'Republic of Latvia', 'Latvijas Republika'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        lav: 'Latvian',
      },
      translations: {
        ara: {
          official: 'جمهورية لاتفيا',
          common: 'لاتفيا',
        },
        bre: {
          official: 'Republik Latvia',
          common: 'Latvia',
        },
        ces: {
          official: 'Lotyšská republika',
          common: 'Lotyšsko',
        },
        cym: {
          official: 'Republic of Latvia',
          common: 'Latvia',
        },
        deu: {
          official: 'Republik Lettland',
          common: 'Lettland',
        },
        est: {
          official: 'Läti Vabariik',
          common: 'Läti',
        },
        fin: {
          official: 'Latvian tasavalta',
          common: 'Latvia',
        },
        fra: {
          official: 'République de Lettonie',
          common: 'Lettonie',
        },
        hrv: {
          official: 'Republika Latvija',
          common: 'Latvija',
        },
        hun: {
          official: 'Lett Köztársaság',
          common: 'Lettország',
        },
        ita: {
          official: 'Repubblica di Lettonia',
          common: 'Lettonia',
        },
        jpn: {
          official: 'ラトビア共和国',
          common: 'ラトビア',
        },
        kor: {
          official: '라트비아 공화국',
          common: '라트비아',
        },
        nld: {
          official: 'Republiek Letland',
          common: 'Letland',
        },
        per: {
          official: 'جمهوری لتونی',
          common: 'لتونی',
        },
        pol: {
          official: 'Republika Łotewska',
          common: 'Łotwa',
        },
        por: {
          official: 'República da Letónia',
          common: 'Letónia',
        },
        rus: {
          official: 'Латвийская Республика',
          common: 'Латвия',
        },
        slk: {
          official: 'Lotyšská republika',
          common: 'Lotyšsko',
        },
        spa: {
          official: 'República de Letonia',
          common: 'Letonia',
        },
        srp: {
          official: 'Летонска Република',
          common: 'Летонија',
        },
        swe: {
          official: 'Republiken Lettland',
          common: 'Lettland',
        },
        tur: {
          official: 'Letonya Cumhuriyeti',
          common: 'Letonya',
        },
        urd: {
          official: 'جمہوریہ لٹویا',
          common: 'لٹویا',
        },
        zho: {
          official: '拉脱维亚共和国',
          common: '拉脱维亚',
        },
      },
      latlng: [57, 25],
      landlocked: false,
      borders: ['BLR', 'EST', 'LTU', 'RUS'],
      area: 64559,
      demonyms: {
        eng: {
          f: 'Latvian',
          m: 'Latvian',
        },
        fra: {
          f: 'Lettone',
          m: 'Letton',
        },
      },
      flag: '🇱🇻',
      maps: {
        googleMaps: 'https://goo.gl/maps/iQpUkH7ghq31ZtXe9',
        openStreetMaps: 'https://www.openstreetmap.org/relation/72594',
      },
      population: 1901548,
      gini: {
        '2018': 35.1,
      },
      fifa: 'LVA',
      car: {
        signs: ['LV'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/lv.png',
        svg: 'https://flagcdn.com/lv.svg',
        alt: 'The flag of Latvia has a carmine-red field with a thin white horizontal band across the middle of the field.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/lv.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/lv.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [56.95, 24.1],
      },
      postalCode: {
        format: 'LV-####',
        regex: '^(?:LV)*(\\d{4})$',
      },
    },
    {
      name: {
        common: 'Romania',
        official: 'Romania',
        nativeName: {
          ron: {
            official: 'România',
            common: 'România',
          },
        },
      },
      tld: ['.ro'],
      cca2: 'RO',
      ccn3: '642',
      cca3: 'ROU',
      cioc: 'ROU',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        RON: {
          name: 'Romanian leu',
          symbol: 'lei',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['0'],
      },
      capital: ['Bucharest'],
      altSpellings: ['RO', 'Rumania', 'Roumania', 'România'],
      region: 'Europe',
      subregion: 'Southeast Europe',
      languages: {
        ron: 'Romanian',
      },
      translations: {
        ara: {
          official: 'رومانيا',
          common: 'رومانيا',
        },
        bre: {
          official: 'Roumania',
          common: 'Roumania',
        },
        ces: {
          official: 'Rumunsko',
          common: 'Rumunsko',
        },
        cym: {
          official: 'Romania',
          common: 'Romania',
        },
        deu: {
          official: 'Rumänien',
          common: 'Rumänien',
        },
        est: {
          official: 'Rumeenia',
          common: 'Rumeenia',
        },
        fin: {
          official: 'Romania',
          common: 'Romania',
        },
        fra: {
          official: 'Roumanie',
          common: 'Roumanie',
        },
        hrv: {
          official: 'Rumunija',
          common: 'Rumunjska',
        },
        hun: {
          official: 'Románia',
          common: 'Románia',
        },
        ita: {
          official: 'Romania',
          common: 'Romania',
        },
        jpn: {
          official: 'ルーマニア',
          common: 'ルーマニア',
        },
        kor: {
          official: '루마니아',
          common: '루마니아',
        },
        nld: {
          official: 'Roemenië',
          common: 'Roemenië',
        },
        per: {
          official: 'رومانی',
          common: 'رومانی',
        },
        pol: {
          official: 'Rumunia',
          common: 'Rumunia',
        },
        por: {
          official: 'Romênia',
          common: 'Roménia',
        },
        rus: {
          official: 'Румыния',
          common: 'Румыния',
        },
        slk: {
          official: 'Rumunsko',
          common: 'Rumunsko',
        },
        spa: {
          official: 'Rumania',
          common: 'Rumania',
        },
        srp: {
          official: 'Румунија',
          common: 'Румунија',
        },
        swe: {
          official: 'Rumänien',
          common: 'Rumänien',
        },
        tur: {
          official: 'Romanya',
          common: 'Romanya',
        },
        urd: {
          official: 'رومانیہ',
          common: 'رومانیہ',
        },
        zho: {
          official: '罗马尼亚',
          common: '罗马尼亚',
        },
      },
      latlng: [46, 25],
      landlocked: false,
      borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
      area: 238391,
      demonyms: {
        eng: {
          f: 'Romanian',
          m: 'Romanian',
        },
        fra: {
          f: 'Roumaine',
          m: 'Roumain',
        },
      },
      flag: '🇷🇴',
      maps: {
        googleMaps: 'https://goo.gl/maps/845hAgCf1mDkN3vr7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/90689',
      },
      population: 19286123,
      gini: {
        '2018': 35.8,
      },
      fifa: 'ROU',
      car: {
        signs: ['RO'],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ro.png',
        svg: 'https://flagcdn.com/ro.svg',
        alt: 'The flag of Romania is composed of three equal vertical bands of navy blue, yellow and red.',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ro.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ro.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [44.43, 26.1],
      },
      postalCode: {
        format: '######',
        regex: '^(\\d{6})$',
      },
    },
    {
      name: {
        common: 'Svalbard and Jan Mayen',
        official: 'Svalbard og Jan Mayen',
        nativeName: {
          nor: {
            official: 'Svalbard og Jan Mayen',
            common: 'Svalbard og Jan Mayen',
          },
        },
      },
      tld: ['.sj'],
      cca2: 'SJ',
      ccn3: '744',
      cca3: 'SJM',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        NOK: {
          name: 'krone',
          symbol: 'kr',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['779'],
      },
      capital: ['Longyearbyen'],
      altSpellings: ['SJ', 'Svalbard and Jan Mayen Islands'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        nor: 'Norwegian',
      },
      translations: {
        ara: {
          official: 'سفالبارد ويان ماين',
          common: 'سفالبارد ويان ماين',
        },
        bre: {
          official: 'Svalbard ha Jan Mayen',
          common: 'Svalbard ha Jan Mayen',
        },
        ces: {
          official: 'Špicberky a Jan Mayen',
          common: 'Špicberky a Jan Mayen',
        },
        cym: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard and Jan Mayen',
        },
        deu: {
          official: 'Spitzbergen und Jan Mayen',
          common: 'Spitzbergen und Jan Mayen',
        },
        est: {
          official: 'Svalbard',
          common: 'Svalbard',
        },
        fin: {
          official: 'Huippuvuoret',
          common: 'Huippuvuoret',
        },
        fra: {
          official: 'Jan Mayen Svalbard',
          common: 'Svalbard et Jan Mayen',
        },
        hrv: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard i Jan Mayen',
        },
        hun: {
          official: 'Svalbard és Jan Mayen',
          common: 'Svalbard és Jan Mayen',
        },
        ita: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard e Jan Mayen',
        },
        jpn: {
          official: 'スバールバル諸島OGヤンマイエン',
          common: 'スヴァールバル諸島およびヤンマイエン島',
        },
        kor: {
          official: '스발바르 얀마옌 제도',
          common: '스발바르 얀마옌 제도',
        },
        nld: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard en Jan Mayen',
        },
        per: {
          official: 'سوالبارد و یان ماین',
          common: 'سوالبارد و یان ماین',
        },
        pol: {
          official: 'Svalbard i Jan Mayen',
          common: 'Svalbard i Jan Mayen',
        },
        por: {
          official: 'Svalbard og Jan Mayen',
          common: 'Ilhas Svalbard e Jan Mayen',
        },
        rus: {
          official: 'Свальбарда ог Ян-Майен',
          common: 'Шпицберген и Ян-Майен',
        },
        slk: {
          official: 'Svalbard a Jan Mayen',
          common: 'Svalbard a Jan Mayen',
        },
        spa: {
          official: 'Svalbard og Jan Mayen',
          common: 'Islas Svalbard y Jan Mayen',
        },
        srp: {
          official: 'Свалбард и Јан Мајен',
          common: 'Свалбард и Јан Мајен',
        },
        swe: {
          official: 'Svalbard och Jan Mayen',
          common: 'Svalbard och Jan Mayen',
        },
        tur: {
          official: 'Svalbard ve Jan Mayen',
          common: 'Svalbard ve Jan Mayen',
        },
        urd: {
          official: 'سوالبارڈ اور جان میئن',
          common: 'سوالبارڈ اور جان میئن',
        },
        zho: {
          official: '斯瓦尔巴特',
          common: '斯瓦尔巴特',
        },
      },
      latlng: [78, 20],
      landlocked: false,
      area: 61399,
      demonyms: {
        eng: {
          f: 'Norwegian',
          m: 'Norwegian',
        },
      },
      flag: '🇸🇯',
      maps: {
        googleMaps: 'https://goo.gl/maps/L2wyyn3cQ16PzQ5J8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1337397',
      },
      population: 2562,
      car: {
        signs: ['N'],
        side: 'right',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/sj.png',
        svg: 'https://flagcdn.com/sj.svg',
      },
      coatOfArms: {
        png: '',
        svg: '',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [78.22, 15.63],
      },
      cioc: '',
      borders: [],
      gini: {},
      fifa: '',
      postalCode: {
        format: '',
        regex: '',
      },
    },
    {
      name: {
        common: 'Jersey',
        official: 'Bailiwick of Jersey',
        nativeName: {
          eng: {
            official: 'Bailiwick of Jersey',
            common: 'Jersey',
          },
          fra: {
            official: 'Bailliage de Jersey',
            common: 'Jersey',
          },
          nrf: {
            official: 'Bailliage dé Jèrri',
            common: 'Jèrri',
          },
        },
      },
      tld: ['.je'],
      cca2: 'JE',
      ccn3: '832',
      cca3: 'JEY',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        GBP: {
          name: 'British pound',
          symbol: '£',
        },
        JEP: {
          name: 'Jersey pound',
          symbol: '£',
        },
      },
      idd: {
        root: '+4',
        suffixes: ['4'],
      },
      capital: ['Saint Helier'],
      altSpellings: [
        'JE',
        'Bailiwick of Jersey',
        'Bailliage de Jersey',
        'Bailliage dé Jèrri',
      ],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        eng: 'English',
        fra: 'French',
        nrf: 'Jèrriais',
      },
      translations: {
        ara: {
          official: 'جيرزي',
          common: 'جيرزي',
        },
        bre: {
          official: 'Jerzenez',
          common: 'Jerzenez',
        },
        ces: {
          official: 'Rychtářství Jersey',
          common: 'Jersey',
        },
        cym: {
          official: 'Bailiwick of Jersey',
          common: 'Jersey',
        },
        deu: {
          official: 'Vogtei Jersey',
          common: 'Jersey',
        },
        est: {
          official: 'Jersey foogtkond',
          common: 'Jersey',
        },
        fin: {
          official: 'Jersey',
          common: 'Jersey',
        },
        fra: {
          official: 'Bailliage de Jersey',
          common: 'Jersey',
        },
        hrv: {
          official: 'Struka od Jersey',
          common: 'Jersey',
        },
        hun: {
          official: 'Jersey',
          common: 'Jersey',
        },
        ita: {
          official: 'Baliato di Jersey',
          common: 'Isola di Jersey',
        },
        jpn: {
          official: 'ジャージの得意分野',
          common: 'ジャージー',
        },
        kor: {
          official: '저지 섬',
          common: '저지 섬',
        },
        nld: {
          official: 'Baljuwschap Jersey',
          common: 'Jersey',
        },
        per: {
          official: 'جرزی',
          common: 'جرزی',
        },
        pol: {
          official: 'Jersey',
          common: 'Jersey',
        },
        por: {
          official: 'Bailiado de Jersey',
          common: 'Jersey',
        },
        rus: {
          official: 'Коронное владение Джерси',
          common: 'Джерси',
        },
        slk: {
          official: 'Bailiwick Jersey',
          common: 'Jersey',
        },
        spa: {
          official: 'Bailía de Jersey',
          common: 'Jersey',
        },
        srp: {
          official: 'Џерзи',
          common: 'Џерзи',
        },
        swe: {
          official: 'Jersey',
          common: 'Jersey',
        },
        tur: {
          official: 'Jersey',
          common: 'Jersey',
        },
        urd: {
          official: 'جرزی',
          common: 'جرزی',
        },
        zho: {
          official: '泽西岛',
          common: '泽西岛',
        },
      },
      latlng: [49.25, -2.16666666],
      landlocked: false,
      area: 116,
      demonyms: {
        eng: {
          f: 'Channel Islander',
          m: 'Channel Islander',
        },
        fra: {
          f: 'Jersiaise',
          m: 'Jersiais',
        },
      },
      flag: '🇯🇪',
      maps: {
        googleMaps: 'https://goo.gl/maps/rXG8GZZtsqK92kTCA',
        openStreetMaps: 'https://www.openstreetmap.org/relation/367988',
      },
      population: 100800,
      car: {
        signs: ['GBJ'],
        side: 'left',
      },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/je.png',
        svg: 'https://flagcdn.com/je.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/je.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/je.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [49.18, -2.1],
      },
      postalCode: {
        format: '@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA',
        regex:
          '^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$',
      },
      cioc: '',
      borders: [],
      gini: {},
      fifa: '',
    },
    {
      name: {
        common: 'Åland Islands',
        official: 'Åland Islands',
        nativeName: {
          swe: {
            official: 'Landskapet Åland',
            common: 'Åland',
          },
        },
      },
      tld: ['.ax'],
      cca2: 'AX',
      ccn3: '248',
      cca3: 'ALA',
      independent: false,
      status: 'officially-assigned',
      unMember: false,
      currencies: {
        EUR: {
          name: 'Euro',
          symbol: '€',
        },
      },
      idd: {
        root: '+3',
        suffixes: ['5818'],
      },
      capital: ['Mariehamn'],
      altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
      region: 'Europe',
      subregion: 'Northern Europe',
      languages: {
        swe: 'Swedish',
      },
      translations: {
        ara: {
          official: 'جزر أولاند',
          common: 'جزر أولاند',
        },
        bre: {
          official: 'Inizi Åland',
          common: 'Åland',
        },
        ces: {
          official: 'Ålandské ostrovy',
          common: 'Ålandy',
        },
        cym: {
          official: 'Åland Islands',
          common: 'Åland Islands',
        },
        deu: {
          official: 'Åland-Inseln',
          common: 'Åland',
        },
        est: {
          official: 'Ahvenamaa maakond',
          common: 'Ahvenamaa',
        },
        fin: {
          official: 'Ahvenanmaan maakunta',
          common: 'Ahvenanmaa',
        },
        fra: {
          official: 'Ahvenanmaa',
          common: 'Ahvenanmaa',
        },
        hrv: {
          official: 'Aland Islands',
          common: 'Ålandski otoci',
        },
        hun: {
          official: 'Åland-szigetek',
          common: 'Åland-szigetek',
        },
        ita: {
          official: 'Isole Åland',
          common: 'Isole Aland',
        },
        jpn: {
          official: 'オーランド諸島',
          common: 'オーランド諸島',
        },
        kor: {
          official: '올란드 제도',
          common: '올란드 제도',
        },
        nld: {
          official: 'Åland eilanden',
          common: 'Ålandeilanden',
        },
        per: {
          official: 'جزایر الند',
          common: 'جزایر الند',
        },
        pol: {
          official: 'Wyspy Alandzkie',
          common: 'Wyspy Alandzkie',
        },
        por: {
          official: 'Ilhas Åland',
          common: 'Alândia',
        },
        rus: {
          official: 'Аландские острова',
          common: 'Аландские острова',
        },
        slk: {
          official: 'Alandské ostrovy',
          common: 'Alandy',
        },
        spa: {
          official: 'Islas Åland',
          common: 'Alandia',
        },
        srp: {
          official: 'Оландска Острва',
          common: 'Оландска Острва',
        },
        swe: {
          official: 'Åland',
          common: 'Åland',
        },
        tur: {
          official: 'Åland Adaları',
          common: 'Åland',
        },
        urd: {
          official: 'جزائر اولند',
          common: 'جزائر اولند',
        },
        zho: {
          official: '奥兰群岛',
          common: '奥兰群岛',
        },
      },
      latlng: [60.116667, 19.9],
      landlocked: false,
      area: 1580,
      demonyms: {
        eng: {
          f: 'Ålandish',
          m: 'Ålandish',
        },
        fra: {
          f: 'Ålandaise',
          m: 'Ålandais',
        },
      },
      flag: '🇦🇽',
      maps: {
        googleMaps: 'https://goo.gl/maps/ewFb3vYsfUmVCoSb8',
        openStreetMaps: 'https://www.openstreetmap.org/relation/1650407',
      },
      population: 29458,
      car: {
        signs: [''],
        side: 'right',
      },
      timezones: ['UTC+02:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/ax.png',
        svg: 'https://flagcdn.com/ax.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/ax.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/ax.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: {
        latlng: [60.12, 19.9],
      },
      cioc: '',
      borders: [],
      gini: {},
      fifa: '',
      postalCode: {
        format: '',
        regex: '',
      },
    },
  ],
};
