const url = 'https://61c37c2b9cfb8f0017a3ebbc.mockapi.io/todos';
const addİnput = document.getElementById('inputAdd');
const group = document.querySelector('.grp');
const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
        <p class="duty">${post.content}</p>
        <div class="input-group-append">
          <button class="i btn btn-primary" data-id=${post.id}><i class="far fa-trash-alt" id="delete"></i></button>
          <button class="i btn btn-primary"><i class="far fa-edit" id="edit"></i></button>
        </div>`
    });
    group.innerHTML = output;
};
let output= '';
// let id = e.target.parentElement.dataset.id
// GET All todos
async function getTodo(){
    const response = await fetch(url, {
        method: 'GET',
        mode: "cors"});
    const getData = await response.json();
    renderPosts(getData);
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
    const dataArr = [];
    dataArr.push(addData);
    renderPosts(dataArr);
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
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const deleteData = await response.json();
    console.log(deleteData);
};
export {getTodo, newTodo, editTodo, deleteTodo};