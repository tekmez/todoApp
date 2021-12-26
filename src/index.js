// import createDuty from "./createDuty";
import { getTodo, newTodo, editTodo, deleteTodo} from "./api";
// const addBtn = document.getElementById('btnAdd');
// addBtn.addEventListener('click', addDuty);
document.addEventListener('click', btn)
function btn(e){
    e.preventDefault();
    if(e.target.id === 'btnAdd')
        newTodo();
    else if(e.target.id === 'delete')
        deleteTodo();
};
window.onload= getTodo();
    //newToto();
    // editTodo();
    
