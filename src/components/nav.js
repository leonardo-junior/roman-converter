import logo from '../images/logo192.png';
import { Link } from 'react-router-dom';

function Nav () {
  return (
    <nav className="navigator">
      <Link to="/" className="img-nav">
        <img src={logo} alt="logo-click" />
      </Link>
      <Link to="/roman">Roman to Dec</Link>
      <Link to="/dec">Dec to Roman</Link>
    </nav>
  );
}

export default Nav;