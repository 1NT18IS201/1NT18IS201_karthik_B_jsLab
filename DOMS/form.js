const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  document.getElementById("fnameop").innerHTML = fname;
  document.getElementById("lnameop").innerHTML = lname;
});
