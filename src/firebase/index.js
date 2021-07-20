import firebase from 'firebase/app';
import '@firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCS2LL6ddNflUGY14cYpmU3ua33OXDIBYg",
    authDomain: "coderhouse-ecommerce-7e12e.firebaseapp.com",
    projectId: "coderhouse-ecommerce-7e12e",
    storageBucket: "coderhouse-ecommerce-7e12e.appspot.com",
    messagingSenderId: "428453649973",
    appId: "1:428453649973:web:a2edae72ece528457c5b7c",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
export async function addItemFirebase(order) {
  const db = getFirestore();
  const newOrder = db.collection('order');
  newOrder
    .add({ items: order })
    .then(({ id }) => {
      return id;
    })
    .catch((err) => console.log(err));
}
