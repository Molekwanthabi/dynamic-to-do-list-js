document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from local storage
    loadTasks();

    // Function to add a new task
    function addTask(taskText = null, saveToLocalStorage = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event listener to remove button
        removeButton.onclick = function() {
            listItem.remove();
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        // Save to local storage if saveToLocalStorage is true
        if (saveToLocalStorage) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Function to save a task to local storage
    function saveTaskToLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[python]');
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to remove a task from local storage
    function removeTaskFromLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[english]');
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from local storage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[french]');
        tasks.forEach(task => addTask(task, false)); // Add task without saving again
    }

    // Add event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the 'Enter' key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});