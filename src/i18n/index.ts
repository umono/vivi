import { createI18n } from 'vue-i18n';

import en_US from "./config/en";
import zh_CN from "./config/zh";

const language = (navigator.language || 'en_US');
const messages = {
    en_US,
    zh_CN,
}

export default createI18n({
    locale: localStorage.getItem('lang') || language.split('-')[0] || 'en_US',
    fallbackLocale: 'en_US',
    messages,
})