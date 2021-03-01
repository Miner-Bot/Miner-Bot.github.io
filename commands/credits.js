const Discord = require('discord.js');
module.exports = {
	name: 'credits',
	description: 'You might be wondering, "Who made this...?" Well, here\'s your answer.',
	aliases: ['about'],
	execute(message) {
		const Credits = new Discord.MessageEmbed()
			.setColor('#1255db')
			.setTitle('Credits:')
			.setAuthor('IcicleSavage#0381', 'https://images-ext-2.discordapp.net/external/gZkTLgJMqUS-BIzhGtdQvfltRKPcLAijn7jBWhiUhus/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/444767734409068545/a_e32ddae0b3fbc2478616697c30e1f449.gif')
			.addFields(
				{ name: '**Created By: IcicleSavage||[#0381]||** \n Developed By: IcicleSavage||[#0381]||\n All Art Created By: IcicleSavage||[#0381]||', value: '||Script type used: Discord.js||\n Check out my **NEW** website: [here](https://minerbot.xyz)', inline: true },
			);
		message.channel.send(Credits);
	},
};
