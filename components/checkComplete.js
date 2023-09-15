
//Crea icono check
const iconoCheck = () => {
  const icono = document.createElement('i');
  icono.classList.add('far', 'fa-check-square', 'icon');
  icono.addEventListener('click', tareaCompletada);
  return icono;
};


//Funcion tarea completada
const tareaCompletada = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');

  //Cambia estilo al texto 
  const parentElement = element.parentNode;
  parentElement.classList.toggle('checked');
};

//Exporta modulo
export default iconoCheck;
