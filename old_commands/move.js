module.exports = {
	name: 'move',
	description: '||NOT FOR PUBLIC USE; CREATOR ONLY COMMAND||',
	args: true,
	execute(message, args) {
		if (message.author.id === '444767734409068545' && message.member.voice.channel === '#Waiting Room') {
			const member = message.mentions.members.first();
			// const channel = message.args[1];
			message.member.voiceChannel.join();
			member.setVoiceChannel('787488466241060864');
			message.channel.send(`Sent ${args[0]} to the stream chat`);
		}
	},
};
