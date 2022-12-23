<template>
    <div>
        <div class="py-2.5  px-3 flex justify-between rounded-md items-center">
            <div class="md:w-1/5 sm:w-2/4 flex cursor-pointer">
                <n-image width="48"
                v-if="item.image_url"
                 :key="item.contract_address + item.token_id"
                    style="min-width:48px;" class="rounded-md h-12 bg-gray-200 overflow-hidden" :src="item.image_url"
                    object-fit="cover" lazy />
                <div v-else class="rounded-md h-12 bg-gray-200" style="min-width:48px;">
                </div>
                <div class="pl-2 md:w-full w-[100px] min-w-[150px] font-bold" @click="goEthHashScan(item)">
                    <div class="font-clamp">
                        {{ item.name || '' }}
                    </div>
                </div>
            </div>
            <div>
                <div class="font-bold h-6">
                    {{ item.eth_price.slice(0, 6) || '' }}ETH
                </div>
                <div class="text-xs h-6">
                    {{ item.usd_price ? ('$' + item.usd_price) : '-' }}
                </div>
            </div>
            <div class="md:block hidden  truncate cursor-pointer" @click="goAccount(item.seller_address)"
                v-if="item.seller_address">
                {{ item.seller_address.slice(0, 4) }}..{{ item.seller_address.slice(-4) }}
            </div>
            <div class="md:block hidden  truncate cursor-pointer" @click="goAccount(item.buyer_address)"
                v-if="item.buyer_address">
                {{ item.buyer_address.slice(0, 4) }}..{{ item.buyer_address.slice(-4) }}
            </div>
            <div class="w-[80px] text-center">
                {{ format(item.timestamp, localeStr) }}
                <div class="md:hidden block">
                    {{ item.buyer_address.slice(0, 4) }}..{{ item.buyer_address.slice(-4) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { format } from 'timeago.js';

export default defineComponent({
    props: {
        item: {
            type: Object,
            default: {},
        }
    },
    setup() {
        const localeStr: any = inject("localeStr");
        return {
            format,
            goEthHashScan(item: any) {
                const url = "https://etherscan.io/tx/" + item.transaction_hash;
                window.open(url, "_blank");
            },
            goAccount(address: any) {
                const url = "https://etherscan.io/address/" + address;
                window.open(url, "_blank");
            },
            localeStr
        }
    }
})
</script>

<style  lang="scss"  scoped>

</style>