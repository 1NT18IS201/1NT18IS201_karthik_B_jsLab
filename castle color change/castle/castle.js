const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
var arr = [];
var len = 0;
let flag = false;
// let flag2 = false;
b1.addEventListener("mouseenter", () => {
  console.log("Entered Area 1");
  arr.push("Entered Area 1");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b2.addEventListener("mouseenter", () => {
  console.log("Entered Area 2");
  arr.push("Entered Area 2");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b3.addEventListener("mouseenter", () => {
  console.log("Entered Area 3");
  arr.push("Entered Area 3");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b1.addEventListener("mouseleave", () => {
  console.log("Escaping Area 1");
  arr.push("Escaping Area 1");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b2.addEventListener("mouseleave", () => {
  console.log("Escaping Area 2");
  arr.push("Escaping Area 2");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b3.addEventListener("mouseleave", () => {
  console.log("Escaping Area 3");
  arr.push("Escaping Area 3");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b4.addEventListener("mouseenter", () => {
  console.log("Entered Final area, leave without clicking and die");
  arr.push("Entered Final area, leave without clicking and die");
  len = arr.length;
  document.getElementById("output").innerHTML = arr[len - 1];
});

b4.addEventListener("click", () => {
  flag = true;
  b4.style.visibility = "hidden";
});

b4.addEventListener("mouseleave", () => {
  if (!flag) {
    console.log("dead");
    arr.push("Dead");
    len = arr.length;
    document.getElementById("output").innerHTML = arr[len - 1];
  } else {
    console.log("alive");
    arr.push("Alive");
    len = arr.length;
    document.getElementById("output").innerHTML = arr[len - 1];
    flag = false;
  }
});

// document.getElementById("output").innerHTML = "abc";

b1.addEventListener("click", () => {
  divcol("green", b1);
  // console.log(event.offsetX);
  // console.log(event.offsetY);
});

b2.addEventListener("click", () => {
  divcol("yellow", b2);
});

b3.addEventListener("click", () => {
  divcol("blue", b3);
});

function divcol(color, x) {
  x.style.backgroundColor = color;
}
