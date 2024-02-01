import { Link } from 'react-router-dom';
import { FC } from 'react';

const Nav: FC = () => (
  <header className='nav'>
    <div>i18n React Demo</div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
    </div>
  </header>
);

export default Nav;