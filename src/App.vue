<template>
  <n-config-provider preflight-style-disabled :inline-theme-disabled="true" :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides" :locale="store.state.theme.locale"
    :date-locale="store.state.theme.dateLocale">
    <n-message-provider>
      <MessageApi />
    </n-message-provider>
    <div class="m-auto max-w-screen-2xl">
      <Header :theme="theme" :locale="store.state.theme.locale" />
      <div class="pt-[98px]"></div>
      <router-view >
      </router-view>
    </div>
    <n-global-style />
  </n-config-provider>
</template>

<script lang="ts">
import type { NLocale, NDateLocale, } from 'naive-ui';

import MessageApi from "@/components/common/message-api.vue";
import darkThemeOverrides from "./styles/theme/dark";
import lightThemeOverrides from "./styles/theme/light";
import { useStore } from "vuex";

export default defineComponent({
  components: { MessageApi },
  setup() {
    const store = useStore();

    store.dispatch('theme/init')
    let theme = computed(() => {
      return store.getters['theme/getTheme'];
    })
    return {
      locale: ref<NLocale | null>(null),
      dateLocale: ref<NDateLocale | null>(null),
      darkThemeOverrides: darkThemeOverrides,
      lightThemeOverrides: lightThemeOverrides,
      theme,
      store
    }
  }
})
</script>
<style lang="scss">
@import '@/styles/tailwind.css';
</style>