// Gets the task from input
function get_todos() {
    // Creates an array of tasks that are inputed 
    var todos = new Array;
    // Pulls task that was saved in web browser memory
    var todos_str = localStorage.getItem('todo');
    // If input is not null then JSON.parse will communicate with web browser to make the task a JS Object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// This function adds the inputed task to the get_todos function array
function add() {
    // Takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // Adds new task at the end of the array
    todos.push(task);
    // Converts task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value="";
    show();
    
    return false;
}

// This function keeps the tasks permanently displayed on screen 
function show() {
    // Sets the task that was retrieved as a variable 
    var todos = get_todos();

    // Sets up each task as unordered list
    var html = '<ul>';
    // This displays a task to the list in order that it was inputted 
    for (var i = 0; i < todos.length; i++) {
        // This also displays the task as a list and creates the button with the 'x' 
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    // this displays the task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

// This displays the inputted task when the Add Item button is clicked
document.getElementById('add').addEventListener('click', add);
// This will keep the inputs displayed permanently on the screen
show();

// Creates functionality of removing a todo item from the array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // This looks in the show() how to display a removed item on the screen
    show();

    return false;
}

