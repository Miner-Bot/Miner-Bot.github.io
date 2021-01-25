const Discord = require('discord.js');
module.exports = {
	name: 'welcome',
	description: 'Let\'s introduce ourselves! Also, this is how you can learn my commands.',
	aliases: ['hi'],
	usage: 'My name is[Your preffered name]',
	execute(message, args, client) {
		message.channel.send('Thank you, I am pleased to be here.');
		const WelcomeEmbed = new Discord.MessageEmbed()
			.setColor('#e8a617')
			.setTitle('Hello! My name is MinerBot')
			.setDescription('Here is some more information about me!')
			.setAuthor('MinerBot', 'https://cdn.discordapp.com/avatars/767055142544605194/e454719df1eb6c605fb201e4e7bea649.png?size=1024')
			.setURL('https://minerbot.xyz')
			.addFields(
				{ name: '\u200b', value: '[Go check out my **NEW** website! ||The url is minerbot.xyz||](https://minerbot.xyz)' },
			);
		message.channel.send(WelcomeEmbed);
		// send message when he joins the server
		client.on('guildCreate', guild => {
			const channel = guild.channels.cache.find(channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));
			channel.send(WelcomeEmbed);
		});
		// const filter = m => m.content.startsWith('My name is');
		// message.channel.awaitMessages(filter)
		// 	.then(collected => console.memory(`${client.user.id}: ${collected.content}`)
		// 		.catch(collected => console.log(`all Names have been collected; ${collected.size}`)));
	},
};