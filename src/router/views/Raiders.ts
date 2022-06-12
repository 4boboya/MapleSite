import { RouteRecordRaw } from 'vue-router'
import Raiders from "@/views/Raiders.vue";

export const raiders: RouteRecordRaw = {
    path: "/raiders",
    component: Raiders,
    children: [
        {
            path: '',
            name: 'raiders',
            component: () => import('@/views/raiders/Main.vue'),
            meta: {
                title: "新楓之谷-攻略-Meowl"
            }
        },
    ],
}