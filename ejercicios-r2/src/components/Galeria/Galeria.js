import React, { useState, useEffect } from 'react';
import './stylesGaleria.css';

const imagenes = [
  '/imagenesGaleria/imagen1.png',
  '/imagenesGaleria/imagen2.jfif',
  '/imagenesGaleria/imagen3.jpeg',
  '/imagenesGaleria/imagen4.jpg'
];

const Galeria = () => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setIndice((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length);
      } else if (e.key === 'ArrowRight') {
        setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="galeria">
      <img src={imagenes[indice]} alt={`Imagen ${indice + 1}`} />
    </div>
  );
};

export default Galeria;
