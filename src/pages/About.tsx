import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h1>Quem Somos</h1>
      <p>
        A LotePro é especializada na intermediação de terrenos para construtoras e incorporadoras em Belo Horizonte (BH).
        Atuamos no mercado com confiança e inovação.
      </p>
      <div className="team-section">
        <h2>Nossos Sócios</h2>
        <div className="team-member">
          <h3>Athos Bernardes</h3>
          <p>Mais de 13 anos de experiência no mercado.</p>
          <p>Ex-diretor de legislação urbana do Sinduscon-MG. Atuou como vendedor/permutante de terreno, incorporador e intermediador.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
