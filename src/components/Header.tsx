import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          LotePro
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Início</Link>
          <Link to="/sobre" className="text-gray-600 hover:text-blue-600">Sobre</Link>
          <Link to="/casos-de-sucesso" className="text-gray-600 hover:text-blue-600">Casos de Sucesso</Link>
          <Link to="/terrenos-disponiveis" className="text-gray-600 hover:text-blue-600">Terrenos Disponíveis</Link>
          <Link to="/solicitar-terreno" className="text-gray-600 hover:text-blue-600">Solicitar Terreno</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
          <Link to="/contato" className="text-gray-600 hover:text-blue-600">Contato</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Início</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-blue-600">Sobre</Link>
            <Link to="/casos-de-sucesso" className="text-gray-600 hover:text-blue-600">Casos de Sucesso</Link>
            <Link to="/terrenos-disponiveis" className="text-gray-600 hover:text-blue-600">Terrenos Disponíveis</Link>
            <Link to="/solicitar-terreno" className="text-gray-600 hover:text-blue-600">Solicitar Terreno</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contato" className="text-gray-600 hover:text-blue-600">Contato</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;