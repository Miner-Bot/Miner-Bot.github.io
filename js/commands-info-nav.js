/*		    fetch('commands.json')
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
var element = a.getElementByTagName("tr")[o].getElementByTagName("td")[o].getElementByTagName("a");
		var commandname = this.event.innerHTML;
		// localStorage.setItem("clickedon", commandname);


	});
}

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || element,
        text = target.textContent || target.innerHTML;
}, false);
*/
if (typeof(Storage) !== "undefined") {
  // Store
  // Retrieve
  location.hash = localStorage.clickedon;
} else {
  location.hash = '';
}
