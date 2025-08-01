
const allboxes = document.querySelectorAll(".box");
const alltasks = document.querySelectorAll(".task");
 

alltasks.forEach(task => {
  task.addEventListener("dragstart", () => {
    
    task.classList.add('is-draging');
  });
  task.addEventListener("dragend", () => {
   
    task.classList.remove('is-draging');

  });
});
allboxes.forEach( box=> {
box.addEventListener ("dragover", (e) => {
    e.preventDefault ();
    let curtask = document.querySelector(".is-draging");
    box.appendChild(curtask);
})
});
// adding task
const form = document.querySelector("#add-form");
const input = document.querySelector("#todo-input");
const todobox = document.querySelector("#to-do");

form.addEventListener('submit', e => {
  e.preventDefault();
  const newtasktext = input.value;
if (!newtasktext) return;
  const newtask = document.createElement('p');
  newtask.classList.add ('task')
  newtask.setAttribute ('draggable','true')
  newtask.innerHTML = newtasktext;
   newtask.addEventListener("dragstart", () => {
    
    newtask.classList.add('is-draging');
  });
  newtask.addEventListener("dragend", () => {
   
    newtask.classList.remove('is-draging');

  })
  todobox.appendChild(newtask);
  input.value = ""
})
// darging for mobile
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  new Sortable(box, {
    group: 'shared',
    animation: 150,
    ghostClass: 'is-draging',
    draggable: '.task'  // 🟢 ده أهم سطر: حدد العناصر القابلة للسحب
  });
});