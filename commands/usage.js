const prefix = '=';
const Discord = require('discord.js');
module.exports = {
	name: 'usage',
	description: '**[This command]** ; List of all the avaiable commands, or get more info about a specific command.',
	args: true,
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		function titleCase(str) {
			return str
				.split(' ')
				.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
		}
		const data = [];
		const user = message.author;
		const { commands } = message.client;
		if (!args.length) {
			return;
		}
		const name = args[0];
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That\'s not a valid command!');
		}

		if (command.usage) data.push(`**Usage:** ${prefix}${titleCase(`${command.name}`)} ${command.usage}`);

		if (!command.usage) data.push('There is no usage for this command! Which means either the creator has not finished this command, or there is no need for it\'s usage');

		const commandEmbed = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle(`${titleCase(`${command.name}`)}`)
			.setDescription('||Usage||')
			.addFields(
				{ name: '\u200b', value: `${data}` },
			);
		if (message.channel.type === 'text') {
			data.push(commandEmbed);
			return message.reply(data);
		}
		const commandEmbedDM = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle(`${titleCase(`${command.name}`)}`)
			.setDescription('||Usage||')
			.setAuthor('MinerBot', 'https://cdn.discordapp.com/avatars/767055142544605194/e454719df1eb6c605fb201e4e7bea649.png?size=1024')
			.addFields(
				{ name: '\u200b', value: `${data}` },
			)
			.setTimestamp();
		if (message.channel.type === 'dm') {
			data.push(commandEmbedDM);
			return user.send(data);
		}
	},
};
