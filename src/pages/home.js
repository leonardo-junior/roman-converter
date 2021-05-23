import { Link } from 'react-router-dom';
import CardHome from '../components/card-home';

function Home () {
  return (
    <section className="cards-locale">
      <CardHome
        typeConvert="Romano para Decimal"
        link="/roman"
      />
      <CardHome
        typeConvert="Decimal para Romano"
        link="/dec"
      />
    </section>
  );
}

export default Home;