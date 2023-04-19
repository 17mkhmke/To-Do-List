const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function() {
  const newTask = document.createElement('li');
  newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
  newTask.innerHTML = `
    <span>${newTaskInput.value}</span>
    <button class="btn btn-danger delete-button">Delete</button>
  `;
  taskList.appendChild(newTask);
  newTaskInput.value = '';

  const deleteButton = newTask.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    newTask.remove();
  });
});
