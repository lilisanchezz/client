document.addEventListener('DOMContentLoaded', function () {
const taskAdd = document.querySelector("#task-add");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const filterInput = document.getElementById("filter-input");
const taskTemplate = document.getElementById("task-template");
let contador=0;


taskAdd.addEventListener('click', AddTask);
function AddTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, introduce una tarea.");
    return;
  
  }
  contador++;

  // Clonar el contenido del template
 
  const taskItem = taskTemplate.content.cloneNode(true);
  const taskTextSpan = taskItem.querySelector(".task-name");
  const deleteButton = taskItem.querySelector(".delete-button");
  const completeCheckbox = taskItem.querySelector(".complete-checkbox");
  const acceso = taskItem.querySelector("li");
  acceso.setAttribute("id", contador);

    // Agregar eventos a los elementos clonados
  deleteButton.addEventListener('click', () => DeleteTask(acceso));
  deleteButton.addEventListener('click', DeleteTask);
  function DeleteTask(taskItem) {
    taskList.removeChild(taskItem);
  }
  taskTextSpan.textContent = taskText;
  console.log(taskText);

  // Agregar eventos a los elementos clonados
  deleteButton.addEventListener('click', () => DeleteTask(taskItem));
  completeCheckbox.addEventListener('change', () => MarkAsComplete(taskItem, taskTextSpan,acceso));

  // Agregar el elemento clonado al DOM
  taskList.appendChild(taskItem);

  taskInput.value = "";
}




function MarkAsComplete(taskItem, taskTextSpan,acceso) {
  console.dir(taskItem)
  console.dir(taskTextSpan)
  const checkbox = acceso.querySelector('input[type="checkbox"]');
  console.log(checkbox)
  console.dir(acceso)
  if (checkbox.checked) {
    acceso.classList.add('completed');
    taskTextSpan.style.color = 'green';
    taskTextSpan.style.textDecoration = 'line-through';
  } else {
    acceso.classList.remove('completed');
    taskTextSpan.style.color = 'black';
    taskTextSpan.style.textDecoration = 'none';
  }
}

// Actualizar el filtro en tiempo real mientras se escribe en el campo de filtro
filterInput.addEventListener('input', function () {
  const filterText = filterInput.value.toLowerCase();
  const tasks = taskList.getElementsByTagName('li');

  for (const task of tasks) {
    const taskText = task.textContent.toLowerCase();
    task.style.display = taskText.includes(filterText) ? 'block' : 'none';
  }
});
});
