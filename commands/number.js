const fs = require('fs');
module.exports = {
	name: 'number',
	description: '||NOT FOR PUBLIC USE; CREATOR ONLY COMMAND|| N/A',
	execute(message) {
		if (message.author.id === '444767734409068545') {
			const user = message.author.id;
			fs.readFile('C:/Users/mjsey/OneDrive/MinerBot/Miner-Bot.github.io/MinerBot/Users.json', (err, data) => {
				if (err) throw err;
				const obj = JSON.parse(data);
				const filteredresult = obj.filter((x)=>x.userid === `${user}`);
				// eslint-disable-next-line no-unused-vars
				const numb = filteredresult[0].id;
				/* let y;
				for (y in obj) {
					obj.filter((x)=>x.userid === `${user}`);
					obj[y];
					return obj[y].id;
				}*/
				message.channel.send(`Your number's id: \`${numb}\``);
				/* OR message.channel.send(`Your number's id: \`${obj[0].id}\``); */
				fs.readFile('C:/Users/mjsey/OneDrive/MinerBot/Miner-Bot.github.io/MinerBot/numbers.json', (err, data2) => {
					if (err) throw err;
					const numberdata = JSON.parse(data2);
					const searchedfor = numberdata.filter((x)=>x.id === `${obj[0].id}`);
					message.channel.send(`${searchedfor[0].number}`);
					/* or message.channel.send(`${numberdata[0].number}`); */
				});
				/* above works, or this works too:
				filteredresult = JSON.parse(obj[0].id);
				message.channel.send(`${filteredresult}`);
				*/
				if (!obj === 1) {
					message.channel.send('Sorry, you don\'t have a number registered yet! \n Let\'s get you one!');
				}
				// const numberid = JSON.parse(number);
				/* const number = data.filter(function(item) {
				return item.userid === `${user}`;
			});*/
				// message.channel.send(`${number}`);
			/* fs.readFile('C:/Users/mjsey/OneDrive/MinerBot/Miner-Bot.github.io/MinerBot/numbers.json', (err, data2) => {
				if (err) throw err;
				JSON.parse(data2);
				message.channel.send(`${data2[`${obj}`]}`);
			});*/
			});
		}
		else if (!message.author.id === '444767734409068545') {
			message.channel.send('Sorry, this command is currently under maintenance');
		}
		// const id = args[0];
		// const commandName = id.shift().toLowerCase();
		// Command Aliases Checker
		//  const Number = UsersNumbers.get(data[i].id)
		// 	 || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(id));
		// if (message.author.id === '444767734409068545') {
		// 	const userinput = data_from_ajax;
		// 	const numbers = data_from_ajax;
		// 	userinput.send(`${numbers}`);
		// }
	},
};