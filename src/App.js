import './App.css';
import React from 'react';
import AppRouter from './router/AppRouter';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import Item from './components/Item.js';
import ItemList from './components/ItemList.js';
import MyButton from './components/MyButton.js';
import Api from './components/Api.js';
import Map from './components/Map.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './components/CartContext';
import Home from './pages/Home';
import Galery from './pages/Galery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
    return ( 
        <div>
            <AppRouter/>
        </div>
        );
}

export default App;
