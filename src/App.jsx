import { useState } from 'react'
import './App.css'
import './css/tablas.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Junio from './Components/Junio'
import Julio from './Components/Julio'
import Agosto from './Components/Agosto'
import Septiembre from './Components/Septiembre'
import Octubre from './Components/Octubre'

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
          <Route path="/agosto" element={<Agosto />} />
          <Route path="/septiembre" element={<Septiembre/>} />
          <Route path="/octubre" element={<Octubre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App