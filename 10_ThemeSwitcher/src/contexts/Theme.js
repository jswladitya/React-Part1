//making of context --> last wale folder me 2 separate files bana ke kaaam kia tha yaha 1 file me hi kaam ho jaya

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // yaha default value daali ja sakti he
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
    //means jab bhi koi component is context ko call karega use ye 3 toh milegi hi
})

export const ThemeProvider = ThemeContext.Provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
    //ye hamara useTheme hook apne aap themeContext ke variable aur methods ko access kar sakta he
} 