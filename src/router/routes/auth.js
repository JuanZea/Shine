import {authentication} from "../middleware";
import AuthLayout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";

const children = [
    {
        path: '/home',
        name: 'home',
        component: Home,
    }
];

export default [
    {
        path: '/',
        component: AuthLayout,
        children: children,
        beforeEnter: [authentication]
    },
];