import { useNavigate } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react';
import { Country } from '../api/countries';
import '../App.css';

interface CountriesTableProps {
  countries: Country[];
}

export const CountriesTable: React.FC<CountriesTableProps> = ({
  countries,
}) => {
  const navigate = useNavigate();
  return (
    <div className='table'>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Population</Th>
            <Th>Flag</Th>
            <Th>Capital</Th>
          </Tr>
        </Thead>
        <Tbody>
          {countries.map((country) => (
            <Tr
              key={country.cca3}
              onClick={() => navigate(`/country/${country.cca3}`)}
              cursor='pointer'
            >
              <Td>{country.name.common}</Td>
              <Td>{country.population.toLocaleString()}</Td>
              <Td>
                <Image
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  boxSize='30px'
                />
              </Td>
              <Td>{country.capital.join(', ')}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};
