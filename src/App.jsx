import { useState } from 'react'
import './App.css'
import Febrero from './Components/Febrero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Marzo from './Components/Marzo'
import Navbar from './Components/Navbar'
import Abril from './Components/Abril'
import Mayo from './Components/Mayo'
import Junio from './Components/Junio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Junio/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App