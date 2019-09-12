import React from 'react';
import "./App.css";

// Components
import { Display } from './Components/MainDisplay/Display'

function App() {

  return (
    <div className="App">
    
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <Display />
    </div>
  );
}

export default App;
