import React from "react";
import PropTypes from "prop-types";
import './Buscador.css';

export const Buscador = ({ data, setFiltro }) => {
    const filtroData = (dataFiltrada) => {
        setFiltro(dataFiltrada);
    };

    const eventoOnChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        const valorLowerCase = value.toLowerCase();

        const dataFiltrada = data.filter((user) => {
            return (
                user.nombre.toLowerCase().includes(valorLowerCase) ||
                user.correo.toLowerCase().includes(valorLowerCase) ||
                user.edad.toLowerCase().includes(valorLowerCase) ||
                user.cargo.toLowerCase().includes(valorLowerCase) ||
                user.fono.toLowerCase().includes(valorLowerCase) 
            );
        });

        filtroData(dataFiltrada);
    };

    return (
        <>
            <div>
                <input
                type="text"
                className="search"
                onChange={(event) => eventoOnChange(event)}/>
            </div>
        </>
    );
};

Buscador.propTypes = {
    data: PropTypes.array.isRequired,
    setFiltro: PropTypes.func.isRequired,
};