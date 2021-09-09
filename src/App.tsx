import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

const  App = () => {
  const personName = {
    first: "Solomon",
    last: "Kitonyi"
  };
  const personList = [
    {
      first: "Solomon",
      last: "Kitonyi"
    },
    {
      first: "Joyce",
      last: "Munyao"
    },
    {
      first: "John",
      last: "Wayne"
    },

  ]
  return (
    <div className="App">
      <Greet name="Solomon" messageCount={10} isLoggedIn={false}/> 
      <Person name={personName} />
      <PersonList names = {personList} />
    </div>
  );
}

export default App;
