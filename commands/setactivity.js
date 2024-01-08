const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setactivity')
		.setDescription('N/A'),
	async execute(interaction, args, client) {
		if (message.author.id === '444767734409068545') {
			client.user.setActivity('my new games!');
			message.author.id.send('Done!||...my king!||');
		}
		else if (!message.author.id === '444767734409068545') {
			return message.channel.send('Sorry, you don\'t have permission to do that.');
		}
	},
};