let obj = document.getElementById("img1");
var arr = [];
arr.push("images/bts-logo.png");
arr.push("images/AZ-logo.jpg");
arr.push("images/Big_Bang_logo.png");
arr.push("images/exo_logo.png");
arr.push("images/SKZ-logo.png");

obj.addEventListener("click", () => {
  var i = Math.floor(Math.random() * 5);
  obj.src = arr[i];
});
