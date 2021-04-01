var command = document.getElementById("commands-info").getElementByTagName("tr")[0].getElementByTagName("td")[0].getElementByTagName("a")[0].onclick = store();
var clicked = command.getElementByTagName("tr")[0];
var td = clicked.getElementByTagName("td")[0];
var a = td.getElementByTagName("a")[0];
a.onclick = data();
function store() {
  if (typeof(Storage) !== "undefined") {
  // Store
    localStorage.setItem("clickedon", data[o].name
  // Retrieve
  location.hash = localStorage.getItem("clickedon");
} else {
  location.hash = '';
}
};
