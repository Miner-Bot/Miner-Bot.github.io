const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reload')
		.setDescription('Reloads a command.')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('The command to reload.')
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command', true).toLowerCase();
		const command = interaction.client.commands.get(commandName);

		if (!command) {
			return interaction.reply(`There is no command with name \`${commandName}\`!`);
		}

        /*
          To build the correct file path, you will need the file name. You can use command.data.name for doing that.

          In theory, all there is to do is delete the previous command from client.commands and require the file 
        again. In practice, you cannot do this easily as require() caches the file. If you were to require it 
        again, you would load the previously cached file without any changes. You first need to delete the file 
        from require.cache, and only then should you require and set the command file to client.commands:
        */

        delete require.cache[require.resolve(`./${command.data.name}.js`)];

        try {
        	interaction.client.commands.delete(command.data.name);
        	const newCommand = require(`./${command.data.name}.js`);
        	interaction.client.commands.set(newCommand.data.name, newCommand);
        	await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
        } catch (error) {
        	console.error(error);
        	await interaction.reply(`There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``);
        }
	},
};