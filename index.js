const orderedList = document.querySelector("ol");

document.getElementById("button-add").addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  const inputBar = document.querySelector(".input-item");

  if (inputBar.value === "") {
    return;
  }

  let inputText = inputBar.value;
  li.innerText = inputText;

  orderedList.appendChild(li);

  inputBar.value = "";
});

document.getElementById('item-list').addEventListener('click', e => {
  if (e.target && e.target.matches('li')) {
    let li = e.target;

    if (li.style.textDecoration == "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "rgb(0, 0, 0)";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "rgb(90, 90, 90)";
    }
  }
})

// Clear button


document.querySelector('#button-clear').addEventListener('click', e => {
  while (orderedList.lastElementChild) {
    orderedList.removeChild(orderedList.lastElementChild);
  }
})