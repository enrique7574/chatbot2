// Datos de docentes y personal administrativo para la tabla interactiva

const teacherData = [
  { name: "Juan Vicente Laura Siñani", role: "DIRECTOR", subject: "Dirección Administrativa", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Lilian Mamani Gutierrez", role: "SECRETARIA", subject: "Secretaría y Trámites", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Marvin Amaya Vidal", role: "DOCENTE", subject: "Ciencias Sociales", hours: "-", form: "Maestro Pitágoras II", courses: ["5to B", "1ro B", "1ro C", "5to A", "5to C", "5to B", "5to C", "5to A"] },

  { name: "Julio Cesar Arancibia Calizaya", role: "DOCENTE", subject: "Matemática", hours: "-", form: "Maestro Pitágoras II", courses: ["6to A", "6to C", "5to C", "5to A", "5to B", "6to A", "6to B", "5to C", "5to A", "5to B", "6to C", "6to B"] },

  { name: "Susy Nahir Cabrera Moron", role: "DOCENTE", subject: "Biología", hours: "-", form: "Maestro Pitágoras II", courses: ["5to B", "1ro B", "1ro C", "2do A", "2do C", "1ro C", "5to C", "5to A", "5to B"] },

  { name: "Rene Efrain Chipana Huanca", role: "DOCENTE", subject: "Inglés", hours: "-", form: "Maestro Pitágoras II", courses: ["5to C", "2do B", "4to B", "6to B", "1ro C", "2do C", "5to B", "5to A", "2do A", "3ro B", "1ro B", "3ro A"] },
  { name: "Efrain Chumacero Quispe", role: "DOCENTE", subject: "Biología", hours: "-", form: "Maestro Pitágoras II", courses: ["6to B", "6to A", "6to C", "2do A", "2do C", "6to C", "2do B"] },

  { name: "Eloina Ferrufino Quispe", role: "DOCENTE", subject: "Psicología y Artes Plásticas", hours: "-", form: "Maestro Pitágoras II", courses: ["2do A - Psicología", "1ro A - Psicología", "1ro B - Psicología", "1ro C - Psicología", "2do C - Artes Plásticas", "2do B - Psicología"] },

  { name: "Patricia Paola Garcia Quintana", role: "DOCENTE", subject: "Matemática", hours: "-", form: "Maestro Pitágoras II", courses: ["1ro B", "1ro C", "2do B", "2do C", "1ro C", "1ro B", "2do C", "2do B", "2do A", "1ro A", "2do A", "1ro A", "1ro C"] },

  { name: "Sergio Ramiro Gareca Rodriguez", role: "DOCENTE", subject: "Lenguaje", hours: "-", form: "Maestro Pitágoras II", courses: ["2do C", "5to C", "6to C", "2do A", "2do B", "2do A", "6to A", "6to B", "6to C", "6to B", "2do C", "5to C"] },

  { name: "Edmundo Gutierrez Lopez", role: "DOCENTE", subject: "Ciencias Sociales", hours: "-", form: "Maestro Pitágoras II", courses: ["2do A", "6to C", "6to B", "6to A", "2do A", "2do B", "6to A", "2do B", "6to C"] },

  { name: "Ruben Carlos Huarachi Melgarejo", role: "DOCENTE", subject: "Música y Educación Física", hours: "-", form: "Maestro Pitágoras II", courses: ["1ro A - Música", "5to B - Música", "6to B - Música", "6to C - Música", "6to C - Educación Física", "1ro B - Música", "5to A - Música", "6to A - Educación Física", "6to B - Educación Física"] },

  { name: "Edson Iriarte Alvarez", role: "DOCENTE", subject: "Artes Plásticas", hours: "-", form: "Maestro Pitágoras II", courses: ["3ro C", "4to C", "6to A", "4to A", "5to B", "6to C", "3ro A", "3ro B", "6to B", "5to C", "4to B", "2do A"] },

  { name: "Micaela Del Carmen Lucana Vinaya", role: "DOCENTE", subject: "Lenguaje", hours: "-", form: "Maestro Pitágoras II", courses: ["3ro A", "3ro B", "5to B", "5to A", "3ro A", "5to A", "3ro C", "3ro C", "3ro A", "4to C", "3ro C", "5to B", "3ro B"] },

  { name: "Juan Diego Montano Vallejos", role: "DOCENTE", subject: "Matemática", hours: "-", form: "Maestro Pitágoras II", courses: ["4to C", "4to A", "3ro B", "3ro C", "4to B", "3ro B", "4to C", "3ro A", "3ro C", "3ro B", "4to C", "3ro A", "4to B", "4to A", "3ro C"] },

  { name: "Eliceo Zapata Guillen", role: "DOCENTE", subject: "Ciencias Sociales", hours: "-", form: "Maestro Pitágoras II", courses: ["4to A", "3ro A", "3ro C", "4to C", "4to A", "3ro A", "4to B", "3ro B", "3ro C", "4to C", "3ro B", "3ro C", "4to B", "3ro A", "4to C", "4to A", "4to B", "3ro B"] },

  { name: "Elena Arancibia Hurtado", role: "DOCENTE", subject: "Filosofía", hours: "-", form: "Maestro Pitágoras II", courses: ["6to C", "5to A", "3ro A", "6to A", "3ro B", "5to C", "4to A", "3ro C", "4to B", "6to B", "2do C"] },

  { name: "Victor Hugo Benito Equise", role: "DOCENTE", subject: "Física, Química y Ciencias Sociales", hours: "-", form: "Maestro Pitágoras II", courses: ["5to A - Física", "6to B - Física", "5to C - Física", "5to C - Química", "6to A - Química", "2do C - Ciencias Sociales", "6to C - Física", "5to B - Química", "5to A - Química", "6to B - Química"] },

  { name: "Deisy Lilia Caballero Arancibia", role: "DOCENTE", subject: "Música e Inglés", hours: "-", form: "Maestro Pitágoras II", courses: ["3ro B - Música", "2do C - Música", "4to A - Música", "1ro A - Inglés", "2do B - Música", "4to C - Música", "2do A - Música", "3ro A - Música", "4to B - Música", "3ro C - Música"] },

  { name: "Abel Cerezo Loayza", role: "DOCENTE", subject: "Religión", hours: "-", form: "Maestro Pitágoras II", courses: ["4to B", "5to C", "1ro A", "6to B", "6to C", "1ro C", "6to A", "2do B", "4to B", "1ro B"] },

  { name: "Gustavo Eduardo Coronel Pardo", role: "DOCENTE", subject: "Química, Física y Artes Plásticas", hours: "-", form: "Maestro Pitágoras II", courses: ["3ro B - Química", "3ro C - Física", "1ro B - Artes Plásticas", "4to B - Física", "4to C - Física", "3ro A - Química", "4to A - Química", "4to C - Química"] },

  { name: "Goldy Columba Terrazas", role: "DOCENTE", subject: "Tecnología", hours: "-", form: "Maestro Pitágoras II", courses: ["2do B", "2do A", "2do C", "2do C", "1ro C", "2do B", "1ro A", "1ro B", "1ro C", "2do A", "1ro A"] },

  { name: "Rita Escobar Zabala", role: "DOCENTE", subject: "Lenguaje", hours: "-", form: "Maestro Pitágoras II", courses: ["1ro C", "4to B", "1ro A", "1ro B", "1ro A", "4to B", "1ro B", "1ro C", "4to A"] },

  { name: "Sonia Carmen Tinta Tinta", role: "DOCENTE", subject: "Biología", hours: "-", form: "Maestro Pitágoras II", courses: ["4to B", "3ro C", "4to C", "3ro A", "4to B", "3ro B", "4to A", "3ro C", "4to C", "3ro B", "4to A", "3ro C", "3ro A"] },

  { name: "Yoanna Raquel Cachi Laura", role: "DOCENTE", subject: "Por asignar", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Belen Rocio Carballo Orellana", role: "DOCENTE", subject: "Por asignar", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Evelyn Coimbra Rojas", role: "DOCENTE", subject: "Por asignar", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Elias Puma Grimaldes", role: "DOCENTE", subject: "Sistemas Informáticos / Técnico Medio", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Ignacia Vega Sanchez", role: "DOCENTE", subject: "Por asignar", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Pablo Becerra Vidal", role: "DOCENTE", subject: "Por asignar", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Abinadi Cuellar Gutierrez", role: "REGENTE", subject: "Disciplina y Control", hours: "-", form: "Maestro Pitágoras II", courses: [] },

  { name: "Mary Ybeth Miranda Toledo", role: "PORTERA", subject: "Portería y Mantenimiento", hours: "-", form: "Maestro Pitágoras II", courses: [] }
];

