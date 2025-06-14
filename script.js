// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for new tasks
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to add a new task to the task list
    function addTask() {
        // Get and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Stop the function if no task was entered
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set up the event for removing the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the list item from the task list
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the task input field for the next entry
        taskInput.value = "";
    }

    // Event listener for clicking the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing the "Enter" key inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });

});

function addTask() {
    // Get and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        taskList.removeChild(li);  // Remove the li element from taskList
    };
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
}
