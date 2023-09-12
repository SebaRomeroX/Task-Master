import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');
 const input = document.querySelector('[data-form-input]');

const createTask = (evento) => {
  evento.preventDefault();
 
  const value = input.value;
  const list = document.querySelector('[data-list]');

  const task = document.createElement('li');
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');


  if(value.length>0){
    task.classList.add('card');
    input.value = '';


    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);


    // task.innerHTML = content;

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  }
  else{
    input.classList.toggle('error')
    setTimeout(volverEstilo,1000)
  }
};
function volverEstilo() {
  input.classList.toggle('error')
}


btn.addEventListener('click', createTask);
