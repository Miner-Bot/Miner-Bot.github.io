const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.cooldowns = new Collection();

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
process.on('beforeExit', () => {
	const uptime_path = './uptime.json';
	const time = new Date();
	const fileContents = fs.readFileSync(uptime_path, 'utf-8');
	const existingUptimes = JSON.parse(fileContents);
	if (!existingUptimes[time.toLocaleDateString()]) {
		existingUptimes[time.toLocaleDateString()] = [{ 'OFF': time.toLocaleTimeString() }];
		fs.writeFileSync('./uptime.json', JSON.stringify(existingUptimes));
	} else if (existingUptimes[time.toLocaleDateString()]) {
		const todayObj = existingUptimes[time.toLocaleDateString()];
		const LastIndex = todayObj.length;
		todayObj[LastIndex] = { 'OFF': time.toLocaleTimeString() };
		fs.writeFileSync('./uptime.json', JSON.stringify(existingUptimes));
	}
	const _2upd8path = '/Miner-Bot.github.io/MinerBot/commands';
	const oldCmds = fs.readdirSync(_2upd8path);

	const up2d8Path = '/commands/utility';
	const newCmdNames = fs.readdirSync(up2d8Path);

	let oldcmd, newlyReadCommand;
	if (newCmdNames != oldCmds) {
		for (oldcmd of oldCmds) {
			if (fs.existsSync(`${up2d8Path}/${oldcmd}`)) {
				newlyReadCommand = fs.readFileSync(`${up2d8Path}/${oldcmd}`, 'utf-8');
				fs.writeFileSync(`${_2upd8path}/${oldcmd}`, newlyReadCommand, 'utf-8');
			} else if (!fs.existsSync(`${up2d8Path}/${oldcmd}`)) {
				fs.rmSync(`${_2upd8path}/${oldcmd}`);
			}
		}
	}
});

// Log in to Discord with your client's token
client.login(token);