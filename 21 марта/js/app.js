const checkInput = () => {
    const input = document.querySelector('#taskInput').value;
    const button = document.querySelector('#taskButton');
    if ( input !== "" ) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addTask = () => {
    const task = document.querySelector('#taskInput').value;
    let li = document.createElement('li');
    li.textContent = task;
    document.querySelector('#taskList').appendChild(li);
    document.querySelector('#taskInput').value = '';
    document.querySelector('#taskButton').disabled = true;
}