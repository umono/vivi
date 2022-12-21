<template>
    <div class="relative overflow-hidden">
        <n-card content-style="padding: 0;" class="rounded-2xl">
            <div class="w-full rounded-t-2xl max-h-96 overflow-hidden">
                <n-image object-fit="cover" :src="'https://picsum.photos/500/' + (index + 1) + '00'" lazy />
            </div>
            <div class="h-12">
                <div class="pt-3 px-3 truncate">
                    0x4249a22a6080d93e6fd566c845f4553a6e4b24ad
                </div>
            </div>
            <n-space class="pl-2 pb-3">
                <n-button size="tiny" secondary>html</n-button>
                <n-button size="tiny" secondary>风景</n-button>
            </n-space>
        </n-card>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['index'],
    setup() {
        return {}
    }
})
</script>

<style scoped>

</style>