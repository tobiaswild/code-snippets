let lgtThm = "lightTheme";
let nrmThm = "normalTheme";

let changeColor = () => {
  if (document.getElementById("main").classList.contains(lgtThm)) {
    document.getElementById("main").classList.remove(lgtThm);
    document.getElementById("main").classList.add(nrmThm);
  } else {
    document.getElementById("main").classList.add(lgtThm);
    document.getElementById("main").classList.remove(nrmThm);
  }
};

document.getElementById("btn").addEventListener("click", changeColor);
