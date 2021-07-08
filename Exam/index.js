let color = ["red", "blue", "yellow", "green", "pink", "black"];
let i = 1;
let names = [];
const btn = document.getElementById("btn");
const clrbtn = document.getElementById("clrbtn");

btn.addEventListener("click", () => {
  let name = document.getElementById("id1").value;
  var div = document.createElement("div");
  div.id = i++;
  names.push(name);

  div.className = "grid-item";
  var textnode = document.createTextNode(name);
  //   console.log(textnode);
  div.appendChild(textnode);
  var x = Math.floor(Math.random() * color.length);
  div.style.backgroundColor = color[x];
  document.getElementById("gc").appendChild(div);
  //   console.log(div);
  //   document.getElementById("output").innerHTML = name;
  document.getElementById("id1").value = "";
  console.log(names);
  //   console.log(name);
});

clrbtn.addEventListener("click", () => {
  names = [];
  location.reload();
});
