import { Link } from 'react-router-dom';

function CardHome (props) {
  return (
    <div>
      <header>{props.typeConvert}</header>

      <p>Clique no botão abaixo para converter o número de {props.typeConvert}</p>

      <Link to={props.link}>Conversor {props.typeConvert}</Link>
    </div>
  );
}

export default CardHome;