import React from 'react';
import { Link } from 'react-router-dom';

const AvailableLands = () => {
  const availableLands = [
    { id: 1, neighborhood: 'Santo Agostinho', description: 'Terreno de 2.076m²', link: '/terreno/santo-agostinho' },
    { id: 2, neighborhood: 'Salgado Filho', description: 'Terreno de 1.030m²', link: '/terreno/salgado-filho' },
    // Add more land details here
  ];

  return (
    <div className="available-lands">
      <h1>Terrenos Disponíveis</h1>
      <ul>
        {availableLands.map((land) => (
          <li key={land.id}>
            <Link to={land.link}>
              {land.neighborhood}: {land.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableLands;
