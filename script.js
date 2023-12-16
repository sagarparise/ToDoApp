const searchBar = document.querySelector(".search-bar");
const button = document.querySelector(".btn");
const listContainer = document.getElementById("list-container");
const number = document.querySelector(".right-number");
const noTextBlock = document.querySelector(".no-item-text");
let digit = parseInt(localStorage.getItem("number")) ?? 0;


button.addEventListener("click", ()=>{
  if(searchBar.value !=='')
  {
  
   let li = document.createElement("li");
   li.innerHTML = searchBar.value;
   listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00d7"
   li.appendChild(span);  
   textVisible();
   digit++;
   updateNumber(digit);
   
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
    digit--;
    updateNumber(digit);
  }
}, false);

function textVisible(){
  let listItems = listContainer.getElementsByTagName("li");
  let length = listItems.length;
  if(length)
  {
    noTextBlock.style.display = "none";
  }
  else{
    noTextBlock.style.display = "block";
  }
}

function updateNumber(digit) {
  if(digit>=0)
  {
    number.innerHTML = digit;
  }
  
}

//save the data into the local storage 

function saveData(){
localStorage.setItem("data", listContainer.innerHTML);
localStorage.setItem("number",  number.innerHTML)
  
}


function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  let listItems = listContainer.getElementsByTagName("li");
  digit = listItems.length;
  updateNumber(digit);
  textVisible();
 
}

showTask();

