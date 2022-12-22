<template>
    <div>
        <div class="py-2.5  px-3 flex justify-between rounded-md items-center">
            <div class="w-1/5 flex cursor-pointer">
                <n-image 
                v-if="item.image_url" class="rounded-md h-12 w-12 bg-gray-200 overflow-hidden"
                    :src="item.image_url" object-fit="cover" lazy />
                <div v-else class="rounded-md h-12 w-12 bg-gray-200">
                </div>
                <div class="pl-2 max-w-[100px] font-bold" @click="goEthHashScan(item)">
                    <div class="font-clamp">
                        {{ item.name || '' }}
                    </div>
                </div>
            </div>
            <div class="w-1/5">
                <div class="font-bold h-6">
                    {{ item.eth_price || '' }}ETH
                </div>
                <div class="text-xs h-6">
                    {{ item.usd_price ? ('$' + item.usd_price) : '-' }}
                </div>
            </div>
            <div v-if="item.seller_address" class="w-1/5 truncate cursor-pointer"
                @click="goAccount(item.seller_address)">
                {{ item.seller_address.slice(0, 4) }}..{{ item.seller_address.slice(-4) }}
            </div>
            <div v-if="item.buyer_address" class="w-1/5 truncate cursor-pointer" @click="goAccount(item.buyer_address)">
                {{ item.buyer_address.slice(0, 4) }}..{{ item.buyer_address.slice(-4) }}
            </div>
            <div class="w-1/5">
                {{ format(item.timestamp, 'zh_CN') }}
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
        return {
            format,
            goEthHashScan(item: any) {
                const url = "https://etherscan.io/tx/" + item.transaction_hash;
                window.open(url, "_blank");
            },
            goAccount(address: any) {
                const url = "https://etherscan.io/address/" + address;
                window.open(url, "_blank");
            }
        }
    }
})
</script>

<style  lang="scss"  scoped>

</style>