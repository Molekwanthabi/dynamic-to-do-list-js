// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList  = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit function if no task entered
        }

        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // When remove button is clicked, remove the corresponding task
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field for the next task
        taskInput.value = "";
    }

    // Event listener for 'Add Task' button click
    addButton.addEventListener('click', addTask);

    // Event listener for pressing 'Enter' in the task input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask on DOMContentLoaded if desired (though unnecessary here)
    // addTask(); // Commented out because no initial task is added on load by requirement

});
