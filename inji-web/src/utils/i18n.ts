import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from '../locales/en.json';
import ta from '../locales/ta.json';
import {storage} from "./storage";
import {DisplayArrayObject} from "../types/data";

const resources = {en, ta};

const selected_language = storage.getItem(storage.SELECTED_LANGUAGE);
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: selected_language ? selected_language : "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

export const switchLanguage = async (language: string) => {
    storage.setItem(storage.SELECTED_LANGUAGE, language);
    await i18n.changeLanguage(language);
}
export const getObjectForCurrentLanguage = (displayArray: DisplayArrayObject[], language: string = i18n.language) => {
    let resp = displayArray.filter(displayObj => displayObj.language === language)[0];
    if (!resp) {
        resp = displayArray.filter(displayObj => displayObj.locale === language)[0]
    }
    if (!resp) {
        resp = displayArray.filter(displayObj => displayObj.language === 'en')[0];
    }
    if (!resp) {
        resp = displayArray.filter(displayObj => displayObj.locale === 'en')[0]
    }
    return resp;
}
