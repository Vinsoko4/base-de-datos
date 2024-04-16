import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alertas/Alert';
import Table from 'react-bootstrap/Table';
import './Listado.css';

export const Tabla = ( {data} ) => {
  return (
    <Table striped bordered hover variant="dark" className='tabla-container'>
      <thead className='tabla-head'>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
        </tr>
      </thead>
      <tbody className='tabla-body'>
        {data.length ? (
            data.map(colab => {
              const {id, nombre, correo, edad, cargo, fono} = colab
              return (
                <tr key={id}>
                    <td>{nombre}</td>
                    <td>{correo}</td>
                    <td>{edad}</td>
                    <td>{cargo}</td>
                    <td>{fono}</td>
                </tr>
              )
              })
        ) : (
            <tr>
                <td colSpan={6}>
                    <Alert 
                    alert={'Data not Found'}/>
                </td>
            </tr>
        )}
      </tbody>
    </Table>
  );
};

Tabla.propTypes = {
    data: PropTypes.array.isRequired,
};