import { useEffect, useState } from 'react'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'
import { ThemeProvider } from './Contexts/theme'

function App() {

  const [themeMode,setThememode]=useState('light')

  const darkTheme= ()=>{
    setThememode('dark');

  }

  const lightTheme = ()=> {
    setThememode('light')
  }

  //Need functionality right!
  //On every-change we want to re-render the theme so, using useEffect and providing dependency array!
  useEffect(()=>{
    //Clear the theme what-ever is present in it first!
    document.querySelector('html').classList.remove('dark',"light")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])


  //We, need to take the values
  return (
    <ThemeProvider value={{themeMode,darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
