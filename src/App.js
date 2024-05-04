import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function MyPokemon(props){
    
  return <div className="main1">  
    <h2> {props.name} </h2>
    <img src={props.image} width="80%" alt="Pokemon"></img>    
    <h3>{props.attribute}</h3>
    {/*<button>test1</button> */}
  </div>

}

function SearchPokemon(){
  const [name, setName] = useState("pikachu")
  const [image, setImage] = useState("")
  const [attribute, setAttribute] = useState("")

    function ChangeState(e) { setName(e.target.value.toLowerCase()) }

    function fetchP(){
      fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then(response => response.json())
      .then(data => {
        setImage(data.sprites.front_default)
        setAttribute(data.types[0].type.name)
        
      })
    }
  
  return(<div>Enter Pokemon: <input value={name} onChange={ChangeState}></input>
  <button onClick={fetchP}>Submit</button>
  
  <MyPokemon name={name} image={image} attribute={attribute}></MyPokemon>
  </div>)

    
  }




function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <main>
    <h1>Pokedex</h1>
      <SearchPokemon></SearchPokemon>
      <br></br>
      <MyPokemon name="Bulbasaur" image="pokemon/001.png" attribute="Grass"></MyPokemon>
      <MyPokemon name="Charmander" image="pokemon/004.png" attribute="Fire"></MyPokemon>
      <MyPokemon name="Pikachu" image="pokemon/025.png" attribute="Electric"></MyPokemon>
      <MyPokemon name="Rabbit" image="pokemon/025.png" attribute="Electric"></MyPokemon>
    </main>
        

      </header>
    </div>
  );
}

export default App;
