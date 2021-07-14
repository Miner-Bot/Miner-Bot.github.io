module.exports = {
	name: 'announcement',
	description: 'Used when I need to announce something!',
	execute(message, args) {
		const nowUTC = new Date().toLocaleString('en-US', { timeZone: 'UTC', timeZoneName: 'short' });
		const info = `||Happened on ${nowUTC}||`;
		if (message.author.id === '444767734409068545') {
			const channel = message.guild.channels.cache.find(ch => ch.id === '785987873240383519');
			channel.send(`${args.join(' ')} ${info}`);
			message.delete({ timeout: 500 })
				.catch(console.error);
		}
	},
};