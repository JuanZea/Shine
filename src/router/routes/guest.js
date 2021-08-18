import GuestLayout from "../../views/guest/Layout.vue";
import Login from "../../views/guest/Login.vue";

const children = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
];

export default [
    {
        path: '/',
        component: GuestLayout,
        children: children,
        redirect: {name: 'login'}
    },
];