import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nexus-darker/80 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <span className="text-xl font-bold gradient-text">Solandox</span>
          </Link>

          {/* Description */}
          <p className="text-gray-400 text-center max-w-md">
            Revolucionando negócios através de soluções inteligentes de Inteligência Artificial. 
            Nossos agentes especializados otimizam processos e maximizam resultados.
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link 
              to="/politica-de-privacidade" 
              className="text-gray-400 hover:text-nexus-purple transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              to="/termos-de-uso" 
              className="text-gray-400 hover:text-nexus-purple transition-colors"
            >
              Termos de Uso
            </Link>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 w-full text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Solandox. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;