const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Find out what my ping is at.'),
	async execute(interaction, args, client) {
		client.emit(message);
		if (!client.voiceConnection) {
			message.channel.send('Ok! Done.');
		}
	},
};