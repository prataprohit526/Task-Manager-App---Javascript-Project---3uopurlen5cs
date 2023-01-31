
const addTask = document.querySelectorAll(".add-task");
const all_status = document.querySelectorAll(".open-box");
let dragMe = null;

addTask.forEach((ele) => {
  ele.addEventListener("dragstart", dragStart);
  ele.addEventListener("dragend", dragEnd);
});

function dragStart() {
    dragMe = this;
  setTimeout(() => {
    this.style.display = "none";
  },0);
}

function dragEnd() {
    dragMe = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "2px solid #fff";
}

function dragLeave() {
  this.style.border = "none";
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(dragMe);
}
/* -----------Add new Task--------------------*/

function createTask(){
  let check=document.getElementById("inpuText").value;
  if(check!=""){
  /* -----New Div----- */
  let div=document.createElement("div");
  let addPreviousInput=document.getElementById("inpuText").value;
  let text=document.createTextNode(addPreviousInput);

  div.classList.add("add-task");
  div.setAttribute("draggable","true");
  div.setAttribute("id", "drag-item-list");
  /*------New Hr Line------ */
  let hr=document.createElement("hr");
  hr.setAttribute("id","hr-line");
  div.appendChild(hr);
  /*----------New P Tag------------- */
  let p=document.createElement("p");
    p.setAttribute("id","drag-item");
   p.appendChild(text);
   div.appendChild(p);
   /*----------Add Circle Icon-------------- */
   let icon=document.getElementById("font-awesome");
    icon = icon.cloneNode(true);
   div.appendChild(icon);
   no_status.appendChild(div);
  div.addEventListener("dragstart", dragStart);
  div.addEventListener("dragend", dragEnd);
  }
}
