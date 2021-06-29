/*
import React, { useEffect, useState } from "react";
import Card from "./Card";
/*
class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            statel: "",
        };
    }
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then(response => this.setState(response.results));
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(preveState.statel !== this.state.statel) {
            console.log("ha cambiado")
        }
    }

 //   handleClick() {
 //     this.setState({ statel:"hola"});
  //  }
    render() {
        return (
            <div className="App">
                {this.state.pokemons ? this.state.pokemons?.map((pokemon, index) => {
                return (
                    <>
                    <Card 
                    name={pokemon.name} 
                    url={pokemon.url} />
                    <button onClick={() => this.setState({pokemons: this.state.pokemons.filter(
                        (poke) => poke.name !== pokemon.name
                    ))})}>
                        x
                    </button>
                    </>
                );
                })}
            </div>
        );
    }

}
export default ClassApp;

export default function AppHooks() {
    const [name, setName] = useState("Hooks");

    useEffect (() => {
        document.title = name;
    }, []);

    useEffect(() =>{
        document.title =name;
    }, [name]);
    function handleChange(e) {
        setName(e.target.value);
    }
    return (
    <div className="App">
    <input value={name} onChange={handleChange} />
    </div>
    );
}*/