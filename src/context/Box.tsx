import { useContext } from "react";
import {ThemeContext} from "./ThemeContext";

export const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{color: theme.primary.main, background: theme.secondary.text}}>Theme Context</div>
    );
}