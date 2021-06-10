import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <div className = "App" >  
    <NavBar/>
    <ItemCount/>
    <ItemListContainer greeting = "Productos"/>
     </div>);
}

export default App;