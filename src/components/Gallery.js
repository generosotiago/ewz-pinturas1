import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Placeholder images - você pode substituir por imagens reais
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      alt: 'Casa pintada - Estilo moderno'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      alt: 'Casa pintada - Estilo contemporâneo'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      alt: 'Casa pintada - Estilo clássico'
    }
  ];

  return (
    <section id="galeria" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Galeria</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

