			  function titleCase(str) { // REMAKE
				  return str
					  .split(' ')
					  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
					  .join(' ');
			  }
/*			  function urlsort() {
				  var cmd = titleCase(location.hash.slice(1));
				  localStorage.setItem("clickedon", cmd);
			  }
			  window.onload = urlsort();*/
			  fetch('commands.json')
				  .then(function (response) {
				  return response.json();
			  })
				  .then(function (data) {
				  return appendData(data);
			  })
				  .catch(function (err) {
				  console.log(err);
				  document.getElementById('err').innerHTML = err;
			  });
function appendData(data) {
	var cmd = window.location.hash.slice(1);
	const array1 = data;
	var index = -1;
	// const found = array1.find(element => element.name = cmd);
	var found = data.find(function(item, i){
		if(item.name === cmd){
			index = i;
			return i;
		}
	});
	if (index === 0) {
		found = data[index];
	} else {
		found = found;
	}
	console.info(`filtered element: ${found.name}, index: ${index}`);
	var description = found.description;
	console.debug(`description = ${description};`);
	var str;
	// var data = data.findIndex(d => d.name === location.hash.slice(1));

	console.debug(`str = ${str}`);
	var div = document.getElementById("info");
	var att = document.createAttribute("id");
	
	document.title = titleCase(location.hash.slice(1));
	var header = document.getElementById("title");
	var div1 = document.createElement("p");
	var att3 = document.createAttribute("class");
	att.value = found.name;
	div.setAttributeNode(att);
	div.innerHTML = str;
	att3.value = 'text-box bungee-small-body-text';
	div1.setAttributeNode(att3);
	div1.innerHTML = str;
	header.appendChild(div1);
	header.innerHTML = titleCase(found.name);
	console.debug(`div.innerHTML = ${div.innerHTML}`);
	console.debug(`header.innerHTML = ${header.innerHTML}`);
}
