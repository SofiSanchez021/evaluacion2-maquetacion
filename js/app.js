/*
 * app.js - Lógica dinámica del catálogo de Ruta Patrimonio
 */

const estado = {
  categoria: 'todas',
  texto: '',
  orden: 'nombre-asc'
};

function crearCard(item) {
  const valor = item[configuracion.campoOrden];
  const textoEntrada = valor === 0
    ? '$0 (Entrada libre)'
    : '$' + valor.toLocaleString('es-CO');

  return `
    <div class="col">
      <article class="card h-100 border-0 shadow-sm">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre} en ${item.municipio}">
        <div class="card-body d-flex flex-column">
          <span class="badge badge-marca align-self-start mb-2 text-uppercase">${item.categoria}</span>
          <h3 class="card-title h5">${item.nombre}</h3>
          <p class="card-text">${item.descripcion}</p>
          <ul class="list-unstyled small mt-auto mb-0">
            <li class="precio-entrada mb-1">${configuracion.etiquetaValor}: ${textoEntrada}</li>
            <li><strong>Municipio:</strong> ${item.municipio}</li>
            <li><strong>Horario:</strong> ${item.horario}</li>
          </ul>
        </div>
      </article>
    </div>
  `;
}

function generarHTML(lista) {
  if (!lista || lista.length === 0) {
    return '<div class="col-12"><p class="text-center py-4">No hay resultados que coincidan con tu búsqueda.</p></div>';
  }
  return lista.map(crearCard).join('');
}

function filtrarPorCategoria(lista, categoria) {
  if (categoria === 'todas') {
    return [...lista];
  }
  return lista.filter((item) => item.categoria === categoria);
}

function buscarPorTexto(lista, texto) {
  const consulta = texto.trim().toLowerCase();
  if (!consulta) {
    return [...lista];
  }
  return lista.filter((item) =>
    item.nombre.toLowerCase().includes(consulta) ||
    item.descripcion.toLowerCase().includes(consulta)
  );
}

function ordenarItems(lista, criterio) {
  const copia = [...lista];
  if (criterio === 'nombre-asc') {
    return copia.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  }
  if (criterio === 'valor-asc') {
    return copia.sort((a, b) => a[configuracion.campoOrden] - b[configuracion.campoOrden]);
  }
  if (criterio === 'valor-desc') {
    return copia.sort((a, b) => b[configuracion.campoOrden] - a[configuracion.campoOrden]);
  }
  return copia;
}

function aplicarFiltros(lista, estadoActual) {
  const porCategoria = filtrarPorCategoria(lista, estadoActual.categoria);
  const porTexto = buscarPorTexto(porCategoria, estadoActual.texto);
  return ordenarItems(porTexto, estadoActual.orden);
}

function actualizarVista() {
  const listaFiltrada = aplicarFiltros(items, estado);
  const catalogo = document.getElementById('catalogo');
  const contador = document.getElementById('contador');

  catalogo.innerHTML = generarHTML(listaFiltrada);
  contador.textContent = `Mostrando ${listaFiltrada.length} de ${items.length} lugares`;
}

function iniciar() {
  const botonesFiltro = document.querySelectorAll('button[data-categoria]');
  const buscador = document.getElementById('buscador');
  const selectorOrden = document.getElementById('orden');

  botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
      estado.categoria = boton.dataset.categoria;
      botonesFiltro.forEach((b) => {
        const activo = b === boton;
        b.setAttribute('aria-pressed', activo ? 'true' : 'false');
        b.classList.toggle('active', activo);
      });
      actualizarVista();
    });
  });

  buscador.addEventListener('input', (evento) => {
    estado.texto = evento.target.value;
    actualizarVista();
  });

  selectorOrden.addEventListener('change', (evento) => {
    estado.orden = evento.target.value;
    actualizarVista();
  });

  actualizarVista();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', iniciar);
}
