import React from 'react';
import './App.css';
import { Greet } from './components/Greet';

const  App = () => {
  return (
    <div className="App">
      <Greet name="Solomon" messageCount={10} isLoggedIn={false}/> 
    </div>
  );
}

export default App;
