(()=>{"use strict";document.getElementById("btnAdd").addEventListener("click",(function(t){t.preventDefault(),(()=>{const t=document.createElement("div"),e=document.createElement("p"),n=document.createElement("div"),a=document.createElement("button"),d=document.createElement("button");t.classList.add("input-group","mb3"),e.classList.add("duty"),n.classList.add("input-group-append"),a.classList.add("i","btn","btn-primary"),d.classList.add("i","btn","btn-primary"),document.body.appendChild(t),t.appendChild(e),t.appendChild(n),n.appendChild(a),n.appendChild(d),a.innerHTML='<i class="far fa-trash-alt"></i>',d.innerHTML='<i class="fas fa-edit"></i>'})()})),async function(){const t=await fetch("https://61c37c2b9cfb8f0017a3ebbc.mockapi.io/todos/",{mode:"cors"}),e=await t.json();console.log(e)}()})();