import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
    </div>

    <div>
    <Filter/>
    </div>

    <div>
      <Cards/>
    </div>
      
    </>
  )
}

export default App
