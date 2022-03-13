const a = document.getElementById('addTaskBtn')
const addTask = document.getElementById('addTask')



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

function submit() {
    var name = "Nguyễn Thành Nhân";
    var year = 1993;
    var str = "Tôi tên " + name + " sinh năm " + year;
    document.getElementById("tasks").innerHTML = var;
    
}



