import React from 'react';
import Galeria from './components/Galeria/Galeria';
import Formulario from './components/Formulario/Formulario';
import AdivinaNumero from './components/Juego/AdivinaNumero';
import BotonesInteractivos from './components/Botones/BotonesInteractivos';
import NotaApp from './components/Notas/NotaApp';
import './App.css';

function App() {
  return (
    <div className="app-container">

      <div className="bloque">
        <h2>Galería de fotos</h2>
        <Galeria />
      </div>

      <div className="bloque">
        <h2>Formulario</h2>
        <Formulario />
      </div>
    
      <div className="bloque">
        <h2>Adivina el Número</h2>
        <AdivinaNumero />
      </div>

      <div className="bloque">
        <h2>Botones Interactivos</h2>
        <BotonesInteractivos />
      </div>

      <div className="bloque">
        <h2>Notas</h2>
        <NotaApp />
      </div>

    </div>
  );
}

export default App;
