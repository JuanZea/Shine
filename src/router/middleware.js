import "../../firebase.config";
import firebase from "firebase/app";

const authentication = async (to, from, next) => {
    if (await firebase.getCurrentUser()) next();
    else next({name: 'login'});
}

export {authentication}