const civicDates = [
  {date:'1 de enero', title:'Año Nuevo', note:'Feriado nacional.'},
  {date:'22 de enero', title:'Creación del Estado Plurinacional de Bolivia', note:'En 2026 la suspensión se trasladó al 23 de enero.'},
  {date:'16 y 17 de febrero', title:'Carnaval', note:'Feriado nacional.'},
  {date:'3 de abril', title:'Viernes Santo', note:'Feriado nacional.'},
  {date:'12 de abril', title:'Día del Niño Boliviano', note:'Fecha cívica escolar.'},
  {date:'1 de mayo', title:'Día del Trabajo', note:'Feriado nacional.'},
  {date:'27 de mayo', title:'Día de la Madre Boliviana', note:'Fecha cívica escolar.'},
  {date:'4 y 5 de junio', title:'Corpus Christi', note:'Feriado nacional con puente 2026.'},
  {date:'6 de junio', title:'Día del Maestro Boliviano', note:'Fecha importante para la comunidad educativa.'},
  {date:'21 de junio', title:'Año Nuevo Andino Amazónico Chaqueño', note:'En 2026 la suspensión se trasladó al 22 de junio.'},
  {date:'6 y 7 de agosto', title:'Independencia de Bolivia', note:'Feriado nacional con puente 2026.'},
  {date:'17 de agosto', title:'Día de la Bandera', note:'Fecha cívica escolar.'},
  {date:'21 de septiembre', title:'Día del Estudiante y de la Primavera', note:'Fecha cívica escolar.'},
  {date:'24 de septiembre', title:'Gesta Libertaria de Santa Cruz', note:'Fecha cívica departamental.'},
  {date:'11 de octubre', title:'Día de la Mujer Boliviana', note:'Fecha cívica.'},
  {date:'12 de octubre', title:'Día de la Descolonización', note:'Fecha cívica.'},
  {date:'2 de noviembre', title:'Día de Todos los Difuntos', note:'Feriado nacional.'},
  {date:'25 de diciembre', title:'Navidad', note:'Feriado nacional.'}
];

