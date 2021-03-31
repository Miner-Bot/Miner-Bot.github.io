function clickCommand() {
var command = document.getElementById("commands-info");
var clicked = command.getElementByTagName("tr")[0];
var td = clicked.getElementByTagName("td")[0];
var a = td.getElementByTagName("a")[0];
a.addEventListener('click', function() {
  if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("clickedon", a.id);
  // Retrieve
  location.hash = localStorage.getItem("clickedon");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
});
}
