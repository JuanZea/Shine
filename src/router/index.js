import { createRouter, createWebHistory } from "vue-router";
import guest from "./routes/guest";
import auth from "./routes/auth";
import Admin from "../views/Admin.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/admin",
            name: "admin",
            component: Admin
        },
        ...guest,
        ...auth
    ]
});

export default router;