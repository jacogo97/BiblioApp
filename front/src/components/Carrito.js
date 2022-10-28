import React, { useState } from 'react';
import DatosCarritoJson from "./Carrito.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Carrito = () => {
    const [datosCarrito, setDatosCarrito] = useState(DatosCarritoJson)
    return(
        <div>
        <Table striped="columns">
    <thead>
      <tr>
        <th>imagen</th>
        <th>cantidad</th>
        <th>producto</th>
        <th>valor unitario</th>
        <th>total</th>
      </tr>
    </thead>
    <tbody>
    {
      DatosCarritoJson.map(
        (usuario)=>{
          return(
            <tr>
              <td>{usuario.imagen}</td>
              <td>{usuario.cantidad}</td>
              <td>{usuario.Producto}</td>
              <td>{usuario.valor}</td>
              <td>{usuario.total}</td>
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

export default Carrito;