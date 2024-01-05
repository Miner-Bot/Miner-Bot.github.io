const Discord = require('discord.js');
module.exports = {
	name: 'ready',
	aliases: ['Start'],
	description: 'Tell me that your ready (only applicable after you have used the `~game` command ; also this is only used for the `~game` command)',
	execute(message) {
		const startGame = new Discord.MessageEmbed()
			.setColor('#13cf02')
			.setTitle('The Game.')
			.setDescription(' ')
			.addFields(
				{ name: '\u200b', value: 'Ok here we go', inline: false },
				{ name: '\u200b', value: 'Please wait...' },
			);
		message.channel.send(startGame)
			.then(
				setTimeout(function() {
					if (message.author.bot) {
						startGame.setDescription('**STARTING.**');
					}
					startGame.setDescription('**starting**');
				}, 1500),
			);
		// 	.addField('Loading . . . ', '\u200b', false)
		// 	.setImage('https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'),
		// ),
		// message.edit(startGame);
		// new Discord.MessageEmbed(startGame)
		//	.setFooter('Starting . . .')
		//	.setImage('https://media.tenor.co/videos/05e94e8ed0351ac2c72ee4fb98e38c50/mp4')
		// message.edit(startGame);
	},
};