const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let w = parseInt(document.getElementById("win").value);
  let d = parseInt(document.getElementById("draw").value);
  let l = parseInt(document.getElementById("loss").value);
  var points = footballPoints(w, d, l);
  document.getElementById("output").innerHTML = points;
});

var footballPoints = (w, d, l) => {
  var pts = w * 3 + d * 1;
  return pts;
};
