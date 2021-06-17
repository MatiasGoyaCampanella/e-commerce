import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import Item from './components/Item.js';
import ItemList from './components/ItemList.js';
import MyButton from './components/MyButton.js';
import Map from './components/Map.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
    return ( <div className = "App" >  
    <NavBar/>
    <ItemCount/>
    <MyButton/>
    <ItemListContainer greeting = "Productos"/>
    <Map/>
    </div>);
}
class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons = [],
        };
    }
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then(response => this.setState(response.results));
        
    })

    componentDidUpdate(prevProps, prevState) {
        if(preveState.statel !== this.state.statel) {
            console.log("ha cambiado")
        }
    }

    handleClick() {
      this.setState({ statel:"hola"});
    }
    render() {
        return (
            <div className="App">
                {this.state.pokemons?.map((pokemon, index) => {
                return (
                    <>
                    <Card name={pokemon.name} url={pokemon.url} />
                    <button onClick={() => this.setState({pokemons: this.state.pokemons.slice(0,index)})}>
                        x
                    </button>
                    </>
                );
                })}
            </div>
        );
    }

}
export default App;
export default ClassApp;