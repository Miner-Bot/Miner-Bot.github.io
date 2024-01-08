const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('msgs')
		.setDescription('Pushes messages (from website) to dev.'),
	async execute(interaction, args, client) {
		const fs = require('fs');
		/* fetch('C:/Users/mjsey/OneDrive/MinerBot2Recovery/chats/dev.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				Send(data);
			})
			.catch(function(err) {
				console.log(err);
			});
		Send messages from website to me:
		function Send(data) {
			const user = client.users.cache.get('444767734409068545');
			const direction = 'out';
			let index = -1;
			let found = data.find(function(item, i) {
				if(item.name === direction) {
					index = i;
					return i;
				}
			});
			if (index === 0) {
				found = data[index];
			}
			else {
				// eslint-disable-next-line no-self-assign
				found = found;
			}
			user.send(found.msg);
		}*/
		fs.readFile('C:/Users/mjsey/OneDrive/MinerBot2Recovery/chats/dev.json', (err, data) => {
			if (err) throw err;
			const user = client.users.cache.get('444767734409068545');
			const direction = 'out';
			let index = -1;
			let found = data.find(function(item, i) {
				if(item.name === direction) {
					index = i;
					return i;
				}
			});
			if (index === 0) {
				found = data[index];
			} else {
				// eslint-disable-next-line no-self-assign
				found = found;
			}
			user.send(found.msg);
		});
	},
};