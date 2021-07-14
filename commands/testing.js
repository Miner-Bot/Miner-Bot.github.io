module.exports = {
	name: 'testing',
	description: 'TESTING 123',
	execute(message, args, client) {
		client.voiceChannelIDs;
		const data = [];
		if(!message.guild.voiceConnection) {
			message.channel.send('VoiceChannelConnection: `NONE`');
		}
		if (message.guild.voiceConnection) {
			message.channel.send(`${client.voiceChannelIDs}`);
		}

		// Get the user's voiceChannel (if he is in one)
		// WORKS const userVoiceChannel = message.member.voice.channel;

		message.channel.send(`VoiceState Method: ${client.VoiceState}`);
		//  DOESN'T WORK: message.channel.send(`${message.member.VoiceState.channelID}`);
		message.channel.send(`Member.voice.channel:${message.member.voice.channel}`);
		// Get the client's voiceConnection
		const clientVoiceConnection = client.voiceChannelIDs;
		if (message.guild.voiceConnection) {
			data.push(`${clientVoiceConnection}`);
			message.channel.send(`${client.VoiceState}`);
			message.channel.send(`${message.member.voiceState.channelID}`);
		}
		if (!message.guild.voiceConnection) {
			data.push('NONE');
		}
		message.channel.send(`CLIENT VOICE CONNECTION [CHANNEL]: ${data}`);
		// Compare the voiceChannels
		message.channel.send(`${clientVoiceConnection}`);
	},

};