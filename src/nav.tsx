import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import './nav.css';

const Nav: FC = () => {
  const { t } = useTranslation();

  return (
    <header className='nav'>
      <div>{t('i18n React Demo')}</div>
      <div>
        <Link to="/">{t('Home')}</Link>
        <Link to="/about">{t('about')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </div>
    </header>
  );
};

export default Nav;