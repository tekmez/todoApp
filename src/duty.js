const createDuty = () => {
    // Create elements
    const firstDiv = document.createElement('div');
    const text = document.createElement('p');
    const secondDiv = document.createElement('div');
    const firstBtn = document.createElement('button');
    const secondBtn = document.createElement('button');
    // Add Class
    firstDiv.classList.add('input-group', 'mb3');
    text.classList.add('duty');
    secondDiv.classList.add('input-group-append');
    firstBtn.classList.add('i', 'btn', 'btn-primary');
    secondBtn.classList.add('i', 'btn', 'btn-primary');
    // Append Child
    document.body.appendChild(firstDiv);
    firstDiv.appendChild(text);
    firstDiv.appendChild(secondDiv);
    secondDiv.appendChild(firstBtn);
    secondDiv.appendChild(secondBtn);
    // Add icons
    firstBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    secondBtn.innerHTML = '<i class="fas fa-edit"></i>';
};
export default createDuty;