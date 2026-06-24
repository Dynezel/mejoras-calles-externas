import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
    const[value, setValue] = useState("default");
    const navigate = useNavigate();

        {/*

    const handleChange = (event) => {
        {/*
        const mes = event.target.value
        setValue(mes)
        if(mes == "/junio") {
            navigate(mes)
        }
    }
    */}
    
    return (
        <nav className='navbar'>
            {/*<select value={value} onChange={handleChange}> /*}
            {/*<option value="default" className='enlace-resumen'> Elegí un Mes para ver el resumen </option> */}    
            {/*<option value="/junio" className='enlace-resumen'> Resumen del Mes de Junio</option>*/}
            <h2>Aportes Para La Mejora de las Calles</h2>
        </nav>
    )
}
