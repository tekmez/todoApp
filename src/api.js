const addİnput = document.getElementById('inputAdd');
const url = 'https://61c37c2b9cfb8f0017a3ebbc.mockapi.io/todos';
// GET All todos
async function getTodo(){
    const response = await fetch(`${url}`, {
        method: 'GET',
        mode: "cors"});
    const getData = await response.json();
    console.log(getData);
};
// POST Todo
async function newTodo(){
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({content: addİnput.value}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const addData = await response.json();
    console.log(addData);
};
// PUT TODO
async function editTodo(){
    const response = await fetch(`${url}/2`, {
        method: 'PUT',
        body: JSON.stringify({content: 'Hello'}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const editData = await response.json();
    console.log(editData);
};
// DELETE TODO
async function deleteTodo(){
    const response = await fetch(`${url}/2`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const deleteData = await response.json();
    console.log(deleteData);
};
export {getTodo, newTodo, editTodo, deleteTodo};