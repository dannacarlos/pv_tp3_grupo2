const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Sistema de Alertas SAME", categoria: "Salud", estado: "En Curso" },
    { id: 2, titulo: "E-commerce de Artesanías", categoria: "Comercio", estado: "Completado" },
    { id: 3, titulo: "Gestión de Notas Universitarias", categoria: "Educación", estado: "Pendiente" },
    { id: 4, titulo: "Control de Stock Comercial", categoria: "Comercio", estado: "En Curso" },
    { id: 5, titulo: "App Estacionamiento Urbano", categoria: "Tránsito", estado: "Pendiente" }
  ];

  const obtenerProyectos = () => [...proyectos]; // Retorna una copia del arreglo actual

  const agregarProyecto = (nuevoProyecto) => {
    
    const proyectoConId = { ...nuevoProyecto, id: Date.now() };
    proyectos = [...proyectos, proyectoConId];
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;