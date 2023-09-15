
//Crea icono delete
const iconoDelete = () => {
  const icono = document.createElement('i');
  icono.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  icono.addEventListener('click', borrarTarea);
  return icono;
};

//Funcion borrar tarea
const borrarTarea = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
  const texto = parent.querySelector('div span').textContent;


  //Elimina la tarea, de las tareas guardadas
  let listaTareas = [];
  listaTareas = localStorage.getItem('tareas', listaTareas);
  listaTareas = listaTareas.split(',');

  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i]==texto) {
      listaTareas.splice(i,1);
    }
    localStorage.setItem('tareas', listaTareas);
  }
};

//Exporta modulo
export default iconoDelete;
