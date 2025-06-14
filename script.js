// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const addButton = document.getElementById('add-button');   // "Add Task" button
  const taskInput = document.getElementById('task-input');   // Task input field
  const taskList = document.getElementById('task-list');     // Unordered list to display tasks

  // Function to add a new task to the list
  function addTask() {
    // Get and trim the value from the input field
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return; // Stop the function if no text was entered
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button for each task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Set up the event for removing the task when the button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);  // Remove the li element from the list
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
  }

  // Event listener for clicking the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing 'Enter' key inside the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});


