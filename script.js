// Importa modulos
import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';


// Obtener las tareas guardadas en local storage
let listaTareas = [];

function obtenerTareasGuardadas() {
  listaTareas = localStorage.getItem('tareas', listaTareas) || '';
  listaTareas = listaTareas.split(',');
  listaTareas.forEach(element => {
    if (element!='') {
      cargarTareas(element);
    }
  });
};
window.addEventListener('load',obtenerTareasGuardadas);


//Crea la tarjeta de la tarea
function cargarTareas(element) {
  const value = element;
  const lista = document.querySelector('[data-list]');

  //Crea nuevos elementos
  const tarea = document.createElement('li');
  const contenido = document.createElement('div');
  const texto = document.createElement('span');

  tarea.classList.add('card');
  texto.classList.add('task');

  //Agregar valores y elementos
  texto.innerText = value;
  contenido.appendChild(checkComplete());
  contenido.appendChild(texto);
  tarea.appendChild(contenido);
  tarea.appendChild(deleteIcon());
  lista.appendChild(tarea);
}


// Funcion Crear Nueva Tarea
const input = document.querySelector('[data-form-input]');
const mensaje = document.querySelector('[mensaje-instructivo]');

const crearTarea = (evento) => {
  evento.preventDefault();
 
  const value = input.value;

  //Prevenir la creacion de tarea vacia
  if(value.length>0){

    //Limpia input
    input.value = '';

    //Agrega nueva tarea
    listaTareas.push(value);
    localStorage.setItem('tareas', listaTareas);

    //Carga la nueva tarea
    cargarTareas(value);

    ocultarMensajeInstructivo();
  }

  // Avisa que se debe escribir algo
  else{
    input.classList.toggle('error');
    setTimeout(volverEstilo,1500);
  }
};


//Devuelve estilo input a normalidad
function volverEstilo() {
  input.classList.toggle('error');
}


//Llama funcion crear
const btn = document.querySelector('[data-form-btn]');
btn.addEventListener('click', crearTarea);


//Oculta mensaje instructivo
setTimeout(ocultarMensajeInstructivo,30000)

function ocultarMensajeInstructivo() {
  mensaje.style.display='none';
};



