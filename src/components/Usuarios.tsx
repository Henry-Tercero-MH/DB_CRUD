import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CRUDTable from './CRUDTable';
import { Usuario } from '../types';

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const columns = [
    { key: 'nombre_usuario', header: 'Nombre de Usuario' },
    { key: 'email', header: 'Correo Electrónico' },
  ];

  const handleEdit = (usuario: Usuario) => {
    console.log('Editar usuario:', usuario);
    // Implementar lógica de edición
  };

  const handleDelete = (usuario: Usuario) => {
    console.log('Eliminar usuario:', usuario);
    // Implementar lógica de eliminación
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Gestión de Usuarios</h1>
      <CRUDTable
        data={usuarios}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Usuarios;