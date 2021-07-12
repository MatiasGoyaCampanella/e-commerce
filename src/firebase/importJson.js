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
      category: 'Perfumes',
      name: 'Lacoste',
      description: 'bueno',
      precio: '1870',
      stock: '33',
      photo_url: 'http://',
      thumb: 'http://',
    },
    {
      id: '2',
      category: 'Perfumes',
      name: 'Boss',
      description: 'bueno',
      precio: '3486',
      stock: '32',
      photo_url: 'http://',
      thumb: 'http://',
    },
    {
      id: '3',
      category: 'Perfumes',
      name: 'Sugus',
      description: 'bueno',
      precio: '2300',
      stock: '13',
      photo_url: 'http://',
      thumb: 'http://',
    },
    {
      id: '4',
      category: 'Perfumes',
      name: 'Millon',
      description: 'bueno',
      precio: '4330',
      stock: '32',
      photo_url: 'http://',
      thumb: 'http://',
    },
    {
      id: '5',
      category: 'Perfumes',
      name: 'Sauvage',
      description: 'bueno',
      precio: '6432',
      stock: '65',
      photo_url: 'http://',
      thumb: 'http://',
    },
  ];
  
  perfumes.forEach(function (obj) {
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