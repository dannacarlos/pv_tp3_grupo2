import React from 'react';

export default function RegistroActividad({ ultimaActualizacion }) {
  if (!ultimaActualizacion) return null;

  return (
    <div className="registro-actividad-container">
      <p>⚠️ <strong>Última actualización de la lista:</strong> {ultimaActualizacion}</p>
    </div>
  );
}
