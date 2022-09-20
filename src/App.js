import React, {useState}from 'react'
import Books from './Components/Books';
import Home from './Components/Home';
import './App.css'

function App() {
  const [active, setActive] = useState([]);


  return (
    <div className='App'>
      <nav className='navbtn'>
        <button className='btn' onClick={()=> setActive("Home")}>Home</button>
        <button className='btn' onClick={()=> setActive("Books")}>Books</button>
      </nav>
      <div>
        {active === "Home" && <Home title="" />}
        {active === "Books" && <Books title="" />}
      </div>
    </div>
   
  )
}

export default App