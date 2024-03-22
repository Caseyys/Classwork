const checkInput = () => {
    const event = document.querySelector('#event').value;
    const date = document.querySelector('#date').value;
    const description = document.querySelector('#description').value;
    const place = document.querySelector('#place').value;
    const foto = document.querySelector('#foto').value;
    
    const button = document.querySelector('#taskButton');
    if ( event !== "" && date !== "" && description !== ""&& place !== "" &&foto !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

}
const addTask = () => {
    const event = document.querySelector('#event').value;
    const date = document.querySelector('#date').value;
    const description = document.querySelector('#description').value;
    const place = document.querySelector('#place').value;
    const foto = document.querySelector('#foto').value;

    let li = document.createElement('li');
    li.textContent =  `Название: ${event};
    Дата: ${date}; 
    Описание: ${description}; 
    Место: ${place};
    Адрес фото: ${foto}.`;
    
    document.querySelector('#task-List').appendChild(li);

    document.querySelector('#event').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#description').value = "";
    document.querySelector('#place').value = "";
    document.querySelector('#foto').value = "";

    document.querySelector('#taskButton').disabled = true;
}