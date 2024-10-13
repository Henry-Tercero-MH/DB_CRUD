import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CRUDTable from './CRUDTable';
import { Categoria } from '../types';

const Categorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/categorias');
      setCategorias(response.data);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };

  const columns = [
    { key: 'nombre_categoria', header: 'Nombre de Categoría' },
  ];

  const handleEdit = (categoria: Categoria) => {
    console.log('Editar categoría:', categoria);
    // Implementar lógica de edición
  };

  const handleDelete = (categoria: Categoria) => {
    console.log('Eliminar categoría:', categoria);
    // Implementar lógica de eliminación
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Gestión de Categorías</h1>
      <CRUDTable
        data={categorias}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Categorias;