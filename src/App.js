import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function MyWeather(props){
    
  return <div className="main1">  
    <h2> {props.city} </h2>  
    <h3>{props.temp}</h3>
    <h3>{props.percip}</h3>
    
  </div>

}

function SearchWeather(){
  const [city, setCity] = useState("Boston") 
  const [temp, setTemp] = useState("")
  const [percip, setPercip] = useState("")

    function ChangeState(e) { setCity(e.target.value.toLowerCase()) }

    function fetchP(){
      fetch("https://goweather.herokuapp.com/weather/" + city)
      .then(response => response.json())
      .then(data => {
        setTemp(data.forecast[0].temperature)
        setPercip(data.description)
        
      })
    }
  
  return(<div>Enter City: <input value={city} onChange={ChangeState}></input>
  <button onClick={fetchP}>Submit</button>
  
  <MyWeather city={city} temp={temp} percip={percip}></MyWeather>
  </div>)

    
  }




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <main>
    <h1>The Weather</h1>
      <SearchWeather></SearchWeather>
      <br></br>
      {/*<MyWeather city="Boston" temp="13.1" percip="rain"></MyWeather> */}
    </main>
        

      </header>
    </div>
  );
}

export default App;
