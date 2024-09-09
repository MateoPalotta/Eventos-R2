import React, { useState, useEffect } from 'react';
import './stylesBotones.css';

function App() {
    const [color, setColor] = useState('white');
    const [tipografia, setTipografia] = useState('Arial');
    const [sonido1] = useState(new Audio('sonido.mp3'));
    const [sonido2] = useState(new Audio('sonido2.mp3'));
    const [animacion, setAnimacion] = useState('');

    const handleClickColor = () => {
        setColor(color === 'white' ? 'Pink' : 'white');
    };

    const handleDblClickColor = () => {
        setTipografia(tipografia === 'Arial' ? 'Lato' : 'Arial');
    };

    const handleClickSonido = () => {
        sonido1.play();
    };

    const handleDblClickSonido = () => {
        sonido2.play();
    };

    const handleClickAnimacion = () => {
        setAnimacion('rotar-derecha'); 
    };

    const handleDblClickAnimacion = () => {
        setAnimacion('rotar-izquierda');
    };

    const handleResetAnimacion = () => {
        setAnimacion('');
        setColor('white');
        setTipografia('Arial'); 
    };

    useEffect(() => {
        document.body.style.backgroundColor = color;
        document.body.style.fontFamily = tipografia;
    }, [color, tipografia]);

    return (
      <div className={`pagina ${animacion}`}>
      <div className="btn-interactivos">
      <button
        style={{ backgroundColor: color }}
        onClick={handleClickColor}
        onDoubleClick={handleDblClickColor}
      >
        Cambiar color y tipografía
      </button>

      <button onClick={handleClickSonido} onDoubleClick={handleDblClickSonido}>
        Reproducir sonido
      </button>

      <button onClick={handleClickAnimacion} onDoubleClick={handleDblClickAnimacion}>
        Animación
      </button>

      <button onClick={handleResetAnimacion}>
        Reset
      </button>
    </div>
    </div>
  );
}

export default App;
