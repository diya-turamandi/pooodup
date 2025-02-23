// function
function greetUser(name) {
  alert(`Hey hi,${name} welcome to pooodup`);
}

let userName = prompt("Enter your name:");
greetUser(userName);



const cursor = document.getElementById("customCursor");

// Move cursor with mouse
document.addEventListener("mousemove", (e) => {
  let cursorSize = 50; // Adjust this based on your image size
    let offset = cursorSize / 2;
    cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;

});

// Blinking effect every 3 seconds
// Detect when hovering over buttons or links
document.querySelectorAll("button, a").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    console.log("Hover detected on button or link!");
      cursor.classList.add("blink"); // Add blink when hovering
  });

  element.addEventListener("mouseleave", () => {
    console.log("Mouse left button or link!");
      cursor.classList.remove("blink"); // Remove blink when leaving
  });
});