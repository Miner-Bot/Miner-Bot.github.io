const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: '**[This command]** ; List of all the avaiable commands, or get more info about a specific command.',
	aliases: ['commands'],
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
		const userid = message.author.id;
		const { commands } = message.client;
		if (!args.length) {
			data.push(commands.map(command => titleCase(`${(command.name)}`)).join('\n '));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
			const HelpEmbed = new Discord.MessageEmbed()
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
				.then(message.channel.send(`<@${userid}>, I've just sent you a DM with a list of my commands.`));
		}
		const name = args[0];
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That\'s not a valid command!');
		}

		data.push(`**Name:** ${titleCase(`${command.name}`)}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		const commandEmbed = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle(`${titleCase(`${command.name}`)}`)
			.setDescription(`||For: <@${userid}>||`)
			.setAuthor('MinerBot', 'https://cdn.discordapp.com/avatars/767055142544605194/e454719df1eb6c605fb201e4e7bea649.png?size=1024')
			.addFields(
				{ name: 'Here\'s some information that might help.', value: `${data.join('\n')}` },
			)
			.setFooter('Also, you can check out my website, too! Click [here](https://miner-bot.github.io/)');
		if (message.channel.type === 'text') {
			data.push(commandEmbed);
			return message.reply(data);
		}
		const commandEmbedDM = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle(`${titleCase(`${command.name}`)}`)
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