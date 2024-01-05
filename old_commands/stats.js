module.exports = {
	name: 'stats',
	description: 'Get the stats.',
	execute(message, args, client) {
		client.voiceChannelIDs;
		const data = [];
		if(!message.guild.voiceConnection) {
			message.channel.send('VoiceChannelConnection: `NONE`');
		}

		// Get the user's voiceChannel (if he is in one)
		const userVoiceChannel = message.member.voice.channel;
		data.push(`${userVoiceChannel}`);
		// Return from the code if the user isn't in a voiceChannel
		if (!userVoiceChannel) {
			message.channel.send('YourVoiceChannel: `NONE`');
			return;
		}
		if (userVoiceChannel) {
			message.channel.send(`YourVoiceChannel: ${data}`);
		}

		// Get the client's voiceConnection
		const clientVoiceConnection = client.voiceChannelIDs;
		if (message.guild.voiceConnection) {
			data.push(`${clientVoiceConnection}`);
			message.channel.send(`${message.guild.voiceConnection}`);
		}
		if (!message.guild.voiceConnection) {
			data.push('NONE');
		}
		message.channel.send(`CLIENT VOICE CONNECTION [CHANNEL]: ${data}`);
		// Compare the voiceChannels
		if (userVoiceChannel === clientVoiceConnection) {
			// The client and user are in the same voiceChannel, the client can disconnect
			message.channel.send('VOICECHANNELCONNECTION: SIMILAR?: `TRUE`');
		}
		message.channel.send(`${clientVoiceConnection}`);
	},

};