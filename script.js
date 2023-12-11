const searchBar = document.querySelector(".search-bar");
const button = document.querySelector(".btn");
const listContainer = document.getElementById("list-container");


button.addEventListener("click", ()=>{
  if(searchBar.value !=='')
  {
   let li = document.createElement("li");
   li.innerHTML = searchBar.value;
   listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00d7"
   li.appendChild(span);
  }else
  {
    alert("You must write something")

  }
  searchBar.value = '';
  saveData();
});

//note:  In JavaScript, the tagName property of an HTML element returns the tag name of the element in uppercase letters. So, when checking if the clicked element is an <LI> (list item) or a <SPAN> element,

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

//save the data into the local storage 

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();