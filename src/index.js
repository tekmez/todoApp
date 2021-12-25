import createDuty from "./duty";
const addBtn = document.getElementById('btnAdd');
addBtn.addEventListener('click', addDuty);
function addDuty(e){
    e.preventDefault();
    createDuty();
}

async function todo(){
    const response = await fetch('https://61c37c2b9cfb8f0017a3ebbc.mockapi.io/todos/', {mode: "cors"});
    const todoData = await response.json();
    console.log(todoData);
}
todo();

