import {authentication} from "../middleware";
import AuthLayout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";
import MyProfile from "../../views/auth/MyProfile.vue";


const children = [
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/my-profile',
        name: 'myProfile',
        component: MyProfile,
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