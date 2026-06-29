const teacherData = [
  {name:'Juan Vicente Laura Siñani', role:'Director', subject:'Dirección', hours:'76', form:'Maestro Pitágoras II'},
  {name:'Edson Iriarte Álvarez', role:'Docente', subject:'Art. Plásticas', hours:'96', form:'Maestro Pitágoras II'},
  {name:'Edmundo Gutierrez Lopez', role:'Docente', subject:'Cs. Sociales', hours:'96', form:'Maestro Pitágoras II'},
  {name:'Eliseo Zapata Guillen', role:'Docente', subject:'Cs. Sociales', hours:'112', form:'Maestro Pitágoras II'},
  {name:'Marvin Amaya Vidal', role:'Docente', subject:'Cs. Sociales', hours:'104', form:'Maestro Pitágoras II'},
  {name:'Micaela del Carmen Lucana Vinaya', role:'Docente', subject:'Lenguaje / Lengua extranjera', hours:'104', form:'Maestro Pitágoras II'},
  {name:'Yohanna Raquel Cachi Laura', role:'Docente', subject:'Técnica Tecnológica general', hours:'96', form:'Maestro Pitágoras II'},
  {name:'Elias Puma Grimaldes', role:'Docente', subject:'Técnica Tecnológica especializada', hours:'128', form:'Maestro Pitágoras II'},
  {name:'Pablo Becerra Vidal', role:'Docente', subject:'Técnica Tecnológica especializada', hours:'96', form:'Maestro Pitágoras II'},
  {name:'Belen Rocio Carballo Orellana', role:'Docente', subject:'Técnica Tecnológica especializada', hours:'32', form:'Maestro Pitágoras II'},
  {name:'Ignacia Vega Sanchez', role:'Docente', subject:'Técnica Tecnológica especializada', hours:'32', form:'Maestro Pitágoras II'},
  {name:'Evelyn Coimbra Rojas', role:'Docente', subject:'Técnica Tecnológica especializada', hours:'96', form:'Maestro Pitágoras II'},
  {name:'Gustavo A. Jiménez Eguez', role:'Docente', subject:'Inglés', hours:'96', form:'Maestro Pitágoras II'},
  {name:'Carla M. Jiménez Apaza', role:'Secretaria', subject:'Administración', hours:'T/C', form:'Maestro Pitágoras II'},
  {name:'Mary Ybeth Miranda Toledo', role:'Portera', subject:'Apoyo administrativo', hours:'T/C', form:'Maestro Pitágoras II'},
  {name:'Alvaro Higuera Lopez', role:'Docente', subject:'Bio-geografía', hours:'112', form:'Maestro Pitágoras'},
  {name:'Rita Escobar Zabala', role:'Docente', subject:'Lenguaje / Religión', hours:'104', form:'Maestro Pitágoras'},
  {name:'Tatiana Cuellar Figueroa', role:'Docente', subject:'Matemática', hours:'108', form:'Maestro Pitágoras'},
  {name:'Victor Hugo Benito Equise', role:'Docente', subject:'Física / Química', hours:'112', form:'Maestro Pitágoras'},
  {name:'Abel Cerezo Loayza', role:'Docente', subject:'Religión / Educación Física', hours:'104', form:'Maestro Pitágoras'},
  {name:'Araluz Yarifa Morales Vargas', role:'Docente', subject:'Matemática / Religión', hours:'108', form:'Maestro Pitágoras'},
  {name:'Maribel Choque García', role:'Docente', subject:'Matemática / Sociales', hours:'112', form:'Maestro Pitágoras'},
  {name:'Anibal Rojas Ribera', role:'Docente', subject:'Música / Educación Física', hours:'104', form:'Maestro Pitágoras'},
  {name:'Deisy Lilia Caballero Arandia', role:'Docente', subject:'Música / Inglés', hours:'104', form:'Maestro Pitágoras'},
  {name:'Marisa Guzmán Soria', role:'Docente', subject:'Matemática / Artes', hours:'112', form:'Maestro Pitágoras'},
  {name:'Lenny Celinda Villagomez Peña', role:'Docente', subject:'Biogeografía', hours:'104', form:'Maestro Pitágoras'},
  {name:'Rodolfo Cabrera Salazar', role:'Docente', subject:'Valores / Psicología', hours:'108', form:'Maestro Pitágoras'},
  {name:'Elena Arancibia Hurtado', role:'Docente', subject:'Psicología / Filosofía / Religión', hours:'104', form:'Maestro Pitágoras'},
  {name:'Gustavo Eduardo Coronel Pardo', role:'Docente', subject:'Física-Química / Artes Plásticas', hours:'104', form:'Maestro Pitágoras'},
  {name:'Josué Rivero Encinas', role:'Docente', subject:'Cs. Sociales / Inglés', hours:'104', form:'Maestro Pitágoras'},
  {name:'Sonia Carmen Tinta Tinta', role:'Docente', subject:'Cs. Sociales / Biología', hours:'104', form:'Maestro Pitágoras'},
  {name:'Goldy Columba Terrazas', role:'Docente', subject:'Técnica / Arte', hours:'104', form:'Maestro Pitágoras'},
  {name:'Vesaida Adriana García Banegas', role:'Docente', subject:'Lenguaje', hours:'108', form:'Maestro Pitágoras'}
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
  guide:'Prof. Adriana Vesaida García',
  fee:'Bs 15 mensuales durante 10 meses. Total: Bs 150 por estudiante.',
  contact:'El número telefónico no está llenado en los documentos cargados. Para pagos o consultas, contactar con secretaría o dirección de la unidad educativa.',
  objectiveGeneral:'Implementar el desarrollo completo de un chatbot académico para el colegio, mediante programación en plataformas digitales y diseño de respuestas automatizadas, para brindar información rápida sobre tareas, horarios y consultas básicas a estudiantes, docentes y padres de familia.',
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
    {form:'Maestro Pitágoras II', first:126, second:127, third:132, fourth:121, fifth:109, sixth:88, courses:18, total:703},
    {form:'Maestro Pitágoras', first:118, second:127, third:132, fourth:121, fifth:107, sixth:89, courses:18, total:704}
  ]
};

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
    return tokens.some(token => hay.includes(token));
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
