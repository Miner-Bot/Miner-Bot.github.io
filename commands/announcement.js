const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('announcement')
		.setDescription('Used when I need to announce something!')
		.addStringOption(option =>
			option.setName('message')
				.setDescription('What to announce')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('title')
				.setDescription('Title of your announcement')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('color')
				.setDescription('Hex code')
				.setRequired(false))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(true),
	async execute(interaction) {
		const client = interaction.client;
		const message = interaction.options.getString('message');
		let author = interaction.user.username;
		if (author && author == 'iciclesavage' && interaction.guildId == '751570387979993110') {
			author += ' • The Creator';
		}
		const channel = client.channels.cache.get('785987873240383519');
		let color = interaction.options.getString('color');
		if (color && color.includes('#')) {
			color = '0x' + color.split('#', 6).join('');
			color = Number(color);
		} else {
			color = [0, 0, 0];
		}
		let data;
		if (interaction.options.getString('title')) {
			const title = interaction.options.getString('title');
			data = { name: title, value: message };
		} else if (!interaction.options.getString('title')) {
			data = { name: ' ', value: message };
		}
		const exampleEmbed = new EmbedBuilder()
			.setTitle('Announcement!')
			.setColor(color)
			.setAuthor({ name: author, iconURL: interaction.user.displayAvatarURL() })
			.addFields(
				data,
			)
			.setTimestamp()
			.setFooter({ text: 'Reciprocated with the help of MinerBot!', iconURL: client.user.avatarURL() });
		await interaction.reply('done');
		await channel.send({ embeds: [exampleEmbed] });
	},
};