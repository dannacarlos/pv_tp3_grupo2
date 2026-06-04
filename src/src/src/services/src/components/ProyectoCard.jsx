import React from 'react';

export default function ProyectoCard({ proyecto, onEliminar, onVerDetalle }) {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="proyecto-card">
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p>
        <span className={`estado-badge ${estado.toLowerCase().replace(" ", "-")}`}>
          {estado}
        </span>
      </p>
      
      <div className="card-buttons">
        {/* Botón para seleccionar este proyecto y ver su detalle extendido */}
        <button onClick={() => onVerDetalle(proyecto)} className="btn-detalle">
          Ver Detalle
        </button>
        
        {/* Botón para eliminar */}
        <button onClick={() => onEliminar(id)} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    </div>
  );
}
