/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	name: 'number',
	description: '||NOT FOR PUBLIC USE; CREATOR ONLY COMMAND|| N/A',
	execute(message) {
	        var data_from_ajax;

                $.get('https://minerbot.xyz/output.php', function(data) {
                  data_from_ajax = data;
                });
		function user() {
			var data_from_ajax2;
			$.get('https://minerbot.xyz/index.php', function(data) {
				data_from_ajax2 = data;
			});
		}
		if (message.author.id === '444767734409068545') {
			const user = user();
			const numbers = data_from_ajax;
			message.guild.channels.find(m
			user.send(`${numbers`);
		}
	},
};