const schedule = [
  {month:'Septiembre', title:'Recolección de información', desc:'Investigación sobre necesidades del colegio y ejemplos de chatbots.'},
  {month:'Septiembre', title:'Diseño del proyecto', desc:'Definir estructura, funciones y propósito del chatbot.'},
  {month:'Octubre', title:'Flujo conversacional', desc:'Crear preguntas, respuestas y lógica de interacción.'},
  {month:'Octubre', title:'Selección de plataforma', desc:'Elegir Python, Dialogflow, Botpress o web estática.'},
  {month:'Octubre - Noviembre', title:'Programación del chatbot', desc:'Código, entrenamiento y configuración del sistema.'},
  {month:'Noviembre', title:'Pruebas del sistema', desc:'Probar respuestas y corregir errores.'},
  {month:'Noviembre', title:'Presentación del proyecto', desc:'Preparar informe, anexos y exposición.'}
];

const knowledge = {
  projectName:'Chatbot básico para fortalecer la comunicación en el colegio',
  school:'Unidad Educativa Técnico Humanístico Maestro Pitágoras II',
  level:'Nivel secundario',
  shift:'Turno tarde',
  district:'La Guardia, Santa Cruz - Bolivia',
  address:'La Guardia Km 15, Barrio Cumbre de las Américas. El documento del proyecto también menciona el barrio Las Barreras del municipio de La Guardia.',
  nucleus:'Grigotá',
  subdistrict:'La Guardia',
  year:'2026',
  authors:['Alex Ronal Perka Soliz','Enrique Yepez'],
  guide:'Prof. Juan Diego Montano Vallejos',
  fee:'Bs 15 mensuales durante 10 meses. Total: Bs 150 por estudiante.',
  contact:'El número telefónico no está llenado en los documentos cargados. Para pagos o consultas, contactar con secretaría o dirección de la unidad educativa.',
  objectiveGeneral:'Implementar el desarrollo completo de un chatbot académico para el colegio, mediante programación en plataformas digitales y diseño de respuestas automatizadas, para brindar información rápida sobre horarios y consultas básicas a estudiantes, docentes y padres de familia.',
  objectives:[
    'Diseñar la estructura básica del chatbot mediante un flujo de preguntas y respuestas.',
    'Programar las funciones principales usando herramientas digitales adecuadas.',
    'Integrar el chatbot en una plataforma accesible para docentes y alumnos con funcionamiento 24/7.',
    'Evaluar el rendimiento con pruebas internas de precisión, rapidez y utilidad.',
    'Optimizar y actualizar el chatbot según resultados obtenidos.'
  ],
  problem:'La unidad educativa necesita fortalecer la comunicación institucional porque existen retrasos en avisos, saturación de grupos de WhatsApp, repetición de consultas en secretaría y falta de atención rápida a estudiantes y padres de familia.',
  justification:'El chatbot reduce tiempos de espera, mejora la organización interna, brinda respuestas inmediatas y permite aplicar habilidades técnicas de la especialidad de Sistemas Informáticos.',
  resources:['Celular','Computadora','Cuaderno o agenda','Lapiceros','Acceso a internet','Herramientas gratuitas'],
  budget:[
    ['Computadora','1','Bs 3500','Bs 3500'],
    ['Internet','1','Bs 100','Bs 100'],
    ['Cuaderno','1','Bs 20','Bs 20'],
    ['Lapicero','2','Bs 5','Bs 10']
  ],
  expected:[
    'Chatbot funcional para responder dudas frecuentes de estudiantes y docentes.',
    'Comunicación más rápida y precisa entre alumnos y personal del colegio.',
    'Reducción de consultas repetitivas para docentes y administración.',
    'Acceso inmediato a horarios, reglamentos, actividades y eventos.',
    'Sistema actualizable y mantenible sin depender de personal externo.'
  ],
  enrollment:[
    {form:'Maestro Pitágoras II', first:126, second:127, third:132, fourth:121, fifth:109, sixth:88, courses:18, total:721},

  ]
};

