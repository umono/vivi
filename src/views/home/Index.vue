<template>
    <div class="pt-20">
        <div class="m-auto max-w-screen-2xl w-11/12">
            <div class="relative rounded-xl overflow-auto">
                <div class="relative">
                    <div class="columns-3xs gap-8 space-y-8">
                        <FileCard v-for="(item,index) in 14" :index="index"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import FileCard from './components/fileCard.vue';
export default defineComponent({
    components: { FileCard },
    name:"HOME",
    setup() {
        return {
        }
    }
})
</script>

<style lang="scss" scoped>

</style>