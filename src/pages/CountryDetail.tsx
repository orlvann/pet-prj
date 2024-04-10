import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  let { id } = useParams();
  return <div>Country Detail Component for {id}</div>;
};

export default CountryDetail;