const systemsTopics = [
  {
    keywords: ["informatica", "que es informatica"],
    title: "Informática básica",
    answer: "La informática es el área que estudia el tratamiento automático de la información mediante computadoras. Un dato es un valor individual y la información son datos organizados con significado."
  },
  {
    keywords: ["hardware", "software", "componentes", "computadora", "procesador", "cpu", "ram", "memoria ram", "disco duro", "ssd", "placa madre", "monitor", "teclado", "mouse"],
    title: "Componentes de una computadora",
    answer: "<b>Hardware:</b> son las partes físicas de una computadora, como el monitor, teclado y procesador.<br><br><b>Software:</b> son los programas y sistemas que permiten realizar tareas.<br><br><b>Componentes principales:</b><ul><li>Procesador (CPU): ejecuta instrucciones.</li><li>Memoria RAM: almacena temporalmente datos de trabajo.</li><li>Disco SSD o HDD: guarda archivos y programas.</li><li>Placa madre: conecta los componentes.</li><li>Monitor: muestra información.</li><li>Teclado y mouse: permiten introducir datos e interactuar.</li></ul>"
  },
  {
    keywords: ["windows", "sistema operativo", "escritorio", "carpeta", "explorador de archivos", "papelera"],
    title: "Sistema operativo Windows",
    answer: "Windows es un sistema operativo que permite administrar los recursos de la computadora y ejecutar programas.<ul><li>Escritorio: pantalla principal.</li><li>Carpetas: organizan archivos.</li><li>Explorador de archivos: administra documentos.</li><li>Papelera de reciclaje: almacena temporalmente archivos eliminados.</li></ul>"
  },
  {
    keywords: ["office", "word", "excel", "powerpoint"],
    title: "Microsoft Office",
    answer: "<ul><li><b>Word:</b> permite crear y editar documentos.</li><li><b>Excel:</b> permite organizar datos y realizar cálculos.</li><li><b>PowerPoint:</b> permite crear presentaciones con diapositivas.</li></ul>Estas herramientas se utilizan en actividades escolares y laborales."
  },
  {
    keywords: ["internet", "navegador", "buscador", "correo electronico", "url"],
    title: "Internet y navegación",
    answer: "Internet es una red mundial que conecta dispositivos y permite compartir información.<ul><li>Navegador: programa para visitar sitios web.</li><li>Buscador: herramienta para encontrar información.</li><li>Correo electrónico: permite enviar y recibir mensajes.</li><li>URL: dirección de un recurso en internet.</li></ul>"
  },
  {
    keywords: ["mantenimiento", "limpieza", "mantenimiento preventivo"],
    title: "Mantenimiento preventivo",
    answer: "Consiste en realizar cuidados periódicos para conservar una computadora en buenas condiciones.<ul><li>Mantener limpio el equipo.</li><li>No obstruir la ventilación.</li><li>Actualizar el sistema y los programas.</li><li>Organizar y respaldar los archivos.</li><li>Revisar el funcionamiento del equipo.</li></ul>"
  },
  {
    keywords: ["red", "redes", "lan", "wan", "router", "switch", "direccion ip"],
    title: "Redes informáticas",
    answer: "Una red informática conecta dos o más dispositivos para compartir información y recursos.<ul><li>LAN: red de área local.</li><li>WAN: red de área amplia.</li><li>Router: dirige el tráfico entre redes.</li><li>Switch: conecta dispositivos dentro de una red local.</li><li>Dirección IP: identifica un dispositivo en una red.</li></ul>"
  },
  {
    keywords: ["seguridad informatica", "antivirus", "contrasena", "contraseña", "copia de seguridad", "virus informatico"],
    title: "Seguridad informática",
    answer: "La seguridad informática busca proteger los dispositivos, programas y datos frente a accesos o daños no autorizados.<ul><li>Utilizar contraseñas seguras.</li><li>No abrir enlaces sospechosos.</li><li>Mantener actualizado el antivirus.</li><li>Realizar copias de seguridad.</li><li>No compartir información personal con desconocidos.</li></ul>"
  }
];

// ==========================================
// REGLAMENTO INTERNO - U.E. MAESTRO PITAGORAS II
// Gestión 2026
// Basado en el documento proporcionado.
// Su vigencia debe ser confirmada por Dirección.
// ==========================================

