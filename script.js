document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const categoryInput = document.getElementById('category-input');
    const dueDateInput = document.getElementById('due-date-input');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.textContent = `${taskInput.value} [${categoryInput.value}] - Due: ${dueDateInput.value}`;
    
    const priority = prioritySelect.value;
    taskText.classList.add(`priority-${priority}`);
    taskItem.appendChild(taskText);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    document.getElementById('task-list').appendChild(taskItem);

    // Clear inputs after adding task
    taskInput.value = '';
    categoryInput.value = '';
    dueDateInput.value = '';
}

