import { useState } from "react";
export const LoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handledLogin = () => {
        setLoggedIn(true);
    };
    const handledLogout = () => {
        setLoggedIn(false);
    };
    return (
        <div>
            <button onClick={handledLogin}>Login</button>
            <button onClick={handledLogout}>Logout</button>
            <div>User is {loggedIn ? "Logged in": "Logged out"}</div>
        </div>
    );
}