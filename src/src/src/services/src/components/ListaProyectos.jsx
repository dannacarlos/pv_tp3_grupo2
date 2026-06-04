import React, { useState } from 'react';
import proyectoService from '../services/proyectoService';

export default function ListaProyectos() {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('Pendiente');

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos()); 
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setTextoBusqueda(valor);
    const resultados = proyectoService.buscarProyecto(valor);
    setProyectos(resultados);
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!nuevoTitulo || !nuevaCategoria) return alert("Por favor completa los campos");

    proyectoService.agregarProyecto({
      titulo: nuevoTitulo,
      categoria: nuevaCategoria,
      estado: nuevoEstado
    });

    setNuevoTitulo('');
    setNuevaCategoria('');
    setNuevoEstado('Pendiente');
    setProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <div className="proyectos-seccion">
      <h2>Listado de Proyectos</h2>

      {/* Campo de texto para buscar en tiempo real */}
      <div className="buscador-container">
        <input 
          type="text" 
          placeholder="🔍 Buscar por título en tiempo real..." 
          value={textoBusqueda}
          onChange={handleBuscar}
          className="search-input"
        />
      </div>

      {/* Requerimiento 2: Renderizado Dinámico usando .map() */}
      <div className="proyectos-grid">
        {proyectos.length > 0 ? (
          proyectos.map((proy) => (
            <div key={proy.id} className="proyecto-card">
              <h3>{proy.titulo}</h3>
              <p><strong>Categoría:</strong> {proy.categoria}</p>
              <p><span className={`estado-badge ${proy.estado.toLowerCase().replace(" ", "-")}`}>{proy.estado}</span></p>
              {/* Botón de Eliminar */}
              <button onClick={() => handleEliminar(proy.id)} className="btn-eliminar">
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron proyectos que coincidan.</p>
        )}
      </div>

      <hr className="divider" />

      {/* Formulario integrado para Agregar Nuevos Proyectos */}
      <div className="formulario-container">
        <h3>Agregar Nuevo Proyecto</h3>
        <form onSubmit={handleAgregar} className="proyecto-form">
          <input 
            type="text" 
            placeholder="Título del proyecto" 
            value={nuevoTitulo} 
            onChange={(e) => setNuevoTitulo(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Categoría" 
            value={nuevaCategoria} 
            onChange={(e) => setNuevaCategoria(e.target.value)} 
          />
          <select value={nuevoEstado} onChange={(e) => setNuevoEstado(e.target.value)}>
            <option value="Pendiente">Pendiente</option>
            <option value="En Curso">En Curso</option>
            <option value="Completado">Completado</option>
          </select>
          <button type="submit" className="btn-agregar">Guardar Proyecto</button>
        </form>
      </div>
    </div>
  );
}