const reglamentoTopics = [
  {
    keywords: [
      "reglamento interno",
      "reglamento del colegio",
      "normas del colegio",
      "normas de la unidad educativa"
    ],
    title: "Reglamento Interno",
    answer: "El Reglamento Interno de la U.E. Maestro Pitágoras II establece normas para estudiantes, padres de familia, docentes y personal administrativo. Su objetivo es orientar la convivencia y el funcionamiento de la institución. Esta información se basa en el documento proporcionado y debe ser confirmada por Dirección para la gestión 2026."
  },
  {
    keywords: [
      "deberes del estudiante",
      "obligaciones del estudiante",
      "que debe hacer un estudiante"
    ],
    title: "Deberes del estudiante",
    answer: "Según el artículo 6 del reglamento proporcionado, los estudiantes deben:<ul><li>Respetar a directivos, docentes, administrativos, compañeros y padres de familia.</li><li>Asistir puntualmente a clases.</li><li>Cuidar la infraestructura, mobiliario y materiales.</li><li>Practicar el respeto, la responsabilidad y la solidaridad.</li><li>Cumplir las actividades e instrucciones educativas.</li><li>Utilizar correctamente los materiales escolares.</li><li>Evitar apropiarse de bienes ajenos.</li></ul>"
  },
  {
    keywords: [
      "derechos del estudiante",
      "derechos de los estudiantes",
      "que derechos tengo como estudiante"
    ],
    title: "Derechos del estudiante",
    answer: "Según el artículo 7 del documento, los estudiantes tienen derecho a:<ul><li>Recibir una educación integral y de calidad.</li><li>Ser tratados con respeto y dignidad.</li><li>Estudiar en un ambiente de armonía y sin discriminación.</li><li>Recibir apoyo durante su aprendizaje.</li><li>Ser evaluados adecuadamente.</li><li>Participar en organizaciones estudiantiles.</li><li>Expresar libremente sus opiniones.</li><li>Proteger su identidad y sus datos personales.</li></ul>"
  },
  {
    keywords: [
      "celular",
      "celulares",
      "telefono",
      "telefonos",
      "equipos moviles",
      "puedo llevar celular",
      "uso del celular"
    ],
    title: "Uso de celulares y dispositivos",
    answer: "El artículo 6, inciso n, del reglamento proporcionado indica que durante las clases presenciales está prohibido llevar equipos móviles y otros objetos que no sean material escolar. Señala como excepción los casos autorizados por el docente y con el permiso correspondiente de Dirección. Confirma con Dirección si esta disposición continúa vigente en 2026."
  },
  {
    keywords: [
      "uniforme",
      "uniforme escolar",
      "vestimenta",
      "como debo asistir vestido"
    ],
    title: "Uniforme escolar",
    answer: "El artículo 6, inciso g, establece que los estudiantes deben presentarse con el uniforme consensuado y aceptado por los padres de familia durante las actividades escolares indicadas en el reglamento. Para conocer posibles actualizaciones, consulta con Dirección."
  },
  {
    keywords: [
      "inasistencia",
      "faltar a clases",
      "justificar falta",
      "justificar inasistencia",
      "licencia",
      "permiso para faltar"
    ],
    title: "Justificación de inasistencias",
    answer: "El artículo 6 del documento contempla diferentes situaciones:<ul><li>Dolencias menores: presentar una licencia escrita mediante Secretaría.</li><li>Enfermedades o situaciones graves: presentar una solicitud escrita a Dirección adjuntando certificado médico.</li><li>Emergencias: comunicar la situación al tutor y respaldar la información.</li></ul>También se indica que las inasistencias deben justificarse por escrito. Consulta con Secretaría o Dirección para conocer el procedimiento vigente."
  },
  {
    keywords: [
      "horario turno mañana",
      "turno mañana",
      "horario de la mañana"
    ],
    title: "Horario del turno mañana",
    answer: "El documento proporcionado señala el siguiente horario para las clases técnicas del turno mañana:<ul><li>Ingreso: 07:45.</li><li>Salida: 12:05.</li></ul>Confirma con la institución si este horario continúa vigente para la gestión 2026."
  },
  {
    keywords: [
      "horario turno tarde",
      "turno tarde",
      "horario de la tarde"
    ],
    title: "Horario del turno tarde",
    answer: "El documento proporcionado señala el siguiente horario para las clases humanísticas del turno tarde:<ul><li>Ingreso: 13:45.</li><li>Salida: 18:05.</li></ul>Confirma con la institución si este horario continúa vigente para la gestión 2026."
  },
  {
    keywords: [
      "deberes de los padres",
      "obligaciones de los padres",
      "responsabilidades de los padres"
    ],
    title: "Deberes de los padres de familia",
    answer: "Según el artículo 9 del documento, los padres de familia deben:<ul><li>Conocer y respetar el Reglamento Interno.</li><li>Asistir a las reuniones convocadas.</li><li>Acompañar el proceso educativo de sus hijos.</li><li>Garantizar la asistencia regular a clases.</li><li>Justificar atrasos e inasistencias.</li><li>Mantener un trato respetuoso con la comunidad educativa.</li><li>Presentar reclamos o sugerencias por escrito y respetando el conducto regular.</li></ul>"
  },
  {
    keywords: [
      "derechos de los padres",
      "derechos de padres de familia"
    ],
    title: "Derechos de los padres de familia",
    answer: "Según el artículo 10 del documento, los padres de familia tienen derecho a:<ul><li>Conocer el desempeño educativo de sus hijos.</li><li>Ser atendidos por directivos y docentes.</li><li>Solicitar documentos e instrumentos de evaluación.</li><li>Participar en las directivas de padres de familia.</li></ul>"
  },
  {
    keywords: [
      "faltas leves",
      "falta leve",
      "que son las faltas leves"
    ],
    title: "Faltas leves",
    answer: "El artículo 15 considera faltas leves, entre otras:<ul><li>Asistir irregularmente o llegar tarde sin justificación.</li><li>Provocar desorden que afecte las clases.</li><li>Retirarse de clases sin permiso.</li><li>No llevar los materiales necesarios.</li><li>Usar inadecuadamente dispositivos móviles durante las clases.</li><li>Asistir sin el uniforme establecido.</li></ul>"
  },
  {
    keywords: [
      "sanciones faltas leves",
      "sancion falta leve",
      "castigo falta leve"
    ],
    title: "Medidas por faltas leves",
    answer: "El artículo 16 del documento menciona reflexión, llamada de atención verbal, registro en el kardex de indisciplina y trabajo comunitario. La aplicación debe seguir los procedimientos institucionales y la normativa vigente."
  },
  {
    keywords: [
      "faltas graves",
      "falta grave",
      "que son las faltas graves"
    ],
    title: "Faltas graves",
    answer: "El artículo 17 del documento incluye como faltas graves, entre otras:<ul><li>Reincidir en faltas leves.</li><li>Promover peleas o amenazas.</li><li>Insultar, acosar o discriminar a otras personas.</li><li>Dańar la infraestructura o los materiales del colegio.</li><li>Salir de la institución sin autorización.</li><li>Presentar trabajos ajenos como propios.</li><li>Hurtar pertenencias.</li><li>Realizar publicaciones ofensivas contra miembros de la comunidad educativa.</li></ul>"
  },
  {
    keywords: [
      "sanciones faltas graves",
      "sancion falta grave"
    ],
    title: "Medidas por faltas graves",
    answer: "El artículo 18 del documento menciona llamadas de atención escritas, registro en actas, reparación de daños, decomiso de objetos relacionados con el hecho y trabajo comunitario. También menciona suspensión temporal. Cualquier medida debe ser revisada conforme a la normativa vigente, respetando el debido proceso y los derechos de los estudiantes."
  },
  {
    keywords: [
      "faltas muy graves",
      "falta muy grave",
      "que son las faltas muy graves"
    ],
    title: "Faltas muy graves",
    answer: "El artículo 19 del documento considera muy graves determinadas conductas que afectan la integridad de las personas, como robo comprobado, agresiones, acoso, discriminación y difusión de imágenes que afectan la privacidad. Estas situaciones deben ser atendidas por las autoridades correspondientes, respetando los derechos y garantías de los estudiantes."
  },
  {
    keywords: [
      "sanciones faltas muy graves",
      "sancion falta muy grave",
      "expulsion",
      "pueden expulsarme"
    ],
    title: "Procedimiento ante faltas muy graves",
    answer: "El artículo 20 del documento menciona la remisión de antecedentes a las instancias competentes y medidas disciplinarias. Sin embargo, no debe interpretarse como una expulsión automática. Las decisiones deben respetar la normativa educativa vigente, el debido proceso y los derechos de niñas, niños y adolescentes. Para un caso concreto, consulta con Dirección."
  },
  {
    keywords: [
      "valores del colegio",
      "valores institucionales",
      "que valores practica el colegio"
    ],
    title: "Valores institucionales",
    answer: "El artículo 4 del documento menciona valores como amor, respeto, igualdad, inclusión, dignidad, tolerancia, libertad, solidaridad, reciprocidad, complementariedad, armonía, transparencia, equilibrio, equidad y responsabilidad."
  },
  {
    keywords: [
      "reclamo",
      "reclamos",
      "sugerencia",
      "presentar reclamo",
      "conducto regular"
    ],
    title: "Reclamos y sugerencias",
    answer: "El artículo 9, inciso k, indica que los reclamos o sugerencias deben presentarse por escrito, respetando el conducto regular vigente en la Unidad Educativa. Puedes consultar en Secretaría o Dirección cuál es el procedimiento correspondiente."
  }
];

