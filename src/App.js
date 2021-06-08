import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <div className = "App" >  
    <NavBar/>,
    <ItemListContainer greeting = "Productos"/>
     </div>);
}

export default App;