const todoList = [];

renderTodoList();

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name === '') {
    alert('Please enter a todo.');
    return;
  }

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}


function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-button">
        Delete
      </button>
    `;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);

        renderTodoList();
      });
    });
}