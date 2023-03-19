/* eslint-disable no-unused-vars */
import i18n from "i18next";
import Cookies from "universal-cookie";
import translationEN from "./lang/en.json";
import translationFA from "./lang/fa.json";
import { reactI18nextModule } from "react-i18next";

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};
const cookies = new Cookies();

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: cookies.get("lang"),

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
