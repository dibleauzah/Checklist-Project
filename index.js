// Ordered list selector
const orderedList = document.querySelector("ol");

// This event listener listens for a click event on the "Add task" button
document.getElementById("button-add").addEventListener("click", function (e) {
  e.preventDefault();

  // Creates a list item & stores the user input bar selector in a variable
  const li = document.createElement("li");
  const inputBar = document.querySelector(".input-item");

  // If the user did not input anything, return
  if (inputBar.value === "") {
    return;
  }

  // Item gets user input and is placed next on the list
  let inputText = inputBar.value;
  li.innerText = inputText;

  orderedList.appendChild(li);

  inputBar.value = "";
});


// This event listens for the user to click on an item in the list
document.getElementById('item-list').addEventListener('click', e => {
  if (e.target && e.target.matches('li')) {
    let li = e.target;

    // Strikesthrough based on if it has a strikethrough or not
    if (li.style.textDecoration == "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "rgb(0, 0, 0)";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "rgb(90, 90, 90)";
    }
  }
})

// Clear button removes all items from the list
document.querySelector('#button-clear').addEventListener('click', e => {
  while (orderedList.lastElementChild) {
    orderedList.removeChild(orderedList.lastElementChild);
  }
})