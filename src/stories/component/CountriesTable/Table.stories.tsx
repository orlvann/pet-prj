import React from 'react';
import { Image, Switch } from '@chakra-ui/react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableProps } from '../../../components/Table';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Country } from '../../../api/countries';

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [
    (StoryFn: StoryFn<TableProps<Country>>) => (
      <Router>
        <ChakraProvider>
          <StoryFn columns={[]} data={[]} />
        </ChakraProvider>
      </Router>
    ),
  ],
  argTypes: {
    navigate: {
      action: 'navigated',
    },
    data: {
      control: 'object',
      description: 'Array of country objects to be displayed in the table',
    },
  },
} as Meta<TableProps<Country>>;

const Template: StoryFn<TableProps<Country>> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
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
  ],
  columns: [
    {
      header: 'Name',
      accessor: (country: Country) => country.name.common,
    },
    {
      header: 'Flag',
      accessor: (country: Country) => country.flags.png,
      render: (flagUrl: any) => <Image src={flagUrl} boxSize='30px' />,
    },
    {
      header: 'Capital',
      accessor: (country: Country) => country.capital.join(', '),
    },
    {
      header: 'Population',
      accessor: (country: Country) => country.population.toLocaleString(),
    },
    {
      header: 'Independent',
      accessor: (country: Country) => country.independent,
      render: (isIndependent: any) => (
        <Switch isChecked={isIndependent} isReadOnly={true} />
      ), // Cast to any for demo purposes
    },
  ],
  onRowClick: (item: Country) => {
    console.log(`Clicked row with country code: ${item.cca3}`);
  },
};
