  
const fetch = require('node-fetch');
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyCS2LL6ddNflUGY14cYpmU3ua33OXDIBYg",
    authDomain: "coderhouse-ecommerce-7e12e.firebaseapp.com",
    projectId: "coderhouse-ecommerce-7e12e",
    storageBucket: "coderhouse-ecommerce-7e12e.appspot.com",
    messagingSenderId: "428453649973",
    appId: "1:428453649973:web:a2edae72ece528457c5b7c",
});

const db = firebase.firestore();

fetch('https://api.mercadolibre.com/sites/MLA/search?q=perfumes')
  .then((data) => data.json())
  .then((data) => {
    const temp = data.results;
    //console.log(temp);
    temp.forEach(function (obj) {
      db.collection('items')
        .add({
          id: obj.id,
          name: obj.title,
          price: obj.price,
          category: 'Perfumes',
          stock: obj.available_quantity,
          photo_url: obj.thumbnail,
          thumb: obj.thumbnail,
          description:
            'Ipsum velit voluptate explicabo libero quod nisi Dignissimos provident mollitia dicta laboriosam adipisci Facilis eveniet quidem vel animi qui ut. Explicabo nihil dignissimos magni excepturi distinctio laborum? Perferendis officia magnam?',
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    });
  });