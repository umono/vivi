
export default [
    {
        path: '/file',
        name: "File",
        component: () => import('@/views/file/Index.vue'),
    },
    {
        path: '/nft/',
        name: "NftSale",
        component: () => import('@/views/nft/Index.vue'),
    }
]