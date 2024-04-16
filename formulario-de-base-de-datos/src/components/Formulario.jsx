import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Formulario.css';

const Formulario = ( {colab, setColab, setAlert} ) => {
    const [newColab, setNewColab] = useState ({
        id: colab.length + 1,
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        fono: ''
    });

    const validarDatos = () => {
        const {nombre, correo, edad, cargo, fono} = newColab;

        if ( nombre === '' || correo === '' || edad === '' || cargo === '' || fono === '') {
            
            setAlert('Debe completar todos los campos.');
        } else if (!correoRegistro(correo)) {
            setAlert('Formato de correo inválido');
        } else if (fono.length != 8){
            setAlert('Número de teléfono inválido, ingresa 8 dígitos');
        } else {
            setAlert('¡Felicitaciones, te registraste exitosamente!');
        } 
        };
        
        const correoRegistro = (correo) => {
            const expresionCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            return expresionCorreo.test(correo)
        };
        
        const addColab = () => {
            setColab([...colab, newColab])
            setNewColab({
                id: colab.length + 2,
                nombre: '',
                correo: '',
                edad: '',
                cargo: '',
                fono: ''
            });
        };
        
        const handleSubmit = e => {
            e.preventDefault()
            if(validarDatos()){
                addColab()
            };
        };
        
    const handleChange = (dato, valor) => {
        setNewColab(datosPrew => ({
            ...datosPrew,
            [dato]: valor
            })
            );
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <input
                    type="text"
                    name="Nombre"
                    placeholder="Nombre Completo"
                    onChange={e => handleChange('nombre', e.target.value)}
                    value={newColab.nombre}/>

                    <input 
                    type="text"
                    name="Correo"
                    placeholder="Correo"
                    onChange={e => handleChange('correo', e.target.value)}
                    value={newColab.correo}/>
                    
                    <input 
                    type="number"
                    min={1}
                    name="Edad"
                    placeholder="Edad"
                    onChange={e => handleChange('edad', e.target.value)}
                    value={newColab.edad}/>
                    
                    <input 
                    type="text"
                    name="Cargo"
                    placeholder="Cargo"
                    onChange={e => handleChange('cargo', e.target.value)}
                    value={newColab.cargo}/>
                    
                    <input 
                    type="tel"
                    name="Teléfono"
                    placeholder="Teléfono"
                    onChange={e => handleChange('fono', e.target.value)}
                    value={newColab.fono}/>

                    <Button variant="flat" type="submit">
                        Enviar
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Formulario;