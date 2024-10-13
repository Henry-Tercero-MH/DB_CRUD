const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "biblioteca",
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// API para Usuarios
app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM Usuarios', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.post('/api/usuarios', (req, res) => {
  const { nombre_usuario, email, contraseña } = req.body;
  db.query('INSERT INTO Usuarios (nombre_usuario, email, contraseña) VALUES (?, ?, ?)', 
    [nombre_usuario, email, contraseña], 
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: result.insertId, nombre_usuario, email });
    }
  );
});

// API para Libros
app.get('/api/libros', (req, res) => {
  db.query('SELECT * FROM Libros', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.post('/api/libros', (req, res) => {
  const { titulo, autor, fecha_publicacion, categoria_id } = req.body;
  db.query('INSERT INTO Libros (titulo, autor, fecha_publicacion, categoria_id) VALUES (?, ?, ?, ?)', 
    [titulo, autor, fecha_publicacion, categoria_id], 
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: result.insertId, titulo, autor, fecha_publicacion, categoria_id });
    }
  );
});

// API para Categorías
app.get('/api/categorias', (req, res) => {
  db.query('SELECT * FROM Categorias', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.post('/api/categorias', (req, res) => {
  const { nombre_categoria } = req.body;
  db.query('INSERT INTO Categorias (nombre_categoria) VALUES (?)', 
    [nombre_categoria], 
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: result.insertId, nombre_categoria });
    }
  );
});

// API para Préstamos
app.get('/api/prestamos', (req, res) => {
  db.query('SELECT * FROM Prestamos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.post('/api/prestamos', (req, res) => {
  const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;
  db.query('INSERT INTO Prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)', 
    [usuario_id, libro_id, fecha_prestamo, fecha_devolucion], 
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: result.insertId, usuario_id, libro_id, fecha_prestamo, fecha_devolucion });
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});