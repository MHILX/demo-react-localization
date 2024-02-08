import { useTranslation } from 'react-i18next';
import './LanguageSelection.css';

export default function LanguageSelection() {
  const { i18n } = useTranslation();

  function changeLanguage(e: React.MouseEvent<HTMLButtonElement>) {
    i18n.changeLanguage((e.target as HTMLButtonElement).value);
  }

  return(
    <div className='lan-select'>
      <button className='button-rounded' onClick={changeLanguage} value='en'>English</button>
      <button className='button-rounded' onClick={changeLanguage} value='es'>Español</button>
    </div>
  )
}