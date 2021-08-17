import firebase from "firebase/app";

const register = (name, email, password) => {
    console.log(name, email, password)
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(user => {
    //         // Signed in
    //         console.log('SING')
    //         // ...
    //     })
    //     .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // ..
    //     });
}

const login = (email, password) => {

}

export default function useAuthentication() {
    return {
        register,
        login
    }
}