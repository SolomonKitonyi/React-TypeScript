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
import { Box } from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserProviderContext } from './context/UserContext';
import { User } from './context/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumbers } from './components/restrictions/RandomNumbers';
import { Toast } from './templateliterals/Toast';
import { CustomButton } from './html/Button';

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
      <CustomButton variant={'primary'}>label</CustomButton>
      <Toast position="center"/>
      <RandomNumbers value={10} isPositive/>
      <List items={["Batman","Superman","Wonder Woman"]} onClick={(item) => console.log(item)} />
      <List items={[1,2,3]} onClick={(item) => console.log(item)} />
      <Private isLoggedIn={false} component={Profile}/>
      <Counter message="The counter value is"/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserProviderContext>
        <User />
      </UserProviderContext>
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
