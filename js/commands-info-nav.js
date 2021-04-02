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
function store(data) {
var a = document.getElementById("commands-info");
	for (var o = 0; o < data.length; o++) {
var event = a.getElementByTagName("tr")[o].getElementByTagName("td")[o].getElementByTagName("a");
		var commandname = data[o].name;
	}
}
event.onclick = setData();
function setData() {
if (typeof(Storage) !== "undefined") {
  // Store
    localStorage.setItem("clickedon", commandname);
  // Retrieve
  location.hash = localStorage.getItem("clickedon");
} else {
  location.hash = '';
}
}
