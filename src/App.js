import React from 'react';
import "./App.css";

// Components
import { Display } from './Components/MainDisplay/Display'

// Styled components
import style from './Components/StyledComponents/StyledComponents'

function App() {

  return (
    <style.App>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Display />
    </style.App>
  );
}

export default App;
