import { createStore } from 'vuex'
import themeStore from './theme'

export const store = createStore({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        theme: themeStore,
    },
})