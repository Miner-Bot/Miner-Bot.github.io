const Discord = require('discord.js');
module.exports = {
	name: 'drive',
	description: 'Drive around',
	execute(message) {
		const street = new Discord.MessageEmbed()
			.setColor('#b0b0b0')
			.setTitle('\u200b')
			.addFields(
				{ name: '\u200b', value: '⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟨', inline: true },
				{ name: '\u200b', value: '🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜🟨⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜', inline: true },
				{ name: '\u200b', value: '<:DarkGrayCar:785241131297931315>', inline: false },
			);
		message.channel.send(street);
		// assets: 🌳🌲🌵🌴🌹🌷🌊🏊🚨🚔🔥🚒🚓🚑🚍🚖🚕🚌🚆🏥🏨🏫
		const HorizontalStreet = new Discord.MessageEmbed()
			.setColor('#b0b0b0')
			.setTitle('\u200b')
			.addFields(
				{ name: '\u200b', value: '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨', inline: false },
				{ name: '\u200b', value: '🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜', inline: false },
				{ name: '\u200b', value: '<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>\n🟫🟫🟫🟫🟫🟫🟫=┓<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>🟦🟦🟦🟦🟦🟦🟦\n🟫🟫⬜🟫⬜🟫🟫 ┃<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>🟦🟦⬜⬜⬜🟦🟦\n🟫🟫⬜⬜⬜🟫🟫 ┃<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>🟦🟦⬜🟦⬜🟦🟦\n🟫🟫⬜🟫⬜🟫🟫 ┃<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>🟦🟦⬜⬜⬜🟦🟦\n🟫🟫🟫🟫🟫🟫🟫 ┃<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>🟦🟦⬜🟦⬜🟦🟦\n🟩🟩🟩🟩🟩🟩🟩 ┃⬛⬛🟦🟦🟦🟦🟦🟦🟦\n🟩🌲🟩🟩🟩🟩🟩 ┃', inline: false },
				{ name: '\u200b', value: '<:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>\n\n\n🟦🟦⬜⬜⬜🟦🟦\n🟦🟦⬜🟦⬜🟦🟦\n🟦🟦🟦🟦🟦🟦🟦', inline: true },
				{ name: '\u200b', value: '⬜⬛🟨⬛⬜\n⬜⬛⬛⬛⬜\n⬜⬛🟨⬛⬜\n⬜⬛⬛⬛⬜\n⬜⬛🟨⬛⬜\n⬜⬛⬛⬛⬜\n⬜⬛🟨⬛⬜\n⬜⬛⬛⬛⬜\n⬜⬛🟨⬛⬜\n⬜⬛⬛⬛⬜', inline: false },
				{ name: '\u200b', value: '<:WhiteCar:785263696757653544> <:gray_large_square:785286222083391507><:gray_large_square:785286222083391507><:gray_large_square:785286222083391507>', inline: false },
				{ name: '\u200b', value: 'ASSETS: 🌳🌲🌵🌴🌹🌷🌊🏊🚨🚔🔥🚒🚓🚑🚍🚖🚕🚌🚆🏥🏨🏫', inline: false },
			)
			.setFooter('KEY:\n🟫 = 🏠 House\n🟦 = 🔧 Auto Shop\n🟧 = ⛽ Gas Station\n NOTE: NOT SUITABLE FOR MOBILE DEVICES.');
		message.channel.send(HorizontalStreet);
	},
};
