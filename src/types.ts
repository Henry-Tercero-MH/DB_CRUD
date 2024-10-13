export interface Usuario {
  usuario_id?: number;
  nombre_usuario: string;
  email: string;
  contraseña: string;
}

export interface Categoria {
  categoria_id?: number;
  nombre_categoria: string;
}

export interface Libro {
  libro_id?: number;
  titulo: string;
  autor: string;
  fecha_publicacion: string;
  categoria_id: number;
}

export interface Prestamo {
  prestamo_id?: number;
  usuario_id: number;
  libro_id: number;
  fecha_prestamo: string;
  fecha_devolucion?: string;
}