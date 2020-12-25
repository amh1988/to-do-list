callEvents();

function callEvents(){
  document.querySelector('.add').addEventListener('click',clickAdd);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteCross);
}
// add task function
function clickAdd(e){
  e.preventDefault();
  let input = document.querySelector('#input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task){
  let ul = document.querySelector("#list");
  let li = document.createElement('li');
  li.setAttribute("class", "listItem")
  li.innerHTML = `<input type="checkbox"><label>${task}</label><i class="far fa-trash-alt"></i>`;
  ul.appendChild(li);
}

function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}

function deleteCross(e){
  if(e.target.className == 'far fa-trash-alt')
    deleteTask(e);
  else {
    crossTask(e);
  }
}

// delete task
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// cross a task
function crossTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#03af98";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}