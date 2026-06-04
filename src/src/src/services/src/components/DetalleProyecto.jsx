import React from 'react';

export default function DetalleProyecto({ proyectoSeleccionado }) {
  if (!proyectoSeleccionado) {
    return (
      <div className="detalle-vacio">
        <p>Selecciona un proyecto de la lista para visualizar su información extendida aquí.</p>
      </div>
    );
  }

  const { titulo, categoria, estado, descripcion, recursos, equipo } = proyectoSeleccionado;

  return (
    <div className="detalle-proyecto-container">
      <h2>🔍 Detalle Extendido: {titulo}</h2>
      <p className="subtitulo">Categoría: <strong>{categoria}</strong> | Estado: <strong>{estado}</strong></p>
      
      {/* Descripción extendida */}
      <div className="detalle-descripcion">
        <h3>Descripción del Proyecto</h3>
        <p>{descripcion}</p>
      </div>

      {/* Lista de Recursos */}
      <div className="detalle-recursos">
        <h3>Recursos Disponibles</h3>
        <ul>
          <li><a href={recursos.pdf} target="_blank" rel="noreferrer">📄 Documento Técnico (PDF)</a></li>
          <li><a href={recursos.drive} target="_blank" rel="noreferrer">💾 Carpeta Compartida (Google Drive)</a></li>
          <li><a href={recursos.github} target="_blank" rel="noreferrer">💻 Repositorio de Código (GitHub)</a></li>
        </ul>
      </div>

      {/* Sección de Equipo con nombres y roles */}
      <div className="detalle-equipo">
        <h3>Equipo de Trabajo</h3>
        <div className="equipo-grid">
          {equipo.map((miembro, index) => (
            <div key={index} className="miembro-item">
              <p><strong>{miembro.nombre}</strong></p>
              <p className="rol-text">{miembro.rol}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
