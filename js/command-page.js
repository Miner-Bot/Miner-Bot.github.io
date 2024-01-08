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
	});

function appendData(data) {
	const prefix = '=';
	for (let o = 0; o < data.length; o++) {
		var str;

		const parent = document.getElementById('commands-in-here');
		const det = document.createElement('details');
		const sum = document.createElement('summary');
		const hr = document.createElement('hr');
		const p = document.createElement('p');

		const att = document.createAttribute('id');
		const att2 = document.createAttribute('class');
		const att3 = document.createAttribute('id');
		const att4 = document.createAttribute('class');
		const att5 = document.createAttribute('class');


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
if (typeof (Storage) !== 'undefined') {
	// Store
	document.title = localStorage.getItem('clickedon');
	// Retrieve

}
else {
	document.title = 'Command Details';
}
