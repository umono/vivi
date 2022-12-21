import otherRoutes from './other'
import notFound from '@/views/site/NotFound.vue'
import Home from '@/views/home/Index.vue'

import Layout from '@/components/common/Layout.vue'

const routes = [{
    path: '/',
    component: Layout,
    children: [
        {
            path: '',
            component: Home,
        },
        ...otherRoutes,
        {
            path: '/:pathMatch(.*)*',
            name: "NotFound",
            component: notFound,
        }
    ]
},
]
export default routes