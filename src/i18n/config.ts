import i18n, { Resource, InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: Resource = {
    en: {
        translations: require('./locales/en/translations.json')
    },
    es: {
        translations: require('./locales/es/translations.json')
    }
};

const options: InitOptions = {
    fallbackLng: 'en',
    lng: 'en',
    resources,
    ns: ['translations'],
    defaultNS: 'translations'
};

i18n.use(initReactI18next).init(options);

i18n.languages = ['en', 'es'];

export default i18n;