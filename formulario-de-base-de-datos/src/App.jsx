import { useState } from 'react';
import { Buscador } from './components/Buscador';
import { baseColab } from './Lista';
import { Tabla } from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alertas/Alert';
import './App.css';


function App() {
  const [filtro, setFiltro] = useState(baseColab);
  const [alert, setAlert] = useState(''); 
  const [colab, setColab] = useState(baseColab); 

    return (
      <>
    <main className='content-all'>
        <div>
          <h2 className='title2'>Buscador</h2>
          <Buscador data={baseColab} setFiltro ={setFiltro}/>
          <Tabla data={filtro}/>
        </div>

        <div className='content-style'>
          <h2 className='title'>Ingresa Nuevos Datos</h2>
          <Formulario 
          colab={colab}
          setColab={setColab}
          setAlert = {setAlert}/>
          <Alert alert = {alert} />
        </div>
    </main>
    </>
  );
};

export default App;
