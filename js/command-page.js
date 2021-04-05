function titleCase(str) {
 			            return str
 				        .split(' ')
 				        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
 				        .join(' ');
 		            }
		    fetch('commands.json')
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (data) {
                        appendData(data);
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
			
                    function appendData(data) {
			    const prefix = '=';
			    for (var o = 0; o < data.length; o++) {
				    var str;
				    if (data[o].usage && data[o].aliases) {
					    str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + ' ' + data[o].usage + '<br>' + 'Aliases:' + ' ' + prefix + data[o].aliases;
				    } else if (data[o].usage && !data[o].aliases) {
					    str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + ' ' + data[o].usage;
				    } else if (!data[o].usage && data[o].aliases) {
					    str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name + '<br>' + 'Aliases:' + ' ' + prefix + data[o].aliases;
				    } else if (!data[o].usage && !data[o].aliases) {
					    str = 'Description:' + ' ' + data[o].description + '<br>' + 'Usage:' + ' ' + prefix + data[o].name;
				    }
                        var parent = document.getElementById("commands-in-here");
                        var det = document.createElement("details");
                        var sum = document.createElement("summary");
                        var hr = document.createElement("hr");
                        var p = document.createElement("p");

                        var att = document.createAttribute("id");
                        var att2 = document.createAttribute("class");
			var att3 = document.createAttribute("id");
                        var att4 = document.createAttribute("class");
			var att5 = document.createAttribute("class");



                        att.value = data[o].name;
                        att2.value = 'text-box bungee-body-text';
                        att4.value = 'bungee-small-body-text';
			att3.value = 'command-summary';
			att5.value = 'command-details';

                        
                        parent.appendChild(det);
                        det.setAttributeNode(att);
                        det.appendChild(sum);
			det.setAttributeNode(att5);
			sum.setAttributeNode(att3);
                        sum.setAttributeNode(att2);
			sum.innerHTML = titleCase(data[o].name);
                        det.appendChild(p);
                        p.setAttributeNode(att4);
                        p.innerHTML = str;
			    }
		    }
  // Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  // localStorage.setItem("command", location.hash);
	document.title = localStorage.getItem("clickedon");
  // Retrieve

} else {
  document.title = "Command Details";
}
