let join = document.querySelector("#idname");
join.onclick=()=>{
    let inputname=prompt("enter your name here");
if(inputname){
    inputname = inputname.toUpperCase();    
    let username=document.createElement("p");
    username.innerText=`Namaste  ${inputname} ,welcome to our website`;
    username.style.color="blueviolet";
    username.style.textAlign="right";
    let userwelcome= document.getElementById("userwelcome");
    userwelcome.append(username);
    }}
    // Get modal elements
const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

// You can trigger this from a button or link

const loginTrigger = document.querySelector(".oval-button"); // assuming this link opens the modal

loginTrigger.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

// Close when ❌ is clicked
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Optional: close when clicking outside modal
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
