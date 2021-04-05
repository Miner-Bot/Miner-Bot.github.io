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
		var commandname = event.innerHTML;
		event.onclick = setData();
		localStorage.setItem("clickedon", commandname);


	});
}

/* document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || event,
        text = target.textContent || target.innerHTML;   
}, false);*/

function setData() {
if (typeof(Storage) !== "undefined") {
  // Store
  // Retrieve
  location.hash = localStorage.getItem("clickedon");
} else {
  location.hash = '';
}
}
