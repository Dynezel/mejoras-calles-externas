import React from 'react'

export default function Julio() {
  return (
    <div>
            <h3>Mes de Julio y Agosto</h3>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Detalles</th>
                        <th className="ingresos">Ingresos</th>
                        <th className="egresos">Egresos</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>23/07</td>
                        <td className="restante">Restante Junio</td>
                        <td>1.260.000</td>
                        <td></td>
                        <td>1.260.000</td>
                    </tr>
                    <tr>
                        <td>24/07</td>
                        <td className="ingresos">Ruben Dario Gomez</td>
                        <td>70.000</td>
                        <td></td>
                        <td>1.330.000</td>
                    </tr>
                    <tr>
                        <td>24/07</td>
                        <td className="ingresos">Ovidio Vera</td>
                        <td>50.000</td>
                        <td></td>
                        <td>1.380.000</td>
                    </tr>
                    <tr>
                        <td>24/07</td>
                        <td className="ingresos">Luis Carabajal</td>
                        <td>20.000</td>
                        <td></td>
                        <td>1.400.000</td>
                    </tr>
                    <tr>
                        <td>24/07</td>
                        <td className="ingresos">Maria Delgado</td>
                        <td>100.000</td>
                        <td></td>
                        <td>1.500.000</td>
                    </tr>
                </tbody>
                </table>
        </div>
  )
}
