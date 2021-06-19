import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import Item from './components/Item.js';
import ItemList from './components/ItemList.js';
import MyButton from './components/MyButton.js';
import Api from './components/Api.js';
import Map from './components/Map.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <div className = "App" >  
    <NavBar/>
    <ItemCount/>
    <MyButton/>
    <ItemListContainer greeting = "Productos"/>
    <Map/>
    <Api/>
    </div>);
}

export default App;
