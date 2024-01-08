const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { prefix } = require('C:/Users/mjsey/OneDrive/MinerBot/config.json');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('**[This command]** ; List of all the avaiable commands, or get more info about a specific command.')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('Command Name')
				.setRequired(false)),
	async execute(interaction) {
		function titleCase(str) {
			return str
				.split(' ')
				.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
		}
		const args = interaction.options.getString('command');
		const data = [];
		const user = interaction.user;
		const userid = user.id;
		const { commands } = interaction.client.commands;
		const message = interaction.fetchReply();
		if (!args) {
			data.push(commands.map(command => titleCase(`${(command.data.name)}`)).join('\n '));
			data.push(`\nYou can send \`/help [command name]\` to get info on a specific command!`);
			const HelpEmbed = new EmbedBuilder()
				.setColor('#f5a802')
				.setTitle('**Commands**')
				.setDescription('\u200b')
				.setAuthor('MinerBot', 'https://cdn.discordapp.com/avatars/767055142544605194/e454719df1eb6c605fb201e4e7bea649.png?size=1024')
				.addFields(
					{ name: '**__Here\'s a list of all my commands__:**', value: `**${data.join('\n')}**` },
				)
				.setFooter('Also, you can check out my website, too! Click [here](https://miner-bot.github.io/) ');
			data.push(HelpEmbed);
			return user.send(data)
				.then(message.react('765319818844176444'))
				.then(interaction.reply(`<@${userid}>, I've just sent you a DM with a list of my commands.`));
		}
		const name = args[0];
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return interaction.reply('That\'s not a valid command!');
		}

		data.push(`**Name:** ${titleCase(`${command.data.name}`)}`);

		//if (command.data.aliases) data.push(`**Aliases:** ${command.data.aliases.join(', ')}`);
		if (command.data.description) data.push(`**Description:** ${command.data.description}`);
		if (command.data.usage) data.push(`**Usage:** ${prefix}${command.data.name} ${command.data.usage}`);

		data.push(`**Cooldown:** ${command.data.cooldown || 3} second(s)`);

		const commandEmbed = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle(`${titleCase(`${command.data.name}`)}`)
			.setDescription(`||For: <@${userid}>||`)
			.setAuthor('MinerBot', 'https://cdn.discordapp.com/avatars/767055142544605194/e454719df1eb6c605fb201e4e7bea649.png?size=1024')
			.addFields(
				{ name: 'Here\'s some information that might help.', value: `${data.join('\n')}` },
			)
			.setFooter('Also, you can check out my website, too! Click [here](https://miner-bot.github.io/)');
		if (interaction.channel.type === 'text') {
			data.push(commandEmbed);
			return interaction.reply(data);
		}
		const commandEmbedDM = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle(`${titleCase(`${command.data.name}`)}`)
			.setDescription('\u200b')
			.setAuthor('MinerBot', 'https://cdn.discordapp.com/avatars/767055142544605194/e454719df1eb6c605fb201e4e7bea649.png?size=1024')
			.addFields(
				{ name: 'Here\'s some information that might help.', value: `${data.join('\n')}` },
			)
			.setTimestamp()
			.setFooter('Also, you can check out my website, too! Click [here](https://miner-bot.github.io/)');
		if (message.channel.type === 'dm') {
			data.push(commandEmbedDM);
			return user.send(data);
		}
	},
};