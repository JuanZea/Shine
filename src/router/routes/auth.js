import {authentication} from "../middleware";
import AuthLayout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";
import MyProfile from "../../views/auth/MyProfile.vue";
import showFilms from "../../views/auth/showFilms.vue";
import About from "../../views/auth/About.vue"
import AdminOptions from "../../views/auth/AdminOptions.vue";

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
    },
    {
        path: '/film/:id',
        name: 'showfilms',
        component: showFilms,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/admin-options',
        name: 'adminOptions',
        component: AdminOptions,
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