import React, { useState, useEffect, useRef } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';
import FormularioProyecto from './FormularioProyecto';
import RegistroActividad from './RegistroActividad';

export default function ListaProyectos() {
  const [proyectosVisibles, setProyectosVisibles] = useState(proyectoService.obtenerProyectos());
  const [listaProyectosReal, setListaProyectosReal] = useState(proyectoService.obtenerProyectos());
  
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [proyectoParaDetalle, setProyectoParaDetalle] = useState(null);

  const [fechaActualizacion, setFechaActualizacion] = useState('');

  const esCargaInicial = useRef(true);

  useEffect(() => {
    if (esCargaInicial.current) {
      esCargaInicial.current = false;
      return;
    }

    const ahora = new Date();
    const dd = String(ahora.getDate()).padStart(2, '0');
    const mm = String(ahora.getMonth() + 1).padStart(2, '0'); 
    const aaaa = ahora.getFullYear();
    const hh = String(ahora.getHours()).padStart(2, '0');
    const min = String(ahora.getMinutes()).padStart(2, '0');

    const mensajeFormateado = `${dd}/${mm}/${aaaa} a las ${hh}:${min} hs.`;
    setFechaActualizacion(mensajeFormateado);

  }, [listaProyectosReal]); 

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    if (proyectoParaDetalle && proyectoParaDetalle.id === id) {
      setProyectoParaDetalle(null);
    }
    
    const actualizados = proyectoService.obtenerProyectos();
    setListaProyectosReal(actualizados);
    setProyectosVisibles(actualizados);
    setTextoBusqueda(''); 
  };

  const handleAgregarNuevoProyecto = (nuevoObjeto) => {
    proyectoService.agregarProyecto(nuevoObjeto);
    
    const actualizados = proyectoService.obtenerProyectos();
    setListaProyectosReal(actualizados);
    setProyectosVisibles(actualizados);
    setTextoBusqueda(''); 
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setTextoBusqueda(valor);
    setProyectosVisibles(proyectoService.buscarProyecto(valor));
  };

  return (
    <div className="proyectos-seccion">
      
      {/* Buscador */}
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
        {/* Tarjetas */}
        <div className="listado-bloque">
          <h2>Listado de Proyectos</h2>
          <div className="proyectos-grid">
            {proyectosVisibles.length > 0 ? (
              proyectosVisibles.map((proy) => (
                <ProyectoCard 
                  key={proy.id} 
                  proyecto={proy} 
                  onEliminar={handleEliminar} 
                  onVerDetalle={setProyectoParaDetalle} 
                />
              ))
            ) : (
              <p>No se encontraron proyectos activos.</p>
            )}
          </div>
        </div>

        {/* Detalles */}
        <div className="detalle-bloque">
          <DetalleProyecto proyectoSeleccionado={proyectoParaDetalle} />
        </div>
      </div>

      <hr className="divider" />

      {/* Formulario encapsulado */}
      <FormularioProyecto onAgregarProyecto={handleAgregarNuevoProyecto} />

      <hr className="divider" />

      {/* Registro de Actividad al final de la vista */}
      <RegistroActividad ultimaActualizacion={fechaActualizacion} />

    </div>
  );
}
