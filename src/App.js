import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>

    </div>
  );
}
// component declear 
function LoadCountries() {
  // 1: state declear
  const [countries, setCountries] = useState([])
  // 2: useEffect

  useEffect(() => {
    // 3: Writing fetch() inside useEffect() & setting loaded data

    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
  return (
    <div>
      <h1>Visiting Every countries of the worlds</h1>
      <h2>Available Countries :{countries.length}</h2>
      {/* for dynamic */}
      {/* Display countries in a simple way */}

      {

      }
    </div>
  )
}

export default App;
