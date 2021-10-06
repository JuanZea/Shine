import "../../firebase.config";
import firebase from "firebase/app";
import { useAdmin } from "../use";

const authentication = async (to, from, next) => {
    if (await firebase.getCurrentUser()) next();
    else next({name: 'login'});
}

const isAdmin = async (to, from, next) => {
    const { isAdmin } = useAdmin();
    if (isAdmin.value) next();
    else next({name: 'home'});
}

export {authentication, isAdmin}