// Buscar consultas relacionadas con el reglamento
function findReglamentoTopic(query) {
  const q = normalize(query);

  return reglamentoTopics.find(topic =>
    topic.keywords.some(keyword =>
      q.includes(normalize(keyword))
    )
  );
}

const messages = document.getElementById('messages');
const form = document.getElementById('chatForm');
const input = document.getElementById('userInput');
const teacherSearch = document.getElementById('teacherSearch');
const teacherTable = document.querySelector('#teacherTable tbody');
const teacherCount = document.getElementById('teacherCount');
const datesList = document.getElementById('datesList');
const scheduleList = document.getElementById('scheduleList');
const backTop = document.getElementById('backTop');

function normalize(text){
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9ñ\s\.]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function escapeHTML(text){
  return String(text).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function table(headers, rows){
  return `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function list(items){
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function addMessage(content, sender='bot'){
  const item = document.createElement('div');
  item.className = `message ${sender}`;
  item.innerHTML = `<div class="bubble">${content}</div>`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function addTyping(){
  const item = document.createElement('div');
  item.className = 'message bot typing-message';
  item.innerHTML = `<div class="bubble typing"><span></span><span></span><span></span></div>`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
  return item;
}

function findTeachers(query){
  const q = normalize(query);
  const tokens = q.split(' ').filter(t => t.length > 2);
  return teacherData.filter(t => {
    const hay = normalize(`${t.name} ${t.role} ${t.subject} ${t.hours} ${t.form}`);
    if(hay.includes(q)) return true;
    return tokens.some(token => hay.split(/\s+/).includes(token));
  });
}

function teacherRows(data = teacherData){
  return data.map(t => [t.name, t.role, t.subject, t.hours, t.form]);
}

function enrollmentHTML(){
  return table(
    ['Formulario','1º','2º','3º','4º','5º','6º','Cursos','Total alumnos'],
    knowledge.enrollment.map(e => [e.form,e.first,e.second,e.third,e.fourth,e.fifth,e.sixth,e.courses,e.total])
  ) + `<p><b>Importante:</b> los nombres de estudiantes no fueron incluidos en los archivos cargados; por eso no se inventa una lista nominal.</p>`;
}

function datesHTML(){
  return table(['Fecha','Actividad','Detalle'], civicDates.map(d => [d.date, d.title, d.note]));
}

function scheduleHTML(){
  return table(['Mes','Actividad','Descripción'], schedule.map(s => [s.month, s.title, s.desc]));
}

function budgetHTML(){
  const rows = knowledge.budget.map(item => item);
  return table(['Ítem','Cantidad','Precio unitario','Precio total'], rows) + `<p><b>Total de materiales básicos:</b> Bs 130. <b>Computadora referencial:</b> Bs 3500.</p>`;
}

function reply(raw){
  const q = normalize(raw);

  // Consultas del Reglamento Interno
  const matchedReglamento = findReglamentoTopic(raw);

  if (matchedReglamento) {
    return `<b>${matchedReglamento.title}:</b><br>
    ${matchedReglamento.answer}
    <br><br><small>Información basada en el reglamento proporcionado. Verifica su vigencia con Dirección.</small>`;
  }

  const matchedTopic = systemsTopics.find(topic =>
  topic.keywords.some(keyword => q.includes(normalize(keyword)))
);

if(matchedTopic){
  return `<b>${matchedTopic.title}:</b><br>${matchedTopic.answer}`;
}
  const matchedTeachers = findTeachers(raw);

  if(!q || ['hola','buenas','ayuda','menu','inicio','que puedes responder'].some(k => q.includes(k))){
    return `Hola. Soy <b>PitagorasBot</b>. Puedo responder sobre:${list(['Objetivo del proyecto','Docentes, cargos, materias y horas','Matrícula escolar por curso','Mensualidad y contacto','Fechas cívicas 2026','Recursos, presupuesto y cronograma','Autores y docente guía'])}`;
  }

  if(q.includes('objetivo') || q.includes('proposito') || q.includes('finalidad')){
    return `<b>Objetivo general:</b><br>${knowledge.objectiveGeneral}<br><br><b>Objetivos específicos:</b>${list(knowledge.objectives)}`;
  }

  if(q.includes('problema') || q.includes('necesidad') || q.includes('diagnostico')){
    return `<b>Problema o necesidad:</b><br>${knowledge.problem}<br><br><b>Justificación:</b><br>${knowledge.justification}`;
  }

  if(q.includes('justificacion')){
    return `<b>Justificación:</b><br>${knowledge.justification}`;
  }

  if(q.includes('autor') || q.includes('postulante') || q.includes('estudiante autor') || q.includes('quienes hicieron') || q.includes('docente guia')){
    return `<b>Autores del proyecto:</b>${list(knowledge.authors)}<b>Docente guía:</b> ${knowledge.guide}.<br><b>Especialidad:</b> Sistemas Informáticos, Técnico Medio.`;
  }

  if(q.includes('mensual') || q.includes('cuota') || q.includes('pago') || q.includes('pagar') || q.includes('boliviano') || q.includes('bs') || q.includes('costo por hijo')){
    return `<b>Mensualidad:</b> ${knowledge.fee}<br><br><b>Contacto:</b> ${knowledge.contact}`;
  }

  if(q.includes('contacto') || q.includes('numero') || q.includes('telefono') || q.includes('secretaria') || q.includes('direccion')){
    return `<b>Contacto:</b> ${knowledge.contact}<br><br><b>Dirección registrada:</b> ${knowledge.address}`;
  }

  if(q.includes('ubicacion') || q.includes('direccion') || q.includes('barrio') || q.includes('donde queda') || q.includes('la guardia')){
    return `<b>Ubicación:</b> ${knowledge.address}<br><b>Municipio:</b> ${knowledge.district}.<br><b>Núcleo escolar:</b> ${knowledge.nucleus}. <b>Subdistrito:</b> ${knowledge.subdistrict}.`;
  }

  if(q.includes('turno') || q.includes('horario') || q.includes('manana') || q.includes('tarde')){
    return `<b>Turno registrado:</b> ${knowledge.shift}.<br>Los partes de asistencia muestran horas de trabajo por docente, pero no indican hora exacta de entrada ni de salida.`;
  }

  if(q.includes('matricula') || q.includes('alumno') || q.includes('estudiante') || q.includes('cantidad') || q.includes('curso') || q.includes('grado')){
    if(q.includes('nombre') || q.includes('lista')){
      return `La lista con nombres de estudiantes <b>no fue cargada</b>. Solo se cuenta con matrícula por curso:${enrollmentHTML()}`;
    }
    return `<b>Matrícula escolar registrada:</b>${enrollmentHTML()}`;
  }

  if(q.includes('fecha') || q.includes('civica') || q.includes('feriado') || q.includes('calendario') || q.includes('acto')){
    return `<b>Fechas cívicas y feriados base 2026:</b>${datesHTML()}<p>La dirección puede agregar actos internos del colegio cuando los defina.</p>`;
  }

  if(q.includes('docente') || q.includes('profesor') || q.includes('maestro') || q.includes('personal') || q.includes('cargo') || q.includes('materia') || q.includes('hora')){
    if(matchedTeachers.length > 0 && matchedTeachers.length < teacherData.length){
      return `<b>Resultados encontrados:</b>${table(['Nombre','Cargo','Materia / curso','Horas','Formulario'], teacherRows(matchedTeachers))}`;
    }
    return `<b>Personal registrado:</b>${table(['Nombre','Cargo','Materia / curso','Horas','Formulario'], teacherRows())}`;
  }

  if(matchedTeachers.length > 0 && matchedTeachers.length < 8){
    return `<b>Encontré coincidencias en personal:</b>${table(['Nombre','Cargo','Materia / curso','Horas','Formulario'], teacherRows(matchedTeachers))}`;
  }
 
  if(q.includes('recurso') || q.includes('material') || q.includes('financiero') || q.includes('presupuesto') || q.includes('computadora') || q.includes('internet')){
    return `<b>Recursos materiales:</b>${list(knowledge.resources)}<b>Presupuesto:</b>${budgetHTML()}`;
  }

  if(q.includes('cronograma') || q.includes('actividad') || q.includes('septiembre') || q.includes('octubre') || q.includes('noviembre')){
    return `<b>Cronograma de actividades:</b>${scheduleHTML()}`;
  }

  if(q.includes('resultado') || q.includes('esperado') || q.includes('beneficio') || q.includes('conclusion')){
    return `<b>Resultados esperados:</b>${list(knowledge.expected)}<p>La sección de conclusiones del documento está pendiente de completar.</p>`;
  }

  if(q.includes('bibliografia') || q.includes('fuente') || q.includes('apa')){
    return `<b>Bibliografía incluida en el documento:</b>${list([
      'Jurafsky & Martin: Speech and Language Processing.',
      'Russell & Norvig: Inteligencia Artificial: un enfoque moderno.',
      'Google Cloud: documentación de Dialogflow.',
      'Real Python: guía para crear chatbots en Python.',
      'Artículos sobre chatbots en educación y tecnología educativa.'
    ])}`;
  }

  if(q.includes('anexo') || q.includes('captura') || q.includes('diagrama')){
    return `<b>Anexos propuestos:</b>${list(['Fuentes de verificación del proyecto.','Capturas de pantalla del chatbot.','Diagramas de flujo o esquemas.','Bibliografía completa en formato APA.'])}`;
  }

  return `No encontré una respuesta exacta para esa pregunta. Prueba con: <b>docentes</b>, <b>horas</b>, <b>matrícula</b>, <b>mensualidad</b>, <b>fechas cívicas</b>, <b>objetivo</b>, <b>cronograma</b> o <b>autores</b>.`;
}

function sendQuestion(question){
  const clean = question.trim();
  if(!clean) return;
  addMessage(escapeHTML(clean), 'user');
  input.value = '';
  const typing = addTyping();
  setTimeout(() => {
    typing.remove();
    addMessage(reply(clean), 'bot');
  }, 420);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  sendQuestion(input.value);
});

document.querySelectorAll('[data-question]').forEach(btn => {
  btn.addEventListener('click', () => sendQuestion(btn.dataset.question));
});

function renderTeacherTable(data){
  teacherTable.innerHTML = data.map(t => `
    <tr>
      <td>${t.name}</td>
      <td>${t.role}</td>
      <td>${t.subject}</td>
      <td>${t.hours}</td>
      <td>${t.form}</td>
    </tr>
  `).join('');
  teacherCount.textContent = `${data.length} registros`;
}

teacherSearch.addEventListener('input', () => {
  const q = teacherSearch.value;
  if(!q.trim()) return renderTeacherTable(teacherData);
  renderTeacherTable(findTeachers(q));
});

function renderDates(){
  datesList.innerHTML = civicDates.map(d => `
    <div class="date-item">
      <b>${d.date} · ${d.title}</b>
      <span>${d.note}</span>
    </div>
  `).join('');
}

function renderSchedule(){
  scheduleList.innerHTML = schedule.map(s => `
    <div class="schedule-card">
      <b>${s.month}</b>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold:.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

renderTeacherTable(teacherData);
renderDates();
renderSchedule();
addMessage(reply('menu'), 'bot');

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
