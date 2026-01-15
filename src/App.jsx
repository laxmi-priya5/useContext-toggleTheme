import './App.css'
import { createContext, useContext,useState } from 'react';


const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
   <div className='form'>
    <ThemeContext.Provider value={{theme , setTheme}}>
      <Form />
    </ThemeContext.Provider>
   </div>
    
 
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <ToggleButton />
      <br /><br />
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}


function Panel({ title, children }) {
  const {theme} = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({children}){
  
  const {theme}  = useContext(ThemeContext)
  const className = 'button-'+theme
  return(
    <button className={className}>
     {children}
    </button>
  )
}

function ToggleButton(){
  const {theme , setTheme} = useContext(ThemeContext);
  return(
    <button onClick= {()=>setTheme((prev)=>(prev === 'dark')?'light':'dark')}
    className={`button-${theme}`}>  Switch to {theme === "dark" ? "Light" : "Dark"} Mode</button>
  )
}