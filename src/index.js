document.addEventListener("DOMContentLoaded", () => {
  
    let des = document.getElementById("new-task-description").value
    
  document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    let list = document.createElement("li")
    let tasks = document.getElementById("tasks")
    let des = document.getElementById("new-task-description").value    
    list.innerText = des    
    tasks.append(list)     
  })  
});
