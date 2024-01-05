module.exports = {
	name: 'radio',
	description: 'Get your own, private, music / radio channel. "turn off your radio" by using `=radio disable`',
	usage: '[disable](OPTIONAL; ONLY WORKS IF YOU ALREADY HAVE ONE)',
	execute(message, args) {
		const user = message.author;
		if (!args.length) {
			message.guild.channels.create(`${user.username}`, {
				type: 'voice',
				permissionOverwrites: [
					{
						id: message.author,
						allow: ['CONNECT'],
						deny: ['SPEAK'],
					},
					{
						id: message.channel.guild.roles.everyone,
						allow: ['VIEW_CHANNEL'],
						deny: ['CONNECT'],
					},
				],
			});
			message.channel.send(`Done! \`CHANNEL NAME: ${user.username}\``);
		}
		if (args[0] === 'disable') {
			const channel = message.guild.channels.cache.find(ch => ch.name === `${user.username}`);
			channel.delete(`${user.username}`);
			message.channel.send('Done! `YOUR RADIO HAS BEEN DISABLED`');
		}
		// else if(args.length === 1) {
		// 	message.guild.channels.filter('voice', `${args[1]}`);
		// }
	},
};