<template>
    <n-layout class="w-full max-w-screen-2xl fixed z-50">
        <div class="header-box py-4 px-6">
            <n-space>
                <div class="text-3xl vivi cursor-pointer" @click="$router.push('/')">
                    Vivi
                </div>
                <n-button quaternary @click="$router.push('/')">
                    <span class="font-bold" :class="currentRouteStr == '/file' ? 'text-gray-500' : ''">
                        🎨 发现
                    </span>
                </n-button>
                <n-button quaternary class="font-bold" @click="$router.push('/file')">
                    <span class="font-bold" :class="currentRouteStr == '/' ? 'text-gray-500' : ''">
                        🗂️ 上传
                    </span>
                </n-button>
            </n-space>
            <n-space>
                <n-button quaternary class="btn-shadow" circle @click="toggleTheme">
                    <template #icon>
                        <n-icon size="22">
                            <WeatherMoon24Regular v-if="theme == null" />
                            <WeatherSunny24Regular v-else />
                        </n-icon>
                    </template>
                </n-button>
                <n-dropdown trigger="hover" :options="languageOptions" @select="handleLanguageSelect">
                    <n-button quaternary class="btn-shadow">{{ languageStr }}</n-button>
                </n-dropdown>
                <n-button quaternary class="btn-shadow bg-indigo-700 text-white">Connect Wallet</n-button>
            </n-space>
        </div>
    </n-layout>
</template>

<script lang="ts">
import { WeatherSunny24Regular, WeatherMoon24Regular } from '@vicons/fluent';
import { useStore } from 'vuex';
import router from '../../router';
export default {
    props: ["theme", "locale"],
    components: {
        WeatherSunny24Regular,
        WeatherMoon24Regular,
    },
    setup(props) {
        const store = useStore();
        const currentRouteStr = ref('/');
        watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
            currentRouteStr.value = newValue
        }, { immediate: true });

        const languageOptions = [
            {
                label: 'En',
                key: 'en_US'
            },
            {
                label: '中文',
                key: 'zh-CN'
            }
        ]
        let languageStr: any = ref(null);
        if (props.locale) {
            languageStr.value = '中文';
        }
        const toggleLanguage = (language: string) => {
            store.dispatch("theme/toggleLanguage", language);
        }

        const handleLanguageSelect = (key: string) => {
            toggleLanguage(key);
            switch (key) {
                case 'zh-CN':
                    languageStr.value = '中文';
                    break;
                case 'en_US':
                    languageStr.value = 'En';
                default:
                    break;
            }
        }
        return {
            currentRouteStr,
            languageStr,
            languageOptions,
            handleLanguageSelect,
            toggleTheme() {
                if (props.theme == null) {
                    store.dispatch("theme/toggle", 'moon');
                } else {
                    store.dispatch("theme/toggle", '');
                }
            },
            toggleLanguage
        }
    },
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}

.header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    margin: 0 auto;

    @font-palette-values --Grays {
        font-family: Rocher;
        base-palette: 9;
    }

    .vivi {
        font-family: "Rocher";
        font-palette: --Grays;
    }

    .btn-shadow {
        box-shadow: $boxShadowBtn;
    }


}
</style>