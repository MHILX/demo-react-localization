import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import './NavComponent.css';
import LanguageSelection from '../Language/LanguageSelection';

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
    <header className='nav'>
      <div>{t('i18n React Demo')}</div>
      <div>
        <Link to="/">{t('Home')}</Link>
        <Link to="/about">{t('about')}</Link>
        <Link to="/contact">{t('contact')}</Link>
        <LanguageSelection />
      </div>
    </header>
  );
};

export default Navigation;