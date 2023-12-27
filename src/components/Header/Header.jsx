import { Link, useLocation } from 'react-router-dom';
import css from './style.module.css'



const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header>
      <nav>
        <ul className={css.header}>
          <li>
            <Link to="/" className={isHome ? css.active : ''} >
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className={!isHome ? css.active : ''} >
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;