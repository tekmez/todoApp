// import createDuty from "./createDuty";
import { getTodo, newTodo, deleteTodo, editTodo} from "./api";
// const addBtn = document.getElementById('btnAdd');
// addBtn.addEventListener('click', addDuty);
document.addEventListener('click', btn)
function btn(e){
    e.preventDefault();
    let regex = /(?!^$)([^\s]){3,}/g;
    if(e.target.id === 'btnAdd'){
        let vale = document.getElementById('inputAdd');
        if(regex.test(vale.value)){
            newTodo();
        }
    }
    else if(e.target.id === 'delete')
        deleteTodo(e.target.parentElement.dataset.id);
    else if(e.target.id === 'edit'){
        editTodo(e.target.parentElement.dataset.id);
    }
};
window.onload= getTodo();

    
