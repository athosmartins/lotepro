import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">LotePro</h3>
            <p className="mb-4">Especialistas em terrenos para construtoras e incorporadoras em Belo Horizonte.</p>
            <div className="flex space-x-4">
              {/* Add social media icons here if applicable */}
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-600">Sobre</Link></li>
              <li><Link to="/casos-de-sucesso" className="hover:text-blue-600">Casos de Sucesso</Link></li>
              <li><Link to="/terrenos-disponiveis" className="hover:text-blue-600">Terrenos Disponíveis</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-blue-600">Contato</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contato</h4>
            <p className="mb-2">Telefone: (31) 1234-5678</p>
            <p className="mb-2">Email: contato@lotepro.com.br</p>
            <p>Belo Horizonte, MG</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LotePro. Todos os direitos reservados.</p>
          <div className="mt-2">
            <Link to="/politica-de-privacidade" className="hover:text-blue-600">Política de Privacidade</Link>
            {' | '}
            <Link to="/termos-de-servico" className="hover:text-blue-600">Termos de Serviço</Link>
          </div>
          <div className="mt-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Mais de 13 anos de experiência no mercado
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;