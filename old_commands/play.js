module.exports = {
	name: 'play',
	description: 'I\'ll join the voice channel, that you are currently in.',
	cooldown: 120,
	args: true,
	execute(message, args, client) {
		const ytdl = require('ytdl-core');
		const ytdldiscord = require('ytdl-core-discord');
		async function play(connection, url) {
			connection.play(await ytdldiscord(url), { type: 'opus' });
		}

		if (!message.guild.voiceStates) {
			const url = args[0];
			message.member.voice.channel.join().then(connection => {
				const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
				const dispatcher = connection.play(stream);
				dispatcher.on('finish', () => message.channel.send('`QUEUE FINISHED` \n ` TIP `: To add another song to the queue, use `=play [the YouTube URL`'));
				play(connection, url);
			});
		}
		else if (message.guild.voiceStates) {
			const url = args[0];
			message.guild.voiceConnection.then(connection => {
				const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
				const dispatcher = connection.play(stream);
				dispatcher.on('finish', () => message.channel.send('`QUEUE FINISHED` \n ` TIP `: To add another song to the queue, use `=play [the YouTube URL]`'));
				play(connection, url);
			});
			message.channel.send(`Playing ${args[0]}`);
		}

		client.emit(play());
		client.emit('messsage');
		console.error();
	},
};
