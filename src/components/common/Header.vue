<template>
    <n-layout class="w-full max-w-screen-2xl fixed z-50">
        <div class="header-box py-4 px-6">
            <n-space>
                <n-button quaternary strong circle class="md:hidden btn-shadow" @click="showMenu = !showMenu">
                    <n-icon size="20">
                        <Apps24Filled />
                    </n-icon>
                </n-button>
                <div class="md:block hidden text-3xl vivi cursor-pointer" @click="$router.push('/')">
                    Vivi
                </div>
                <n-button class="md:block hidden" quaternary @click="$router.push('/')">
                    <span class="font-bold" :class="currentRouteStr != '/' ? 'text-gray-500' : ''">
                        {{ $t('header.find') }}
                    </span>
                </n-button>
                <n-button class="md:block hidden" quaternary @click="$router.push('/file')">
                    <span class="font-bold" :class="currentRouteStr != '/file' ? 'text-gray-500' : ''">
                        {{ $t('header.file') }}
                    </span>
                </n-button>
                <n-button class="md:block hidden" quaternary @click="$router.push('/nft')">
                    <span class="font-bold" :class="currentRouteStr != '/nft' ? 'text-gray-500' : ''">
                        {{ $t('header.nft') }}
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
                <n-dropdown trigger="hover" :options="languageOptions" @select="handleLanguageSelect($event, $i18n)">
                    <n-button quaternary class="btn-shadow">{{ languageStr }}</n-button>
                </n-dropdown>
                <n-button quaternary class="btn-shadow bg-indigo-700 text-white">
                    {{ $t('header.cw') }}
                </n-button>
            </n-space>
        </div>
        <n-drawer v-model:show="showMenu" width="50%" placement="left">
            <n-drawer-content>
                <n-button class="w-full py-6" quaternary @click="$router.push('/'); showMenu = false;">
                    <span class="font-bold" :class="currentRouteStr != '/' ? 'text-gray-500' : ''">
                        {{ $t('header.find') }}
                    </span>
                </n-button>
                <n-button class="w-full py-6" quaternary @click="$router.push('/file'); showMenu = false;">
                    <span class="font-bold" :class="currentRouteStr != '/file' ? 'text-gray-500' : ''">
                        {{ $t('header.file') }}
                    </span>
                </n-button>
                <n-button class="w-full py-6" quaternary @click="$router.push('/nft'); showMenu = false;">
                    <span class="font-bold" :class="currentRouteStr != '/nft' ? 'text-gray-500' : ''">
                        {{ $t('header.nft') }}
                    </span>
                </n-button>
            </n-drawer-content>
        </n-drawer>
    </n-layout>
</template>

<script lang="ts">
import { WeatherSunny24Regular, WeatherMoon24Regular, Apps24Filled } from '@vicons/fluent';
import { useStore } from 'vuex';
import router from '../../router';
export default {
    props: ["theme"],
    components: {
        WeatherSunny24Regular,
        WeatherMoon24Regular,
        Apps24Filled
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
                label: '??????',
                key: 'zh_CN'
            }
        ]
        let languageStr: any = ref(null);

        const langStr = (key: string) => {
            switch (key) {
                case 'zh_CN':
                    languageStr.value = '??????';
                    break;
                case 'en_US':
                    languageStr.value = 'En';
                default:
                    break;
            }
        }
        langStr(store.state.theme.localeStr)

        const toggleLanguage = (language: string) => {
            store.dispatch("theme/toggleLanguage", language);
        }

        const handleLanguageSelect = (key: string, i18n: any) => {
            i18n.locale = key;
            toggleLanguage(key);
            localStorage.setItem('lang', key)
            langStr(key);
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
            toggleLanguage,
            showMenu: ref(false)
        }
    },
}
</script>

<style lang="scss" scoped>
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