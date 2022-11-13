import "./styles.css";

const addHelloWorldButton = document.getElementById("my-button");
var header = document.getElementById("h1");
const addDataButton = document.getElementById("add-data");

addHelloWorldButton.addEventListener("click", function () {
  console.log("hello world");
  header.innerText = "My notebook";
});

addDataButton.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = document.getElementById("message").value;
  document.getElementById("list").appendChild(li);
});
