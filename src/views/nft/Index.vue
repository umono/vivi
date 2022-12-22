<template>
    <div class="pt-20 m-auto max-w-screen-lg overflow-hidden">
        <div class="rocher-number text-4xl h-16">
            <n-button class="animate-bounce">测试</n-button>
            <n-progress type="line" v-if="percentage > 0" color="rgb(163 163 163)" :border-radius="0"
                :fill-border-radius="0" :percentage="percentage" :show-indicator="false" />
        </div>
        <div ref="container">
            <Item :class="notInit(item) ? 'to-' + (index + 1) : ''" v-for="(item, index) in lists"
                :data-v-name="'n-l-i' + (index + 1)" :key="'n-l-i' + index" :item="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { NftTradeData } from '../../api/http';
import Item from "./components/item.vue";
export default defineComponent({
    name: "NftSale",
    components: { Item },
    setup() {
        console.log("nft list")
        const maxLimit = 1000;
        const uidArr = ref([] as any);
        let oldUidArr: any = [];
        const loading = ref(true);
        const lists = ref([] as any);
        let percentage = ref(0)

        const copy = async () => {
            oldUidArr = JSON.parse(JSON.stringify(uidArr.value));
            const { results } = await NftTradeData();
            if (results) {
                if (lists.value.length <= 0) {
                    lists.value = results;
                    for (let index = 0; index < results.length; index++) {
                        const uid = results[index].contract_address + results[index].token_id;
                        uidArr.value.push(uid);
                    }
                } else {
                    handleArr(results);
                }
            }
        }
        let number = 0;

        const handleArr = (arr: Array<any>) => {
            const array = arr.reverse()
            for (let index = 0; index < array.length; index++) {
                const uid = array[index].contract_address + array[index].token_id;
                if (uidArr.value.indexOf(uid) === -1) {
                    lists.value.unshift(array[index])
                    uidArr.value.push(uid);
                }
            }
            percentage.value = 0;
            number = 0;
        }

        onMounted(() => {
            copy();
        });

        let refreshTimer = setInterval(() => {
            if (number >= 105) {

                copy();
            } else {
                number = number + 1;
                percentage.value = number;
            }
        }, 50);

        onUnmounted(() => {
            clearInterval(refreshTimer)
        })

        const notInit = (item: any) => {
            const uid = item.contract_address + item.token_id;
            return oldUidArr.indexOf(uid) === -1;
        }

        return {
            loading,
            refreshTimer,
            lists,
            notInit,
            percentage
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
.font-clamp {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}

.rocher-number {
    font-family: "Rocher";
    font-variation-settings: "BVEL" 0, "SHDW" 0;
}

@for $i from 1 through 10 {
    $init: 200px;

    .to-#{$i} {
        animation: (tran-#{$i}) 0.5s cubic-bezier(0.4, 0, 0.6, 1) 1;
        transition: all 1s ease-in-out;
    }

    @keyframes tran-#{$i} {

        0%,
        to {
            transform: translateX($init + ((20-$i) *50));
            box-shadow: boxShadow;
        }

        50% {
            transform: translateX(-50px - ($i * 5));
            box-shadow: boxShadow;
        }

        100% {
            transform: translateX(0);
            box-shadow: none;
            box-shadow: boxShadow;
        }
    }
}
</style>