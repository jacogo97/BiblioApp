import React, { useState } from 'react';
import DatosVentasJson from "./Ventas.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Ventas = () => {
    const [datosVenta, setDatosVenta] = useState(DatosVentasJson)
    return(
        <div>
        <Table striped="columns">
    <thead>
      <tr>
        <th>idVentas</th>
        <th>Fecha</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
    {
      DatosVentasJson.map(
        (usuario, index)=>{
          return(
            <tr>
              <td>{index}</td>
              <td>{usuario.fecha}</td>
              <td>{usuario.valor}</td>
            </tr>
          )

        }
      )
    }
    </tbody>
    </Table>
  </div>

    )
};

export default Ventas;