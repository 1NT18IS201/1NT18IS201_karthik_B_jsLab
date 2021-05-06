var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
console.log(a);
console.log(b);
a = parseInt(a);
b = parseInt(b);
console.log(a + b);
check = () => {
  if (a + b == 10 || a == 10 || b == 10) {
    alert("TRUE");
    window.setTimeout(() => location.reload, 1000);
  } else {
    alert("FALSE");
    window.setTimeout(() => location.reload, 1000);
  }
};

check();
