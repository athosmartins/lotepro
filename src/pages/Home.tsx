import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terrenos Estratégicos para o Seu Próximo Empreendimento
            </h1>
            <p className="text-xl mb-8">
              Conectamos construtoras e incorporadoras aos melhores terrenos em Belo Horizonte.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solicitar-terreno" className="btn-primary">
                Solicitar Terreno
              </Link>
              <Link to="/contato" className="btn-secondary">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a LotePro?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Localização Estratégica</h3>
              <p>Terrenos selecionados nas melhores áreas de Belo Horizonte para maximizar o potencial do seu empreendimento.</p>
            </div>
            <div className="text-center">
              <Building size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expertise em Legislação Urbana</h3>
              <p>Nossa equipe possui amplo conhecimento em legislação urbana, garantindo segurança jurídica para sua construção.</p>
            </div>
            <div className="text-center">
              <TrendingUp size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Potencial de Valorização</h3>
              <p>Identificamos oportunidades com alto potencial de valorização para maximizar o retorno do seu investimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para encontrar o terreno ideal?</h2>
          <p className="text-xl mb-8">Entre em contato conosco e descubra as melhores oportunidades em Belo Horizonte.</p>
          <Link to="/solicitar-terreno" className="btn-primary">
            Solicitar Terreno Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;