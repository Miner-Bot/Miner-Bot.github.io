function titleCase(str) {
	return str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}
fetch('commands.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		appendData(data);
	})
	.catch(function(err) {
		console.log(err);
		document.getElementById('commands-info').innerHTML = err;
	});

function appendData(data) {
	var l = data.length
	for (var o = 0; o < l; o++) {
		var str;
		str = 'Description:' + ' ' + data[o].description;
		var table = document.getElementById("commands-info");
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var hr = document.createElement("hr");
		var p = document.createElement("p");
		var a = document.createElement("a");
		var div = document.createElement("div");
		var att = document.createAttribute("id");
		var title = document.createAttribute("title");
		var att2 = document.createAttribute("class");
		var att3 = document.createAttribute("class");
		var att4 = document.createAttribute("class");
		// -for href method- var href = document.createAttribute("href");
		var aclass = document.createAttribute("class");
		var onclick = document.createAttribute("onclick");
		var relativeatt = document.createAttribute("style");
		att.value = data[o].name;
		title.value = titleCase(data[o].name);
		att2.value = 'text-box bungee-body-text';
		att3.value = 'divider-page-width-mod my-2';
		att4.value = 'bungee-small-body-text';
		relativeatt.value = 'position:relative;width:100%;';

		a.innerHTML = titleCase(data[o].name);

		aclass.value = 'commandlink';
		onclick.value = 'localStorage.setItem("clickedon", "' + data[o].name + '");window.location.assign("https://"+window.location.hostname+"/command#' + data[o].name + '");';
		// -for href method- href.value = '/command#' + data[o].name;

		table.appendChild(tr);
		tr.setAttributeNode(att);
		tr.appendChild(td);
		td.setAttributeNode(att2);
		div.setAttributeNode(relativeatt);
		a.setAttributeNode(onclick);
		a.setAttributeNode(aclass);
		// -for href method- a.setAttributeNode(href);
		td.appendChild(div);
		td.appendChild(a);
		if (tr.getAttribute('id') === "downtime" || tr.getAttribute('id') === "move" || tr.getAttribute('id') === "msgs" || tr.getAttribute('id') === "reload" || tr.getAttribute('id') === "restart" || tr.getAttribute('id') === "setactivity" || tr.getAttribute('id') === "stats" || tr.getAttribute('id') === "testing") {
			var tooltip = document.createElement('a');
			var badge = document.createElement('span');
			/*
      data-toggle="tooltip" title="Hooray!"
      */
			var DataAtt = document.createAttribute('data-toggle');
			var title = document.createAttribute('title');
			var astyle = document.createAttribute('style');
			var badgeclass = document.createAttribute('class');
			var badgestyle = document.createAttribute('style');
			DataAtt.value = "tooltip";
			title.value = "Not for public use (Only works for the creator)";
			astyle.value = "position: absolute;right: 0px !important;top: 0px !important"
			badgeclass.value = 'badge badge-pill badge-danger';
			badgestyle.value = 'position:absolute; right: 0px !important; top: 0px !important;';
			tooltip.setAttributeNode(DataAtt);
			tooltip.setAttributeNode(title);
			badge.setAttributeNode(badgeclass);
			badge.innerHTML = '!';
			div.appendChild(tooltip);
			tooltip.appendChild(badge);
		}
		// td.innerHTML = '<a class="js-scroll-trigger" href="/command' + location.hash + '" onclick="localStorage.setItem("clickedon", data[o].name)">' + titleCase(data[o].name) + '</a>';
		td.appendChild(hr);
		td.appendChild(p);
		hr.setAttributeNode(att3);
		p.setAttributeNode(att4);
		p.innerHTML = str;
	}
	/*command = document.getElementById('move').getElementByTagName('a');
  command.appendChild(badge);
  command = document.getElementById('msgs').getElementByTagName('a');
  command.appendChild(badge);
  command = document.getElementById('reload').getElementByTagName('a');
  command.appendChild(badge);
  command = document.getElementById('restart').getElementByTagName('a');
  command.appendChild(badge);
  command = document.getElementById('setactivity').getElementByTagName('a');
  command.appendChild(badge);
  command = document.getElementById('stats').getElementByTagName('a');
  command.appendChild(badge);
  command = document.getElementById('testing').getElementByTagName('a');
  command.appendChild(badge);*/
}
