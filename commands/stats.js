const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Get the stats.'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`\`\`\`S T A T S \n=============================================================================\nWebsocket heartbeat: ${interaction.client.ws.ping}ms. \n Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms\n=============================================================================\nUptime: ${interaction.client.uptime}\n=============================================================================\nReady at: ${interaction.client.readyAt}\nReady Timestamp: ${interaction.client.readyTimestamp}\n=============================================================================\`\`\` `);
	},

};