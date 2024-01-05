module.exports = {
	name: 'downtime',
	description: '||NOT FOR PUBLIC USE; CREATOR ONLY COMMAND|| N/A',
	execute(message) {
		const nowUTC = new Date().toLocaleString('en-US', { timeZone: 'UTC', timeZoneName: 'short' });
		if (message.author.id === '444767734409068545') {
			const channel = message.guild.channels.cache.find(ch => ch.id === '785987873240383519');
			channel.send(`<@&785989391541600286>, ||[Sorry for ping 😕😓]|| I'll be going offline, now. See you all later!||Happened on ${nowUTC}||`);
			message.delete({ timeout: 500 })
				.then(msg => console.log(`Entering Downtime now (${nowUTC}); called by you, ${msg.author.username}`))
				.catch(console.error);
		}
	},
};