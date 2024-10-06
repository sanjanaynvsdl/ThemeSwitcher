import { useContext, createContext } from 'react'
//So, In just one file, we can create the context, provide to the provider
//(without importing and exporting or explicitly mentioning like in the last project)
//And consume it too!
//Compare with ContextAPI project in last repo to understand the difference

//1. Creating a context
//In prev project we were passsing the parameters which should be accessed globally in provider!
//Instead we can pass it in the createCOntext itself

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider;


//This makes easier (coz earlier we were importing things again and again)
export default function useTheme() {
    return useContext(ThemeContext);
}
 