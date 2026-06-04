const proyectoService = (() => {
  // Arreglo inicial con al menos 5 objetos detallados (Requisito de Parte 1, 2 y 3)
  let proyectos = [
    {
      id: 1,
      titulo: "Desarrollo de Aula Virtual UNJu",
      categoria: "Educación",
      estado: "En Curso",
      descripcion: "Esta plataforma está diseñada específicamente para optimizar el entorno de aprendizaje virtual de la Universidad Nacional de Jujuy. Permite una interconexión fluida entre docentes y alumnos de todas las facultades.\n\nEl sistema soporta la carga masiva de archivos pesados, exámenes interactivos con corrección automatizada y un módulo de foros académicos avanzados para debates disciplinares.",
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [
        { nombre: "Ariel Choque", rol: "Coordinador General" },
        { nombre: "Danna Rios", rol: "Desarrolladora Frontend" }
      ]
    },
    {
      id: 2,
      titulo: "Sistema de Comedor Universitario",
      categoria: "Institucional",
      estado: "Pendiente",
      descripcion: "Un software ágil para la gestión de turnos, reservas de menús diarios y control de stock de insumos del comedor. Busca reducir las colas de espera en los horarios pico de las cursadas.\n\nIncluye un sistema de código QR para que los estudiantes universitarios regulares validen su beneficio de manera inmediata al ingresar al establecimiento.",
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [{ nombre: "Marcos Aramayo", rol: "Analista de Datos" }]
    },
    {
      id: 3,
      titulo: "Biblioteca Digital de Ingeniería",
      categoria: "Investigación",
      estado: "Completado",
      descripcion: "Repositorio institucional indexado para almacenar y categorizar tesis, proyectos finales y artículos científicos de la Facultad de Ingeniería. Facilita el acceso democrático al conocimiento académico.\n\nCuenta con un buscador avanzado por palabras clave, autores y años de publicación, además de un lector de PDFs integrado con herramientas de accesibilidad visual.",
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [
        { nombre: "Laura Gutiérrez", rol: "Directora de Proyecto" },
        { nombre: "Carlos Méndez", rol: "Especialista en Base de Datos" }
      ]
    },
    {
      id: 4,
      titulo: "App de Control de Asistencia APU",
      categoria: "Gestión Académica",
      estado: "En Curso",
      descripcion: "Aplicación móvil nativa destinada al cuerpo docente de la carrera de Analista Programador Universitario. Permite registrar las asistencias diarias mediante reconocimiento biométrico o geolocalización.\n\nSincroniza los datos automáticamente con el sistema SIU-Guaraní institucional, emitiendo alertas automatizadas a los alumnos en riesgo de perder la regularidad.",
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [{ nombre: "Danna Rios", rol: "Fullstack Developer" }]
    },
    {
      id: 5,
      titulo: "Simulador de Redes Lógicas",
      categoria: "Ciencias Exactas",
      estado: "Pendiente",
      descripcion: "Herramienta didáctica interactiva web para el aprendizaje práctico de topologías de red y direccionamiento IP dentro de las asignaturas de informática. Permite simular fallos de conectividad en tiempo real.\n\nLos alumnos pueden arrastrar componentes virtuales, configurar máscaras de subred y visualizar el viaje de los paquetes de datos a través de gráficos interactivos animados.",
      recursos: { pdf: "#", drive: "#", github: "#" },
      equipo: [{ nombre: "Walter Flores", rol: "Diseñador UX/UI" }]
    }
  ];

  // Funciones Flecha del Servicio obligatorias (Parte 1)
  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (proyecto) => {
    const nuevoProyecto = {
      ...proyecto,
      id: proyectos.length > 0 ? Math.max(...proyectos.map(p => p.id)) + 1 : 1
    };
    proyectos.push(nuevoProyecto);
    return nuevoProyecto;
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    const termino = texto.toLowerCase().trim();
    if (!termino) return obtenerProyectos();
    return proyectos.filter(p => p.titulo.toLowerCase().includes(termino));
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;
