import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Greet name="Solomon" isLoggedIn={true}/> 
      <Person name={personName} />
      <PersonList names = {personList} />
      <Status status="loading" />
      <Header>Placeholder Text</Header>
      <Oscar>
        <Header >Oscar goes to the United States</Header>
      </Oscar>
      <Button handleClick={(event,id) => console.log("Button clicked",event,id)}></Button>
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{border: '1px solid black', padding:"1rem"}} />
    </div>
  );
}

export default App;
