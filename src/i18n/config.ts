import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translations.json';
import esTranslations from './locales/es/translations.json';

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        en: {
            //   translation: {
            //     "i18n React Demo!!!": "Welcome to i18n React Demo!!!",
            //     "Home": "My Home",
            //     "Page 2": "About"
            //   }
            translation: enTranslations
        },
        es:
        {
            translation: esTranslations
        }
    }
}, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
});

export default i18next;