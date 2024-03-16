const addTask=document.querySelector("form");
const taskList=document.querySelector(".tasklist");
const searchcontent=document.querySelector(".search")


const handle = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
    if(e.target[0].value.trim().length !=0){
        const newTask =`<li><span>${e.target[0].value} </span><button>delete</button></li> `;
        taskList.innerHTML +=newTask;
    }
    addTask.reset();
    
}
addTask.addEventListener("submit",handle);


const handleDelete=(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.style.textDecoration='line-through';
    }
    else if(e.target.tagName==="BUTTON"){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
}
taskList.addEventListener("click",handleDelete);

const handleSearch=(e)=>{
    const tasks=document.querySelectorAll("LI");
    tasks.forEach((task)=>{
        console.log(task.firstChild.textContent);
        if(!task.firstChild.textContent.includes(e.target.value)){
            console.log(task);
            task.classList.add("hide");
        }
        else{
            task.classList.remove('hide');
        }
    })
}

searchcontent.addEventListener("keyup",handleSearch);

