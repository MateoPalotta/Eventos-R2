import React, { useState } from 'react';
import './stylesNumero.css';

const AdivinaNumero = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 100));
  const [suposicion, setSuposicion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleGuess = (e) => {
    e.preventDefault();
    const suposicionNumero = parseInt(suposicion);
    if (suposicionNumero < numeroAleatorio) {
      setMensaje('Más alto');
    } else if (suposicionNumero > numeroAleatorio) {
      setMensaje('Más bajo');
    } else {
      setMensaje('¡Lo adivinaste!');
      setNumeroAleatorio(Math.floor(Math.random() * 100));
    }
    setSuposicion('');
  };

  return (
    <div className='ad-numero'>
      <form onSubmit={handleGuess}>
        <label>Advina el número:</label>
        <input
          type="number"
          value={suposicion}
          onChange={(e) => setSuposicion(e.target.value)}
          placeholder="Introduce un número"
        />
        <button type="submit">Adivinar</button>
        <p>{mensaje}</p>
      </form>
    </div>
  );
};

export default AdivinaNumero;
