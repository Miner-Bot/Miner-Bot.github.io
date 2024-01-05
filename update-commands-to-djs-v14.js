const fs = require('fs');
const _commands = fs.readdirSync('./old_commands');
const commandNames = [];
let b;
for (let a = 0; a < _commands.length; a++) {
	if (_commands[a].endsWith('.js')) {
		if (a == 0) {
			b = 0;
		} else if (a > 0) {
			b += 1;
		}
		commandNames[`${b}`] = _commands[a].slice(0, _commands[a].indexOf('.'));
	}
}
function cmdIndex(name) {
	return commandNames.find((cmd) => {return cmd == name;});
}

update();
console.log(_commands, fs.existsSync(`./commands/${commandNames[1]}.js`), commandNames, cmdIndex('announcement'));
function update() {
	if (_commands != undefined) {
		for (let a = 0; a < _commands.length; a++) {
			console.log(_commands[a]);
		}
	}
}
let OutStr = '';
for (let a = 0;a < commandNames.length;a++) {
	const data = "const { SlashCommandBuilder } = require('discord.js');" + '\n' + `${fs.readFileSync(`./old_commands/${commandNames[a]}.js`, 'utf8').split('module.exports = {',1)}` + '\n' + 'module.exports = {' + '\n' + '\tdata: new SlashCommandBuilder()' + '\n' + '\t\t.setName(' + `${fs.readFileSync(`./old_commands/${commandNames[a]}.js`, 'utf8').split('name: ', 2)[1].split("',")[0]}` + "')" + '\n' + '\t\t.setDescription(' + `${fs.readFileSync(`./old_commands/${commandNames[a]}.js`, 'utf8').split('description: ', 2)[1].split("',")[0]}` + "')," + '\n' + '\tasync execute(interaction' + `${fs.readFileSync(`./old_commands/${commandNames[a]}.js`, 'utf8').split('execute(message', 2)[1]}`;
	// data will be written to ... newpath
    const newPath = `./commands/utility/${commandNames[a]}.js`;
    const newFileContents = fs.readFileSync(newPath, 'utf8');
    
    const oldPath = `./old_commands/${commandNames[a]}.js`;
	const old_command_file = fs.readFileSync(oldPath, 'utf8');
	if (fs.existsSync(oldPath)) {
		// fs.writeFileSync(newPath, data);
		OutStr = `\nThe /commands/${commandNames[a]}.js file does NOT exist yet...\n`;
		if ((!newFileContents) || (newFileContents != data)) {
			OutStr += ' FILE NOT YET UPDATED... UPDATING NOW...';
            updateFile(data, newPath);
		} else if (newFileContents && ((newFileContents == data) && (data != old_command_file))) {
			OutStr += ' This file has already been updated!';
		}
		console.log(OutStr);
	} else if (fs.existsSync(newPath)) {
		OutStr = `\nThe /commands/${commandNames[a]}.js file exists already!\n`;
	}
}
function updateFile(data, newPath) {
	fs.writeFileSync(newPath, data, 'utf8');
	return OutStr += `\n  This file [${newPath}] has been rewritten, to match the latest GitHub file version! ${Date.now()}\n`;
}
// This file allows for the files that are in MinerBot's commands folder (the command files which the bot directly reads from), to be rewritten to match any modifications that may have been made to the command files located in the 'miner-bot.github.io' repository (in the '/commands/' folder).