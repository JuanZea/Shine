import {authentication} from "../middleware";
import AuthLayout from "../../views/auth/Layout.vue";
import Home from "../../views/auth/Home.vue";
import MyProfile from "../../views/auth/MyProfile.vue";
import showFilms from "../../views/auth/showFilms.vue";


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