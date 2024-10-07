// Selecting elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to display the list of tasks on the webpage
function displayTasks() {
    taskList.innerHTML = ''; // Clear the list before rendering

    // Get the current tasks from the todoList module
    const tasks = todoList.getTasks();
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.setAttribute('data-index', index); // Store the index of the task
        taskList.appendChild(li);
    });
}

// Event listener to add a new task
addButton.addEventListener('click', () => {
    const task = taskInput.value.trim(); // Get the task input and remove extra spaces
    if (task) {
        todoList.addTask(task); // Add the task to the todoList module
        displayTasks(); // Update the UI to show the new task
        taskInput.value = ''; // Clear the input field after adding the task
    }
});

// Event listener to remove a task when clicked
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = e.target.getAttribute('data-index'); // Get the index of the clicked task
        todoList.removeTask(index); // Remove the task from the todoList module
        displayTasks(); // Update the UI to reflect the removed task
    }
});

// Initial display of tasks when the page loads
displayTasks();
