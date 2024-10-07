const todoList = (() => {
    // Private tasks array, initialized with tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Private function to save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return {
        // Public method to add a new task
        addTask(task) {
            tasks.push(task);
            saveTasks();
        },

        // Public method to remove a task by its index
        removeTask(taskIndex) {
            tasks.splice(taskIndex, 1);
            saveTasks();
        },

        // Public method to get the current list of tasks
        getTasks() {
            return tasks;
        }
    };
})();
