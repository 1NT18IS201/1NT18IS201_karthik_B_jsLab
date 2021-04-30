let color = ["red", "blue", "yellow", "green", "purple"];
let arr = ["b1", "b2", "b3", "b4", "b5"];
for (let i = 0; i < 5; i++) {
  var div = document.createElement("div");
  div.id = arr[i];
  div.style.width = "100%";
  div.style.height = "50px";
  div.style.background = color[i];
  document.body.append(div);
}

let divs = document.querySelectorAll("div");
console.log(divs);
divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("Log");
    div.style.visibility = "hidden";
    console.log(div.id);

    let num = parseInt(div.id[1]);
    if (num > 1) {
      console.log(num);
      div = divs[(num - 2) % 5];
      console.log(div);
      div.style.visibility = "visible";
      console.log(div);
    }
  });
});
