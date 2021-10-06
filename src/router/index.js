import { createRouter, createWebHistory } from "vue-router";
import guest from "./routes/guest";
import auth from "./routes/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...guest,
        ...auth
    ]
});

export default router;