		    fetch('commands.json')
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (data) {
                        store(data);
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
			
document.getElementById("commands-info").getElementByTagName("tr")[o].getElementByTagName("td")[o].getElementByTagName("a")[o].onclick = store();
var command = document.getElementById("commands-info");
var clicked = command.getElementByTagName("tr")[o];
var td = clicked.getElementByTagName("td")[o];
var a = td.getElementByTagName("a")[o];
a.onclick = store(data);
function store(data) {
	for (var o = 0; o < data.length; o++) {
	if (typeof(Storage) !== "undefined") {
  // Store
    localStorage.setItem("clickedon", data[o].name);
  // Retrieve
  location.hash = localStorage.getItem("clickedon");
} else {
  location.hash = '';
}}
};
