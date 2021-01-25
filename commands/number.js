/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	name: 'downtime',
	description: '||NOT FOR PUBLIC USE; CREATOR ONLY COMMAND|| N/A',
	execute(message) {
		function fetch() {
			fetch('numbers.json')
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
				const document = 'C:/Users/mjsey/Downloads/httpd-2.4.46-o111i-x64-vc15/Apache24/htdocs/customization.html';
				const mainContainer = document.getElementById('selected');
				for (let i = 0; i < data.length; i++) {
					const option = document.createElement('option');
					const att = document.createAttribute('value');
					const att2 = document.createAttribute('label');
					option.innerHTML = data[i].number;
					att.value = data[i].number;
					att2.value = 'Selected Number\'s ID: ' + data[i].id;
					mainContainer.appendChild(option);
					option.setAttributeNode(att);
					option.setAttributeNode(att2);
				}
			}
		}
		if (message.author.id === '444767734409068545') {
			const user = fetch();
			user.send('');
			message.delete({ timeout: 500 })
				.then(msg => console.log(`Entering Downtime now ($); called by you, ${msg.author.username}`))
				.catch(console.error);
		}
	},
};