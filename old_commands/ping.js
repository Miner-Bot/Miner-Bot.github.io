module.exports = {
	name: 'ping',
	description: 'Find out what my ping is at.',
	execute(message, args, client) {
		message.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
		});
	},
};
