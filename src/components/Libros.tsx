import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CRUDTable from './CRUDTable';
import { Libro } from '../types';

const Libros: React.FC = () => {
  const [libros, setLibros] = useState<Libro[]>([]);

  useEffect(() => {
    fetchLibros();
  }, []);

  const fetchLibros = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/libros');
      setLibros(response.data);
    } catch (error) {
      console.error('Error al obtener libros:', error);
    }
  };

  const columns = [
    { key: 'titulo', header: 'Título' },
    { key: 'autor', header: 'Autor' },
    { key: 'fecha_publicacion', header: 'Fecha de Publicación' },
  ];

  const handleEdit = (libro: Libro) => {
    console.log('Editar libro:', libro);
    // Implementar lógica de edición
  };

  const handleDelete = (libro: Libro) => {
    console.log('Eliminar libro:', libro);
    // Implementar lógica de eliminación
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Gestión de Libros</h1>
      <CRUDTable
        data={libros}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Libros;