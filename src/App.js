import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import Item from './components/Item.js';
import ItemList from './components/ItemList.js';
import MyButton from './components/MyButton.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <div className = "App" >  
    <NavBar/>
    <ItemCount/>
    <MyButton/>
    <ItemListContainer greeting = "Productos"/>
     </div>);
}

export default App;