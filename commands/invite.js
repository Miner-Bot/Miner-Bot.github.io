const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Invite me to one of your servers'),
	async execute(interaction) {
		const user = message.author.id;
		const inviteInfo = new Discord.MessageEmbed()
			.setColor('#36a3d9')
			.setTitle('`Invite me!`')
			.setDescription(`||<@${user}>||`)
			.addFields(
				{ name: 'I\'m so excited, to join one of your servers!', value: '[Invite the bot](https://discord.com/oauth2/authorize?client_id=767055142544605194&scope=bot%20identify%20connections%20guilds%20activities.read&permissions=2146959184&response_type=code) \n[Support server invite](https://discord.gg/fDM9ykmTwN)' },
			);

		message.channel.send(inviteInfo);
	},
};