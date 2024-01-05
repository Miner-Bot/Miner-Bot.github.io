module.exports = {
	name: 'restart',
	description: '||NOT FOR PUBLIC USE; CREATOR ONLY COMMAND|| N/A',
	execute(message) {
		if (message.author.id === '444767734409068545') {
			message.channel.send('Restarting in 3')
				.then((sentMessage) =>
					setTimeout(function() {
						sentMessage.edit('Restarting in 2');
						setTimeout(function() {
							sentMessage.edit('Restarting in 1...');
							setTimeout(function() {
								process.exit();
							}, 1000);
						}, 1000);
					}, 1000),
				)
				.then(setTimeout(function() {
					message.channel.send('Restarted!');
				}, 3000),
				);
			if (message.channel.type === 'dm') {
				return;
			}
			else if (message.channel.type === 'text') {
				if (message.guild.voiceConnection) {
					message.guild.voiceChannel.leave();
				}
			}
		}
		else if (message.author.id === `${message.author.id}`) {
			return message.channel.send('Due to security concerns, you are not able to run this command.');
		}
	},
};