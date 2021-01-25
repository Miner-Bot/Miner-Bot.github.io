module.exports = {
	name: 'play',
	description: 'I\'ll join the voice channel, that you are currently in.',
	usage: '[YouTube URL]',
	execute(message, args) {
		if (message.member.voice.channel) {
			const connection = message.member.voice.channel.join();
			const dispatcher = connection.play(`${args[0]}`);
			dispatcher.pause(true);
		}
	},
};