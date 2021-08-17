import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/guest/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "login",
            component: Login,
        },
    ],
})

export default router;