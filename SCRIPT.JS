let taskinput = document.getElementById("taskinput");
let addtaskbtn = document.getElementById("addtaskbtn");
let tasklist = document.getElementById("tasklist");
let clstask = document.getElementById("clear-task");
    addtaskbtn.addEventListener("click",()=>{
    let addedtask = taskinput.value.trim();
    if(addedtask !== ""){
        let taskList = document.createElement("li");
        taskList.textContent = addedtask;
        // taskList.setAttribute("id","");
       taskList.addEventListener("click",()=>{
        taskList.remove();
    })
        tasklist.append(taskList);
        taskinput.value = "";
    }

    });
    clstask.addEventListener("click", () => {
    tasklist.innerHTML = "";
  });

taskinput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") addtaskbtn.click();
});