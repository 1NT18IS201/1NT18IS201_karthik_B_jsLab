var x = document.getElementById("id2");
var color = ["purple", "red", "blue", "green", "yellow"];
x.addEventListener("click", () => {
  var i = Math.floor(Math.random() * 5);
  x.style.backgroundColor = color[i];
});
