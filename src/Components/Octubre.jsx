import React from 'react'

export default function Octubre() {
  return (
    <div>
    <h3>Mes de Octubre</h3>
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
                    <td>01/10</td>
                    <td className="restante">Saldo de Septiembre</td>
                    <td>80.000</td>
                    <td></td>
                    <td>80.000</td>
                </tr>
                    <tr>
                        <td>10/10</td>
                        <td className="ingresos">Luis Alberto Carabajal</td>
                        <td>20.000</td>
                        <td></td>
                        <td>100.000</td>
                    </tr>
                    <tr>
                        <td>10/10</td>
                        <td className="ingresos">Moises Ganoza</td>
                        <td>50.000</td>
                        <td></td>
                        <td>150.000</td>
                    </tr>
                    <tr>
                        <td>10/10</td>
                        <td className="ingresos">Isabel Gonzalez</td>
                        <td>20.000</td>
                        <td></td>
                        <td>170.000</td>
                    </tr>
                    <tr>
                        <td>10/10</td>
                        <td className="ingresos">Cecilia Patricia Sosa</td>
                        <td>20.000</td>
                        <td></td>
                        <td>190.000</td>
                    </tr>
                    <tr>
                        <td>10/10</td>
                        <td className="ingresos">Juan Carlos Ganoza</td>
                        <td>50.000</td>
                        <td></td>
                        <td>240.000</td>
                    </tr>
                    <tr>
                        <td>30/10</td>
                        <td className="ingresos">Victorina Rojas</td>
                        <td>50.000</td>
                        <td></td>
                        <td>290.000</td>
                    </tr>
                    {/* <tr>
                        <td>30/10</td>
                        <td className="total">Saldo Final Julio</td>
                        <td></td>
                        <td></td>
                        <td className="total">80.000</td>
                    </tr> */}
                </tbody>
                </table>
        </div>
  )
}