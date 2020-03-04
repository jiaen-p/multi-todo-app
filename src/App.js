import React from 'react';
import './App.css';
import Fetch from './components/fetch'
require('dotenv').config()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Haloo!</h1>
        <p>Hi there!</p>
      </header>
      <Fetch />
    </div>
  );
}

export default App;
