import React from 'react'

export default function Junio() {
    return (
        <div>
            <h3>Mes de Junio y Julio</h3>
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
                    {/*<tr>
                        <td>01/06</td>
                        <td className="restante">Restante Mayo</td>
                        <td>162.000</td>
                        <td></td>
                        <td>162.000</td>
                    </tr>*/}
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Gaston Zeiden
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>20.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Ethel Yamina Romano 
                        </td>
                        <td>100.000</td>
                        <td></td>
                        <td>120.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Luis Alberto Carabajal 
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>140.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Severiana Amarilla Torres
                        </td>
                        <td>50.000</td>
                        <td></td>
                        <td>190.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Isabel Natalia Gonzalez 
                        </td>
                        <td>50.000</td>
                        <td></td>
                        <td>240.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Alberto Villasanti 
                        </td>
                        <td>40.000</td>
                        <td></td>
                        <td>280.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Sandra Acosta 
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>300.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Juan Carlos Ganoza 
                        </td>
                        <td>50.000</td>
                        <td></td>
                        <td>350.000</td>
                    </tr>
                    <tr>
                        <td>23/06</td>
                        <td className="ingresos">
                            Arias Fernando 
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>370.000</td>
                    </tr><tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Dorila Tesen Chavez 
                        </td>
                        <td>30.000</td>
                        <td></td>
                        <td>400.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Brian Lirio 
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>420.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Liz Rossana Mencia
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>440.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Hugo Romero 
                        </td>
                        <td>50.000</td>
                        <td></td>
                        <td>490.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Graciela Almiron 
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>510.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Paula Contreras
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>530.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Maria Lopez 
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>550.000</td>
                    </tr>
                    <tr>
                        <td>24/06</td>
                        <td className="ingresos">
                            Claudia Mazzini
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>570.000</td>
                    </tr>
                    <tr>
                        <td>25/06</td>
                        <td className="ingresos">
                            Mario Silva
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>590.000</td>
                    </tr>
                    <tr>
                        <td>30/06</td>
                        <td className="ingresos">
                            Cristian Irala
                        </td>
                        <td>50.000</td>
                        <td></td>
                        <td>640.000</td>
                    </tr>
                    <tr>
                        <td>01/07</td>
                        <td className="ingresos">
                            Maria Delgado
                        </td>
                        <td>100.000</td>
                        <td></td>
                        <td>740.000</td>
                    </tr>
                    <tr>
                        <td>06/07</td>
                        <td className="ingresos">
                            Cristian Valenzuela
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>760.000</td>
                    </tr>
                    <tr>
                        <td>06/07</td>
                        <td className="ingresos">
                            Mariela Noemi Robles
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>780.000</td>
                    </tr>
                    <tr>
                        <td>06/07</td>
                        <td className="ingresos">
                            Cecilia Patricia Sosa
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>800.000</td>
                    </tr>
                    <tr>
                        <td>07/07</td>
                        <td className="ingresos">
                            Julian Oviedo
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>820.000</td>
                    </tr>
                    <tr>
                        <td>07/07</td>
                        <td className="ingresos">
                            Ana Rodriguez
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>840.000</td>
                    </tr>
                    <tr>
                        <td>07/07</td>
                        <td className="ingresos">
                            Omar Walter Martinez
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>860.000</td>
                    </tr>
                    <tr>
                        <td>08/07</td>
                        <td className="ingresos">
                            Candela Maesani
                        </td>
                        <td>10.000</td>
                        <td></td>
                        <td>870.000</td>
                    </tr>
                    <tr>
                        <td>09/07</td>
                        <td className="ingresos">
                           Jose Luis Vitaller
                        </td>
                        <td>30.000</td>
                        <td></td>
                        <td>900.000</td>
                    </tr>
                    <tr>
                        <td>09/07</td>
                        <td className="ingresos">
                           Maidana Alberto
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>920.000</td>
                    </tr>
                    <tr>
                        <td>12/07</td>
                        <td className="ingresos">
                           Sandra Acosta
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>940.000</td>
                    </tr>
                    <tr>
                        <td>15/07</td>
                        <td className="ingresos">
                           Victoria Rojas
                        </td>
                        <td>150.000</td>
                        <td></td>
                        <td>1.090.000</td>
                    </tr>
                    <tr>
                        <td>15/07</td>
                        <td className="ingresos">
                           Candela Maesani
                        </td>
                        <td>10.000</td>
                        <td></td>
                        <td>1.100.000</td>
                    </tr>
                    <tr>
                        <td>17/07</td>
                        <td className="ingresos">
                           Nancy Veronica Mediavilla
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>1.120.000</td>
                    </tr>
                    <tr>
                        <td>17/07</td>
                        <td className="ingresos">
                           Martin Taype
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>1.140.000</td>
                    </tr>
                    <tr>
                        <td>17/07</td>
                        <td className="ingresos">
                           Johana Gonzalez
                        </td>
                        <td>25.000</td>
                        <td></td>
                        <td>1.165.000</td>
                    </tr>
                    <tr>
                        <td>17/07</td>
                        <td className="ingresos">
                           Oscar Acevedo
                        </td>
                        <td>30.000</td>
                        <td></td>
                        <td>1.195.000</td>
                    </tr>
                    <tr>
                        <td>17/07</td>
                        <td className="ingresos">
                           Francis Diaz
                        </td>
                        <td>20.000</td>
                        <td></td>
                        <td>1.215.000</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
