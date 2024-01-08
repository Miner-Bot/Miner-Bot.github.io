const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Fun game!'),
	async execute(interaction, args) {
		message.channel.send('So, you wanna play a game.')
			.then((sentMessage) =>
				setTimeout(function() {
					sentMessage.edit('...');
					setTimeout(function() {
						sentMessage.edit('Ok. Well. Try using an arg for that. :lol:');
					}, 2000);
				}, 2000),
			);
		if (args[0] === '2048') {
			message.channel.send('Well, are you on mobile, or are you on computer/pc?')
				.then(message.react('📱'))
				.then(message.react('🖥️'));

			const filter = (reaction, user) => {
				return ['📱', '🖥️'].includes(reaction.emoji.name) && user.id === message.author.id;
			};
			message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					const reaction = collected.first();

					if (reaction.emoji.name === '🖥️') {
						message.reply('Nice!\n Go here: https://iciclesavage.github.io/MinerGames/ || Site organized by my creator :) ||');
					}
					else {
						message.reply('Sorry, 2048, is not available for your platform, yet. \n`[FROM DEV: still working on it :)]`');
					}
				})
				.catch(collected => {
					message.reply(`Sorry, ${collected}, is not a valid choice. Please re-run the command.`);
				});
		}
	},
};