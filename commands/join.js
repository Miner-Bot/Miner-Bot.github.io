module.exports = {
	name: 'join',
	description: 'Find out what my ping is at.',
	cooldown: 5,
	execute(message, args, client) {
		client.emit(message);
		message.channel.send(`Joining ${message.member.voice.channel} \n \`TIP\` If you want to request music to play, send \`=play [the YouTube URL of the desired song]\`'`);
	},
};