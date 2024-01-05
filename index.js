const fs = require('fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { prefix, token } = require('.//config.json');
const ytdl = require('ytdl-core-discord');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// const timestampForStatus = client.readyTimestamp;
// const uptime = client.uptime;
const cooldowns = new Discord.Collection();

// for getting current voice channel
client.voiceChannelIDs = new Map();
//

let phnum;
let UsersNumbers = new Map();
fs.readFile('./Miner-Bot.github.io/MinerBot/numbers.json', (err, data) => {
	if (err) throw err;
	phnum = JSON.parse(data);
	// console.log(phnum);
	UsersNumbers = phnum;
});

// async function play(connection, url) {
// 	connection.play(await ytdldiscord(url), { type: 'opus' });
// }

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;

	// getting the command name, to run that command:
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	// Command Aliases Checker
	const command = interaction.client.commands.get(interaction.commandName);

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
			const connection2 = /*await*/ message.member.voice.channel.join();
			const dispatcher = connection2.play('C:/Users/mjsey/MinerBot/MinerBot/StartupSound.mp3');
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
		} else if (!message.member.voice.channel) {
			const user = message.author.id;
			message.channel.send(`You have to join a voice channel first, <@${user}>!`);
		}
	}
	if (message.content === '=disconnect') {
		if (message.guild.voiceStates) {
			const connection = message.guild.voice.connection;
			connection.disconnect();
		} else if (!message.guild.voiceStates) {
			const user = message.author.id;
			message.channel.send(`I'm not in a voice channel, <@${user}>! If you want me to join your voice channel, use \`=join\`, first.`);
		}
	}
	async function play(connection, url) {
		connection.play(await ytdl(url), { type: 'opus' });
	}
	if (message.content === '=play') {

		if (!message.guild.voiceStates) {
			const url = args[0];
			message.member.voice.channel.join().then(connection => {
				const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
				const dispatcher = connection.play(stream);
				dispatcher.on('finish', () => message.channel.send('`QUEUE FINISHED` \n ` TIP `: To add another song to the queue, use `=play [the YouTube URL`'));
				play(connection, url);
			});
		} else if (message.guild.voiceStates) {
			const url = args[0];
			connection => {
				const stream = ytdl(url, { filter: 'audioonly' });
				const dispatcher = connection.play(stream);
				dispatcher.on('start', () => console.log(`started playing ${args[0]}, at ${Date.now}`));
				dispatcher.on('finish', () => message.channel.send('`QUEUE FINISHED` \n ` TIP `: To add another song to the queue, use `=play [the YouTube URL]`'));
				play(connection, url);
			};
			message.guild.voiceStates.connection;
			message.channel.send(`Playing ${args[0]}`);
		}
	}
	try {														// Execute Command line:
		command.execute(message, args, client, UsersNumbers);
	} catch (error) {											// Error Catcher:
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// send message when he joins the server
client.on('guildCreate', guild => {
	const channel = guild.channels.cache.find(channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));
	channel.send('Thanks for inviting me!');
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
let latest;
client.once('ready', () => {
	console.time('uptime');
	console.log('Ready!', client.readyAt);
	client.user.setActivity('my new games!');
	fs.writeFile('./Miner-Bot.github.io/MinerBot/commands.json', JSON.stringify(client.commands, null, 4), '', err => {
		if(err) console.log(err);
	});
	const timestampData = client.readyAt;
	/* new data */
	latest = { 'timestamp': timestampData, 'uptime': '' };
	fs.readFile('./Miner-Bot.github.io/MinerBot/status.json', (err, data) => {
		if (err) throw err;
		/* Make the `data`, that is read, into a javascript object. */
		let jsonEdited;
		if (data.length > 0) {
			if (data[0].timestamp === timestampData) {
				const old = JSON.parse(data);
				/* set the new json text */
				const newlogs = [ old ];
				/* turn the json combination above, into json text/elements */
				jsonEdited = JSON.stringify(newlogs);
			} else if (data[0].timestamp != timestampData) {
				const old = JSON.parse(data);
				/* set the new json text */
				const newlogs = [ latest, old ];
				/* turn the json combination above, into json text/elements */
				jsonEdited = JSON.stringify(newlogs);
			}
		} else if (data.length <= 0) {
			const newlogs = [ latest ];
			jsonEdited = JSON.stringify(newlogs);
		}
		/* write the new json logs to the file */
		fs.writeFile('./Miner-Bot.github.io/MinerBot/status.json', jsonEdited, '', err => {
			if(err) console.log(err);
		});
		// fs.readFile('./Miner-Bot.github.io/MinerBot/chats/dev.json', (err, data2) => {
		// 	if (err) throw err;
		// 	const user = client.users.cache.get('444767734409068545');
		// 	const direction = 'out';
		// 	let index = -1;
		// 	let found = data2.find(function(item, i) {
		// 		if(item.name === direction) {
		// 			index = i;
		// 			return i;
		// 		}
		// 	});
		// 	if (index === 0) {
		// 		found = data2[index];
		// 	}
		// 	else {
		// 		// eslint-disable-next-line no-self-assign
		// 		found = found;
		// 	}
		// 	user.send(found.msg);
		// });
	});
});
process.on('exit', function() {
	process.stdout.resume();
	console.timeLog('uptime');
	latest = { 'timestamp': client.readyAt, 'uptime': client.uptime() };
	fs.writeFile('C:/Users/mjsey/MinerBot/MinerBot/uptime.json', JSON.stringify(latest), '', err => {
		if (err) console.log(err);
	});
});
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.login(token);