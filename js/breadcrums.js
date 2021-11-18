window.onload = function () {
  var url = window.location.href;
  var parts = url.split("/");
  let baseUrl = "";
  let crumbs = "";
  let allCrumbs = "";

  for (let i = 0; i < 3; i++) {
    baseUrl += parts[i] + "/";
  }

  for (let i = 3; i < parts.length - 1; i++) {
    allCrumbs += parts[i] + "/";
    crumbs += `<a href="${baseUrl + allCrumbs}"/>${parts[i]}</a> > `;
  }
  crumbs += `<a href="${baseUrl + allCrumbs + parts[parts.length - 1]}"/>${
    parts[parts.length - 1]
  }</a>`;

  console.log(baseUrl);
  console.log(crumbs);

  document.getElementById("test").innerHTML = crumbs;
};
