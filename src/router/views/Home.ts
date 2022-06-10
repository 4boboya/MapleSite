import { RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue";

export const home: RouteRecordRaw = {
    path: "/",
    component: Home,
    meta: {
        title: "新楓之谷-Meowl"
    }
}