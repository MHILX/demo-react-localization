import { useTranslation } from 'react-i18next';

export default function LanguageSelection() {
  const { i18n } = useTranslation();

  function changeLanguage(e: React.MouseEvent<HTMLButtonElement>) {
    i18n.changeLanguage((e.target as HTMLButtonElement).value);
  }

  return(
    <div className='footer'>
      <button onClick={changeLanguage} value='en'>English</button>
      <button onClick={changeLanguage} value='es'>Español</button>
    </div>
  )
}