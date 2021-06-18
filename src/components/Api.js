import React from 'react'

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
export default ClassApp;