import React, { useState } from 'react';

export default function FormularioProyecto({ onAgregarProyecto }) {
  const [formulario, setFormulario] = useState({
    titulo: '',
    categoria: '',
    estado: 'Pendiente',
    descripcion: '',
    encargadoNombre: '',
    encargadoRol: ''
  });

  const { titulo, categoria, estado, descripcion, encargadoNombre, encargadoRol } = formulario;

  const handleChangeFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !categoria || !descripcion) {
      return alert("Por favor, completa los campos obligatorios (Título, Categoría y Descripción).");
    }
    
    const datosNuevoProyecto = {
      titulo,
      categoria,
      estado,
      descripcion,
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [{ nombre: encargadoNombre || "Anónimo", rol: encargadoRol || "Colaborador" }]
    };

    onAgregarProyecto(datosNuevoProyecto);

    setFormulario({
      titulo: '',
      categoria: '',
      estado: 'Pendiente',
      descripcion: '',
      encargadoNombre: '',
      encargadoRol: ''
    });
  };

  return (
    <div className="formulario-container">
      <h3>Agregar Nuevo Proyecto</h3>
      <form onSubmit={handleSubmit} className="proyecto-form">
        <input 
          type="text" 
          name="titulo" 
          placeholder="Título del proyecto" 
          value={titulo} 
          onChange={handleChangeFormulario} 
        />
        <input 
          type="text" 
          name="categoria" 
          placeholder="Categoría" 
          value={categoria} 
          onChange={handleChangeFormulario} 
        />
        <select name="estado" value={estado} onChange={handleChangeFormulario}>
          <option value="Pendiente">Pendiente</option>
          <option value="En Curso">En Curso</option>
          <option value="Completado">Completado</option>
        </select>
        <textarea 
          name="descripcion" 
          placeholder="Escribe una descripción completa..." 
          value={descripcion} 
          onChange={handleChangeFormulario}
          rows="4"
        />
        <input 
          type="text" 
          name="encargadoNombre" 
          placeholder="Nombre del Integrante" 
          value={encargadoNombre} 
          onChange={handleChangeFormulario} 
        />
        <input 
          type="text" 
          name="encargadoRol" 
          placeholder="Rol del Integrante" 
          value={encargadoRol} 
          onChange={handleChangeFormulario} 
        />
        <button type="submit" className="btn-agregar">Guardar Proyecto</button>
      </form>
    </div>
  );
}
