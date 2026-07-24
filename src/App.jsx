import { useState } from 'react'
import './App.css'
import './css/tablas.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Junio from './Components/Junio'
import Julio from './Components/Julio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Julio/>} />
          <Route path="/junio" element={<Junio/>} />
          <Route path="/julio" element={<Julio/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App