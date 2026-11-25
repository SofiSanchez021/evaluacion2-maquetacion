/*
 * datos.js - Datos del catálogo para Ruta Patrimonio (Tema 16)
 */

const configuracion = {
  titulo: 'Ruta Patrimonio',
  campoOrden: 'precioEntrada',
  etiquetaValor: 'Entrada'
};

const items = [
  {
    id: 1,
    nombre: 'Museo del Oro Quimbaya',
    categoria: 'museo',
    descripcion: 'Orfebrería del pueblo quimbaya.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 0,
    municipio: 'Armenia',
    horario: 'martes a domingo 9:00 a 17:00'
  },
  {
    id: 2,
    nombre: 'Museo de Arte de Pereira',
    categoria: 'museo',
    descripcion: 'Arte colombiano moderno y contemporáneo.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 5000,
    municipio: 'Pereira',
    horario: 'martes a domingo 10:00 a 18:00'
  },
  {
    id: 3,
    nombre: 'Museo del Café',
    categoria: 'museo',
    descripcion: 'La historia del café en la región.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 12000,
    municipio: 'Montenegro',
    horario: 'todos los días 9:00 a 16:00'
  },
  {
    id: 4,
    nombre: 'Valle de Cocora',
    categoria: 'parque',
    descripcion: 'Palmas de cera, el árbol nacional.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 6000,
    municipio: 'Salento',
    horario: 'todos los días 7:00 a 17:00'
  },
  {
    id: 5,
    nombre: 'Jardín Botánico UTP',
    categoria: 'parque',
    descripcion: 'Bosque y senderos dentro de la universidad.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 8000,
    municipio: 'Pereira',
    horario: 'lunes a sábado 8:00 a 16:00'
  },
  {
    id: 6,
    nombre: 'Parque de la Vida',
    categoria: 'parque',
    descripcion: 'Lagos y senderos en medio de la ciudad.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 3000,
    municipio: 'Armenia',
    horario: 'todos los días 6:00 a 18:00'
  },
  {
    id: 7,
    nombre: 'Bolívar Desnudo',
    categoria: 'monumento',
    descripcion: 'Escultura ecuestre de Rodrigo Arenas.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 0,
    municipio: 'Pereira',
    horario: 'abierto todo el día'
  },
  {
    id: 8,
    nombre: 'Catedral de Manizales',
    categoria: 'monumento',
    descripcion: 'Catedral de concreto con mirador en su torre.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 15000,
    municipio: 'Manizales',
    horario: 'todos los días 9:00 a 18:00'
  },
  {
    id: 9,
    nombre: 'Puente Helicoidal',
    categoria: 'monumento',
    descripcion: 'Puente en espiral sobre la vía principal.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 0,
    municipio: 'Pereira',
    horario: 'abierto todo el día'
  },
  {
    id: 10,
    nombre: 'Centro Cultural Lucy Tejada',
    categoria: 'cultural',
    descripcion: 'Exposiciones y talleres de arte.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 0,
    municipio: 'Pereira',
    horario: 'lunes a sábado 8:00 a 18:00'
  },
  {
    id: 11,
    nombre: 'Casa de la Cultura',
    categoria: 'cultural',
    descripcion: 'Casona con biblioteca y teatro.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 0,
    municipio: 'Santa Rosa de Cabal',
    horario: 'lunes a viernes 8:00 a 17:00'
  },
  {
    id: 12,
    nombre: 'Mirador de Filandia',
    categoria: 'cultural',
    descripcion: 'Torre de madera con vista a tres departamentos.',
    imagen: 'img/placeholder.svg',
    precioEntrada: 7000,
    municipio: 'Filandia',
    horario: 'todos los días 9:00 a 19:00'
  }
];
