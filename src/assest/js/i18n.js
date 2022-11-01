import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationFR from "./locales/fr/translationFR.json";
import translationHI from "./locales/hi/translationHI.json";
import translationTHA from "./locales/tha/translationTHA.json";
import translationZH from "./locales/zh/translationZH.json";
import translationDE from "./locales/de/translationDE.json";

const resources = {
    // en : {
    //     translation: translationEN
    // },
    fr : {
        translation: translationFR
    },
    hi : {
        translation: translationHI
    },
    tha : {
        translation: translationTHA
    },
    zh : {
        translation: translationZH
    },
    de : {
        translation: translationDE
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
        escapeValue: false
    }
})

export default i18n;