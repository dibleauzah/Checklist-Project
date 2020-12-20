const orderedList = document.querySelector("ol");

document.getElementById("button-add").addEventListener("click", function (e) {
  e.preventDefault();
  const li = document.createElement("li");
  //   li.addEventListener("click", strikethrough);
  const inputBar = document.querySelector(".input-item");

  if (inputBar.value === "") {
    return;
  }

  let inputText = inputBar.value;
  li.innerText = inputText;

  orderedList.appendChild(li);

  inputBar.value = "";
});

function strikethrough(e) {
  e.preventDefault();

  if (li.style.textDecoration == "line-through") {
    li.style.textDecoration = "none";
  } else {
    li.style.textDecoration = "line-through";
  }
}
