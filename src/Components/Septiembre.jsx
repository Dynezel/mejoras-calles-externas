import React from 'react'

export default function Septiembre() {
  return (
    <div>
    <h3>Mes de Septiembre</h3>
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
                    <td>01/09</td>
                    <td className="restante">Saldo de Agosto</td>
                    <td>40.000</td>
                    <td></td>
                    <td>40.000</td>
                </tr>
                    <tr>
                        <td>03/09</td>
                        <td className="ingresos">Sandra Beatriz Acosta</td>
                        <td>40.000</td>
                        <td></td>
                        <td>80.000</td>
                    </tr>
                    <tr>
                        <td>30/09</td>
                        <td className="total">Saldo Final Julio</td>
                        <td></td>
                        <td></td>
                        <td className="total">80.000</td>
                    </tr>
                </tbody>
                </table>
        </div>
  )
}