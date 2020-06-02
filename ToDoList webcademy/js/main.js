// Находим форму на сранице

const form = document.querySelector('#newTaskForm');
const tasksList = document.querySelector('#tasksList');
// Отслеживание события отправки формы
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Отмена стандартного поведения

    const taskInput = document.querySelector('#addNewTask'); // Находим инпут

    const taskText = taskInput.value; // Берем значение из инпута

    // Формируем разметку для новой задачи
    const taskHTML =
        `<li class="list-group-item d-flex justify-content-between">
        <span class="task-title">${taskText}</span>
        <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
    </li>`;

    //  Вставляем новоую задачу в общий список задач
    tasksList.insertAdjacentHTML('afterbegin', taskHTML);
    
    // Очищаем поле ввожа
    taskInput.value = "";

});