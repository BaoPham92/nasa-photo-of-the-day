import React, { useEffect } from 'react';
import NasaAPI from './calls'
import "./App.css";

function App() {

  // useEffect
  useEffect(() => {
    // API key in case Rate limited
    // NasaAPI.fetchKey('1996', '7', '10');

    // Demo Key
    // NasaAPI.fetchDemo('1996', '7', '10');
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
