import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
};

export const User = () => {
    const [user,setUser] = useState<AuthUser>({} as AuthUser);
    const handledLogin = () => {
        setUser({
            name: 'Solomon',
            email: 'example@gmail.com'
        });
    };
    const handledLogout = () => {
        setUser({} as AuthUser);
    };
    return (
        <div>
            <button onClick={handledLogin}>Login</button>
            <button onClick={handledLogout}>Logout</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    );
}