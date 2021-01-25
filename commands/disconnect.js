module.exports = {
	name: 'disconnect',
	description: 'Find out what my ping is at.',
	aliases: ['leave'],
	cooldown: 5,
	execute(message, args, client) {
		client.emit(message);
		if (!client.voiceConnection) {
			message.channel.send('Ok! Done.');
		}
	},
};