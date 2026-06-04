const proyectoService = (() => {
  // Arreglo actualizado con la información extendida requerida (descripción, recursos y equipo)
  let proyectos = [
    { 
      id: 1, 
      titulo: "Sistema de Alertas SAME", 
      categoria: "Salud", 
      estado: "En Curso",
      descripcion: "Este proyecto consiste en el desarrollo de un módulo de software interactivo para optimizar los tiempos de respuesta ante emergencias médicas en la provincia. Permite geolocalizar ambulancias en tiempo real y coordinar con las centrales de despacho de manera automatizada.",
      recursos: { pdf: "https://same.jujuy.gob.ar/informe.pdf", drive: "https://drive.google.com/same-tp3", github: "https://github.com/grupo2/same-app" },
      equipo: [
        { nombre: "Danna Rios", rol: "Coordinadora de Desarrollo" },
        { nombre: "Santiago López", rol: "Diseñador de Interfaz (UI/UX)" }
      ]
    },
    { 
      id: 2, 
      titulo: "E-commerce de Artesanías", 
      categoria: "Comercio", 
      estado: "Completado",
      descripcion: "Plataforma web orientada a la visibilización y comercialización de productos artesanales de la Quebrada de Humahuaca. Ofrece un catálogo interactivo, pasarela de pagos regionales y un panel de administración intuitivo para los artesanos.",
      recursos: { pdf: "https://artesanias.org/manual.pdf", drive: "https://drive.google.com/artesanias", github: "https://github.com/grupo2/artesanias-shop" },
      equipo: [
        { nombre: "Nico Torres", rol: "Desarrollador Backend" },
        { nombre: "Tati Benitez", rol: "Especialista en Bases de Datos" }
      ]
    },
    { 
      id: 3, 
      titulo: "Gestión de Notas Universitarias", 
      categoria: "Educación", 
      estado: "Pendiente",
      descripcion: "Un entorno digital pensado para centralizar la carga de calificaciones, asistencias y actas de examen de la Facultad de Ingeniería. Promueve la despapelización administrativa y facilita el acceso a la información académica de los estudiantes.",
      recursos: { pdf: "https://unju.edu.ar/proyecto-notas.pdf", drive: "https://drive.google.com/unju-notas", github: "https://github.com/grupo2/unju-notas" },
      equipo: [
        { nombre: "Lautaro Gómez", rol: "Desarrollador Frontend" },
        { nombre: "Martín Bonari", rol: "Analista de Sistemas" }
      ]
    }
  ];

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (nuevoProyecto) => {
    const proyectoConId = { 
      ...nuevoProyecto, 
      id: Date.now(),
      descripcion: nuevoProyecto.descripcion || "Sin descripción detallada por el momento.",
      recursos: nuevoProyecto.recursos || { pdf: "#", drive: "#", github: "#" },
      equipo: nuevoProyecto.equipo || [{ nombre: "Integrante", rol: "Desarrollador" }]
    };
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
