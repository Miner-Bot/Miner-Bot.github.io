const { SlashCommandBuilder, WebSocketManager } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Find out what my ping is at.'),
	async execute(interaction) {
		// await interaction.reply(`Websocket heartbeat: ${ping}ms.`);
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`Websocket heartbeat: ${interaction.client.ws.ping}ms. \n Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
		// show that bot is typing: 
		//  await interaction.deferReply();
		// then wait...
		//  await wait(4_000);
		// then edit the sent reply:
		//  await interaction.editReply('Pong!');
		
		// send a reply to the already sent message, with a hidden mention (basically just emphasises the message)
		//  await interaction.followUp({ content: 'Pong again!', ephemeral: true });
	},
};
