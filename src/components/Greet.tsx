import React from 'react';

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
};

export const Greet = (props: GreetProps) => {
    let message;
    if(props.messageCount === undefined){
        message = 0
    }
    return (
        <h2>
          {props.isLoggedIn ? `Hello ${props.name} you have ${props.messageCount || message } unread messages`: 'Welcome Guest' }
        </h2>     
    );
}