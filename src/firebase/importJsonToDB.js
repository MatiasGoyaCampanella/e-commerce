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

const perfumes = [
  {
    id: '1',
    category: 'perfumes',
    name: 'shot',
    description: 'bueno',
    precio: '899',
    stock: '10',
    photo_url: 'http://',
    thumb: 'http://',
  },
];

chocolates.forEach(function (obj) {
  db.collection('items')
    .add({
      id: obj.id,
      name: obj.name,
      description: obj.description,
      price: obj.precio,
      category: obj.category,
      stock: obj.stock,
      photo_url: obj.photo_url,
      thumb: obj.thumb,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});