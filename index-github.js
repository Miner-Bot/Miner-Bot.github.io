const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('D:/a/MinerBot/MinerBot/config.json');
// const ytdl = require('ytdl-core');
// const ytdldiscord = require('ytdl-core-discord');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// const timestampForStatus = client.readyTimestamp;
// const uptime = client.uptime;
const cooldowns = new Discord.Collection();

// for getting current voice channel
client.voiceChannelIDs = new Map();
//

// let phnum;
// let UsersNumbers = new Map();
/* fs.readFile('./numbers.json', (err, data) => {
	if (err) throw err;
	phnum = JSON.parse(data);
	// console.log(phnum);
	UsersNumbers = phnum;
});
*/
// async function play(connection, url) {
// 	connection.play(await ytdldiscord(url), { type: 'opus' });
// }

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// getting the command name, to run that command:
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	// Command Aliases Checker
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	// Guild-only-command checking line:
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	// Arguments checker:
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		// Usage checker:
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
	// Cooldowns:
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	// Timestamp checker:
	if (timestamps.has(message.author.id)) {
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
			timestamps.set(message.author.id, now);
			setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		}
	}
	if (message.content === '=join') {
		if (message.member.voice.channel) {
			const connection2 = await message.member.voice.channel.join();
			const dispatcher = connection2.play('C:/Users/mjsey/OneDrive/MinerBot/StartupSound.mp3');
			message.member.voice.channel.join().then(channel => {
				client.voiceChannelIDs.set(channel.id, 'current channel');
			});
			dispatcher.on('start', () => {
				console.log('CONNECTED SOUND is now playing!');
			});

			dispatcher.on('finish', () => {
				console.log('Audio has finished playing!');
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
		}
		else if (!message.member.voice.channel) {
			const user = message.author.id;
			message.channel.send(`You have to join a voice channel first, <@${user}>!`);
		}
	}
	if (message.content === '=disconnect') {
		if (message.guild.voiceStates) {
			const connection = message.guild.voice.connection;
			connection.disconnect();
		}
		else if (!message.guild.voiceStates) {
			const user = message.author.id;
			message.channel.send(`I'm not in a voice channel, <@${user}>! If you want me to join your voice channel, use \`=join\`, first.`);
		}
	}
	// if (message.content === '=play') {
	// 	if (!message.guild.voiceStates) {
	// 		const url = args[0];
	// 		message.member.voice.channel.join().then(connection => {
	// 			const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
	// 			const dispatcher = connection.play(stream);
	// 			dispatcher.on('finish', () => message.channel.send('`QUEUE FINISHED` \n ` TIP `: To add another song to the queue, use `=play [the YouTube URL`'));
	// 		play(connection, url);
	// 		});
	// 	}
	// 	else if (message.guild.voiceStates) {
	// 		message.guild.voice.connection.then(connection => {
	// 			const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
	// 			const dispatcher = connection.play(stream);
	// 			dispatcher.on('finish', () => message.channel.send('`QUEUE FINISHED` \n ` TIP `: To add another song to the queue, use `=play [the YouTube URL]`'));
	// 		});
	// 		message.channel.send(`Playing ${args[0]}`);
	// 	}
	// }
	// Execute Command line:
	try {
		command.execute(message, args, client);
	}
	// Error catcher:
	catch (error) {
		console.error(error);
		core.setFailed(`Action failed with error ${error}`);
		message.reply('There was an error trying to execute that command!');
	}
});
const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`D:/a/MinerBot/MinerBot/commands/${file}`);
	client.commands.set(command.name, command);
}

// send message when he joins the server
client.on('guildCreate', guild => {
	const channel = guild.channels.cache.find(channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));
	channel.send('Thanks for invite me');
});

// client.on('message', message => {
//	const userMention = (message.author.id);
//	const user = client.users.cache.get(message.author.id);
//	if (!message.content === '~vnum') {
//		user.send(`Here is your number: ${NumbersData}`),
//		message.channel.send(`<@${userMention}> I just sent you a DM with your number.`);
//	}
// });
// const status = JSON.parse(fs.readFileSync('./Miner-Bot.github.io/MinerBot/status.json', 'utf8'));
client.once('ready', () => {
	console.log('Ready!');
	console.log(client.uptime);
	client.user.setActivity('my new games!');
	core.saveState("Up", 1);
	fs.writeFile('commands.json', JSON.stringify(client.commands, null, 4), '', err => {
		if(err) console.log(err);
	});
	const timestampData = client.readyAt;
	const statusjson = { 'timestamp': timestampData, 'status': client.user.presence.status };
	fs.readFile('status.json', (err, data) => {
		if (err) throw err;
		let obj = JSON.parse(data);
		obj = obj + statusjson;
		const jsonEdited = JSON.stringify(obj);
		fs.writeFile('status.json', jsonEdited, '', err => {
			if(err) console.log(err);
		});
	});

});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.login(token);
