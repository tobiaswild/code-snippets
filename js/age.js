// https://github.com/ottomated/portfolio/blob/master/js/age.js

setInterval(() => {
  let time =
    (new Date() - new Date(1107333960)) / (1000 * 60 * 60 * 24 * 365.25) - 35;
  document.getElementById("age").innerText = time.toString().substring(0, 12);
}, 50);
