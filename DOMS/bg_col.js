var x = document.getElementById("id1");
var color = ["purple", "red", "blue", "green", "yellow"];
x.addEventListener("click", () => {
  var i = Math.floor(Math.random() * 5);
  document.body.style.backgroundColor = color[i];
});
