import React from 'react'

export default function Noviembre() {
  return (
    <div>
    <h3>Mes de Noviembre</h3>
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
                    <td>01/11</td>
                    <td className="restante">Saldo de Octubre</td>
                    <td>430.000</td>
                    <td></td>
                    <td>430.000</td>
                </tr>
                <tr>
                        <td>02/11</td>
                        <td className="ingresos">Maidana Alberto</td>
                        <td>20.000</td>
                        <td></td>
                        <td>450.000</td>
                    </tr>
                    <tr>
                        <td>02/11</td>
                        <td className="ingresos">Luis Alberto Carabajal</td>
                        <td>20.000</td>
                        <td></td>
                        <td>470.000</td>
                    </tr>
                    <tr>
                        <td>02/11</td>
                        <td className="ingresos">Paula Contreras</td>
                        <td>20.000</td>
                        <td></td>
                        <td>490.000</td>
                    </tr>
                    <tr>
                        <td>02/11</td>
                        <td className="ingresos">Silvia Armoa</td>
                        <td>20.000</td>
                        <td></td>
                        <td>510.000</td>
                    </tr>
                    <tr>
                        <td>02/11</td>
                        <td className="ingresos">Hugo Romero</td>
                        <td>50.000</td>
                        <td></td>
                        <td>560.000</td>
                    </tr>
                    <tr>
                        <td>04/11</td>
                        <td className="ingresos">Fernando Arias</td>
                        <td>20.000</td>
                        <td></td>
                        <td>580.000</td>
                    </tr>
                    <tr>
                        <td>04/11</td>
                        <td className="ingresos">Sandra Acosta</td>
                        <td>20.000</td>
                        <td></td>
                        <td>600.000</td>
                    </tr>
                    <tr>
                        <td>04/11</td>
                        <td className="ingresos">Monica Urquiza</td>
                        <td>20.000</td>
                        <td></td>
                        <td>620.000</td>
                    </tr>
                    <tr>
                        <td>04/11</td>
                        <td className="ingresos">Isabel Gonzalez</td>
                        <td>50.000</td>
                        <td></td>
                        <td>670.000</td>
                    </tr>
                </tbody>
                </table>
        </div>
  )
}



