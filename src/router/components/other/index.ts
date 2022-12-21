
export default [
    {
        path: '/file',
        name: "File",
        component: () => import('@/views/file/Index.vue'),
    },
    {
        path: '/project/:name',
        name: "Project",
        component: () => import('@/views/project/info/Index.vue'),
    }
]