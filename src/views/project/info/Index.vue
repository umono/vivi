<template>
    <div class="m-auto max-w-screen-2xl pt-40 ">
        <div class="m-auto flex w-11/12 md:w-3/4">
            <n-skeleton class="w-32 h-32 md:w-60 md:h-60 lg:w-80 lg:h-80" v-if="loading" />
            <img class="w-32 h-32 md:w-60 md:h-60 lg:w-80 lg:h-80" v-else
                src="https://campaigns.liveart.xyz/hubfs/huangyuxing.jpg" />
            <div class="ml-8 w-4/6 " v-if="loading">
                <n-skeleton class="md:h-14 w-2/4" />
                <n-skeleton text  class="mt-4 md:mt-8 w-3/4" />
            </div>
            <div class="ml-8 w-4/6" v-else>
                <n-ellipsis class="font-bold text-lg xl:text-5xl lg:text-3xl md:text-2xl" :line-clamp="2">
                    Meta-morphic: The Genesis of Huang Yuxing
                </n-ellipsis>
                <n-ellipsis class="md:mt-4" :line-clamp="2">
                    LiveArt and Huang Yuxing Announce Exclusive NFT Collection
                </n-ellipsis>
            </div>
        </div>

        <!-- card list item -->
        <div class="m-auto w-1/2 mt-20">
            <div class="justify-between">
                <n-card class="shadow" title="9-28 mint">
                    t
                </n-card>
                <n-card class="shadow top-8" title="10-22 public sale">
                    
                </n-card>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        const loading = ref(true);

        return {
            loading,
        }
    },
    mounted() {
        let that = this;
        setTimeout(() => {
            that.loading = false;
        }, 1500)
    }
})
</script>

<style lang="scss" scoped>

</style>