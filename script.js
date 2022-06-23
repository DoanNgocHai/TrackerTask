const a = document.getElementById('addTaskBtn')
const addTask = document.getElementById('addTask')
const tasks = document.getElementById('tasks')



a.addEventListener('click',()=>{
    
    if (addTask.style.display === 'none'){
        addTask.style.display = 'block'   
        addTaskBtn.style.background = 'red'   
        addTaskBtn.innerText = 'Close'

    }
    else  {
        addTask.style.display='none'
        addTaskBtn.innerText = 'Add'
        addTaskBtn.style.background = 'green'
    }
})
let list= [
    {
      text: "Á đù vip",
      day : "55/03/2000 ",
      reminder: true

    },
    {
      text: "Có cái dít",
      day : "16/7/2000 ",
      reminder: false

    },
    {
      text: "đi nhậu",
      day : "20/03/2000 ",
      reminder: true 

    }
 ]
function submit() {
    const text = document.getElementById("text").value;
    const day = document.getElementById("day").value;
    const reminder = document.getElementById("reminder").Checked;
    const newtasks = {
        text: text,
        day: day,
        reminder:reminder
    }
    list.push(newtasks);
    loadTasks();
}


function loadTasks() {
  tasks.innerText=""
  for(let i=0;i<list.length;i++)
  { 
    let task = list[i];
    let reminder = "";
    if(task.reminder){
      reminder = "task reminder"
    } else {
      reminder = "task"
    }
    tasks.innerHTML += `<div ondblclick = toggleReminder(${i}) class='${reminder}'> <h3> ${task.text} <button onclick =deleteTask(${i})> <i class="deleteTask">X</i> </button> </h3> <p>${task.day} </p> </div>`;
    
  } 
  
}
loadTasks();

function deleteTask(id) {
  list.splice(id, 1)
  loadTasks();

}

function toggleReminder(id) {
  list[id].reminder =! list[id].reminder  
  loadTasks();
} 