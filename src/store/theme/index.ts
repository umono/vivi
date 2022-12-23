const THEME_KEY = 'web-dark-mode'
import { darkTheme, zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
const theme = {
    namespaced: true,
    state() {
        return {
            theme: null,
            locale: enUS,
            localeStr: 'en_US',
            dateLocale: dateEnUS,
            haveForward: false,
        }
    },
    getters: {
        getTheme(state: { theme: any; }) {
            return state.theme;
        },
        getHaveForward(state: any) {
            return state.haveForward;
        },
        getLocaleStr(state: { localeStr: any }) {
            return state.localeStr;
        }
    },
    mutations: {
        INIT_THEME: (state: any) => {
            const darkMode = localStorage.getItem(THEME_KEY)
            if (darkMode == undefined) {
                if (state.theme) {
                    localStorage.setItem(THEME_KEY, "true")
                } else {
                    localStorage.setItem(THEME_KEY, "false")
                }
            } else {
                if (darkMode == "true") {
                    state.theme = darkTheme;
                } else {
                    state.theme = null;
                }
            }
            // lang
            let lang = localStorage.getItem('lang') || navigator.language.replace('-', '_');
            state.localeStr = lang;
            switch (lang) {
                case "zh_CN":
                    state.locale = zhCN
                    state.dateLocale = dateZhCN
                    break;
                case "en_US":
                    state.locale = enUS
                    state.dateLocale = dateEnUS
            }
        },
        TOGGLE_THEME: (state: { theme: any; }, selectTheme: any) => {
            if (selectTheme) {
                state.theme = darkTheme;
                localStorage.setItem(THEME_KEY, "true")
            } else {
                state.theme = null;
                localStorage.setItem(THEME_KEY, "false")
            }
        },

        TOGGLE_LANGUAGE: (state: { locale: any; dateLocale: any, localeStr: any, }, language: string) => {
            state.localeStr = language;
            switch (language) {
                case "zh_CN":
                    state.locale = zhCN
                    state.dateLocale = dateZhCN
                    break;
                case "en_US":
                    state.locale = enUS
                    state.dateLocale = dateEnUS
                default:
                    state.locale = enUS
                    state.dateLocale = dateEnUS
                    break;

            }
        },
        TOGGLE_ROUTER_STATUS: (state: { haveForward: Boolean }, haveForward: Boolean) => {
            state.haveForward = haveForward
        },
    },
    actions: {
        init({ commit }: any) { commit("INIT_THEME"); },
        toggle({ commit }: any, theme: any) { commit('TOGGLE_THEME', theme) },
        toggleLanguage({ commit }: any, language: any) { commit('TOGGLE_LANGUAGE', language) },
        toggleRouter({ commit }: any, haveForward: Boolean) { commit('TOGGLE_ROUTER_STATUS', haveForward) },
    }
}
export default theme;