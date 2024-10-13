import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CRUDTable from './CRUDTable';
import { Prestamo } from '../types';

const Prestamos: React.FC = () => {
  const [prestamos, setPrestamos] = useState<Prestamo[]>([]);

  useEffect(() => {
    fetchPrestamos();
  }, []);

  const fetchPrestamos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/prestamos');
      setPrestamos(response.data);
    } catch (error) {
      console.error('Error al obtener préstamos:', error);
    }
  };

  const columns = [
    { key: 'usuario_id', header: 'ID Usuario' },
    { key: 'libro_id', header: 'ID Libro' },
    { key: 'fecha_prestamo', header: 'Fecha de Préstamo' },
    { key: 'fecha_devolucion', header: 'Fecha de Devolución' },
  ];

  const handleEdit = (prestamo: Prestamo) => {
    console.log('Editar préstamo:', prestamo);
    // Implementar lógica de edición
  };

  const handleDelete = (prestamo: Prestamo) => {
    console.log('Eliminar préstamo:', prestamo);
    // Implementar lógica de eliminación
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Gestión de Préstamos</h1>
      <CRUDTable
        data={prestamos}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Prestamos;