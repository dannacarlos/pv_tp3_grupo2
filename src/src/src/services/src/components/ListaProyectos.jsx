import React, { useState } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';

export default function ListaProyectos() {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const [proyectoParaDetalle, setProyectoParaDetalle] = useState(null);

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

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    if (proyectoParaDetalle && proyectoParaDetalle.id === id) {
      setProyectoParaDetalle(null);
    }
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setTextoBusqueda(valor);
    setProyectos(proyectoService.buscarProyecto(valor));
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!titulo || !categoria || !descripcion) return alert("Por favor, completa los campos principales.");

    const nuevoProy = {
      titulo,
      categoria,
      estado,
      descripcion,
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [{ nombre: encargadoNombre || "Anónimo", rol: encargadoRol || "Colaborador" }]
    };

    proyectoService.agregarProyecto(nuevoProy);

    setFormulario({
      titulo: '',
      categoria: '',
      estado: 'Pendiente',
      descripcion: '',
      encargadoNombre: '',
      encargadoRol: ''
    });
    setProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <div className="proyectos-seccion">
      
      {/* Bloque superior: Buscador en tiempo real */}
      <div className="buscador-container">
        <input 
          type="text" 
          placeholder="🔍 Buscar proyecto por título en tiempo real..." 
          value={textoBusqueda}
          onChange={handleBuscar}
          className="search-input"
        />
      </div>

      <div className="main-proyectos-layout">
        {/* LADO IZQUIERDO: Listado de tarjetas */}
        <div className="listado-bloque">
          <h2>Listado de Proyectos</h2>
          <div className="proyectos-grid">
            {proyectos.length > 0 ? (
              proyectos.map((proy) => (
                <ProyectoCard 
                  key={proy.id} 
                  proyecto={proy} 
                  onEliminar={handleEliminar} 
                  onVerDetalle={setProyectoParaDetalle} 
                />
              ))
            ) : (
              <p>No se encontraron proyectos.</p>
            )}
          </div>
        </div>

        {/* LADO DERECHO: Componente de Detalle Dinámico */}
        <div className="detalle-bloque">
          <DetalleProyecto proyectoSeleccionado={proyectoParaDetalle} />
        </div>
      </div>

      <hr className="divider" />

      {/* Formulario integrado con campos extendidos */}
      <div className="formulario-container">
        <h3>Agregar Nuevo Proyecto (Campos Extendidos)</h3>
        <form onSubmit={handleAgregar} className="proyecto-form">
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
            placeholder="Escribe una descripción completa (mínimo dos párrafos sugeridos)..." 
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
          <button type="submit" className="btn-agregar">Guardar Proyecto Completo</button>
        </form>
      </div>

    </div>
  );
}
