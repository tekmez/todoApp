import createDuty from "./createDuty";
import { getTodo, newTodo, editTodo, deleteTodo} from "./api";
const addBtn = document.getElementById('btnAdd');
addBtn.addEventListener('click', addDuty);
function addDuty(e){
    e.preventDefault();
    createDuty();
    newTodo()
};

    // getTodo();
    // editTodo();
    // deleteTodo();

// firstDiv.addEventListener('click',checkDeleteOrEdit)
// function checkDeleteOrEdit (event){
//     if(event.target.id === 'remove')
//         removeDuty(event);
//     if(event.target.id === 'edit')
//         editDuty(event);
// };
// const removeDuty = () => {
//     document.body.removeChild(firstDiv);
// }
