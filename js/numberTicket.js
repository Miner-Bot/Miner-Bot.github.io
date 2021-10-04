if (window.location.search) {
	const paramsString = window.location.search;
	const searchParams = new URLSearchParams(paramsString);
	const parent = document.getElementById('dataIn');
	const date = new Date(searchParams.get('dateSubmitted').slice(11));
	parent.innerHTML = 'Submitted on: ' + date.toDateString() + '<br>' + '=============================' + '<br>' + 'Number Information:';
	for(var value of searchParams.values()) {
		const card = document.getElementById('numberTicketCard');
		const div = document.createElement('div');
		const att = document.createAttribute('class');
		att.value = 'card-body';
		div.setAttributeNode(att);
		div.innerHTML = value;
		card.appendChild(div);
	}
	console.log(parent.innerHTML);
}
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	let l = ca.length;
	for(let i = 0; i < l; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function checkCookie() {
	var user = getCookie("user");
	var selected = getCookie("selected");
	const date = new Date();
	if (user != "") {
		const parent = document.getElementById('dataIn');
		const div = document.createElement('div');
		div.innerHTML = selected + '<br>' + 'For Discord User:' + '<br>' + user;
		parent.appendChild(div);
	}
}
