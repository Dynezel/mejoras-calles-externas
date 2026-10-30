import React from 'react'

export default function Agosto() {
  return (
    <div>
    <h3>Mes de Agosto</h3>
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
                    <td>01/08</td>
                    <td className="restante">Restante Julio</td>
                    <td>0</td>
                    <td></td>
                    <td>0</td>
                </tr>
                    <tr>
                        <td>04/08</td>
                        <td className="ingresos">Luis Carabajal</td>
                        <td>20.000</td>
                        <td></td>
                        <td>20.000</td>
                    </tr>
                    <tr>
                        <td>04/08</td>
                        <td className="ingresos">Mariela Montenegro</td>
                        <td>20.000</td>
                        <td></td>
                        <td>40.000</td>
                    </tr>
                    <tr>
                        <td>30/08</td>
                        <td className="total">Saldo Final Agosto</td>
                        <td></td>
                        <td></td>
                        <td className="total">40.000</td>
                    </tr>
                </tbody>
                </table>
        </div>
  )
}