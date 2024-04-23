import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from '../locales/en.json';
import ta from '../locales/ta.json';

const resources = {en, ta};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

export const switchLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
}


export const getObjectForCurrentLanguage = (displayArray: DisplayArrayObject[]) => {
    let resp = displayArray.filter(displayObj => displayObj.language === i18n.language)[0];
    if (!resp) {
        resp = displayArray.filter(displayObj => displayObj.locale === i18n.language)[0]
    }
    return resp;
}

export type DisplayArrayObject = {
    name: string;
    language: string;
    locale: string;
    logo: LogoObject,
    title: string;
    description: string;
}

type LogoObject = {
    url: string;
    alt_text: string;
}
