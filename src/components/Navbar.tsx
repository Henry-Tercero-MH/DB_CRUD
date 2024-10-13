import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/dashboard" className="text-white font-bold text-xl">
                BiblioApp
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/usuarios" className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Usuarios
                </Link>
                <Link to="/libros" className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Libros
                </Link>
                <Link to="/categorias" className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Categorías
                </Link>
                <Link to="/prestamos" className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Préstamos
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={onLogout}
                className="bg-indigo-700 p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
              >
                <LogOut className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;