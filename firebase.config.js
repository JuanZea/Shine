import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh6XSkXSsmGQQDmXxZH6KZHKlh0l_ZbPg",
  authDomain: "shine-yz.firebaseapp.com",
  projectId: "shine-yz",
  storageBucket: "shine-yz.appspot.com",
  messagingSenderId: "637721317657",
  appId: "1:637721317657:web:de50a12a9634c43fe57588",
  measurementId: "G-JMGKJQX9KM"
};

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            setup(user).then(() => {
                resolve(user);
            });
        }, reject);
    })
}

const setup = async (user) => {
    if (user) {
        // store.commit('set', {key: 'loading', value: 'Verificando rol'});
        // const querySnapshot = await db.collection("users").doc(user.uid).get();
        // store.commit('set', {key: 'rol', value: querySnapshot.data().rol});
        // store.commit('set', {key: 'loading', value: 'Optimizando conexión'});
        // subscribe();
        // store.commit('set', {key: 'loading', value: false});
    } else {
        // unsubscribe()
    }
}