import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
    const[value, setValue] = useState("default");
    const navigate = useNavigate();


    const handleChange = (event) => {
        {
        const mes = event.target.value
        setValue(mes)
        if(value !== null) {
            navigate(mes)
        }
    }
    }
    
    return (
        <nav className='navbar'>
            <select value={value} onChange={handleChange}>
            <option value="default" className='enlace-resumen'> Elegí un Mes para ver el resumen </option> 
            <option value="/junio" className='enlace-resumen'> Resumen del Mes de Junio</option>
            <option value="/julio" className='enlace-resumen'> Resumen del Mes de Julio</option>
            <option value="/agosto" className='enlace-resumen'> Resumen del Mes de Agosto</option>
            <option value="/septiembre" className='enlace-resumen'> Resumen del Mes de Septiembre</option>
            <option value="/octubre" className='enlace-resumen'> Resumen del Mes de Octubre</option>
            <option value="/noviembre" className='enlace-resumen'> Resumen del Mes de Noviembre</option>
            </select>
            <h2>Aportes Para La Mejora de las Calles</h2>
        </nav>
    )
}
