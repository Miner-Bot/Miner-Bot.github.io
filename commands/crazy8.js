const { ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType, SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('crazy8')
		.setDescription('Play Crazy 8 with 3-8 other members'),
	async execute(interaction) {
        const left = new ButtonBuilder()
			.setCustomId('left')
			.setStyle(ButtonStyle.Secondary)
            .setEmoji('⬅️');
        const right = new ButtonBuilder()
			.setCustomId('right')
			.setStyle(ButtonStyle.Secondary)
            .setEmoji('➡️');
        const up = new ButtonBuilder()
			.setCustomId('up')
			.setStyle(ButtonStyle.Secondary)
            .setEmoji('⬆️');
        const down = new ButtonBuilder()
			.setCustomId('down')
			.setStyle(ButtonStyle.Secondary)
            .setEmoji('⬇️');
        
        const row = new ActionRowBuilder()
	        .addComponents(left,right,up,down);
        
        class Player {
            constructor(rows, grid) {
                if (rows) {
                    this.rows = rows;
                }
                if (grid) {
                    this.grid = grid;
                } else if (!grid) {
                    this.createGrid = (dim) => { let grid = new Array(dim*dim);grid.fill('0');this.grid = grid; }
                    this.createGrid(this.rows);
                }
                if (this.grid) {
                    this.coord = Math.floor(Math.random() * (this.grid.length));
                    this.update = (New, Old) => { if ((!New && !Old) && this.coord) {this.grid[this.coord] = '1';return this.grid;} else if (Old) {this.grid[Old] = '0';this.grid[New] = '1';return this.grid;} }
                    this.update();
                }
            }
            move(direction) {
                let o_coord = this.coord;
                switch(direction) {
                    case 'up':
                        this.coord -= this.rows;
                        break;
                    case 'down':
                        this.coord += this.rows;
                        break;
                    case 'left':
                        this.coord -= 1;
                        break;
                    case 'right':
                        this.coord += 1;
                        break;
                    case undefined:
                        this.coord = this.coord;
                        break;
                }
                return this.update(this.coord, o_coord);
            }
            map() {
                let gameMap = '';
                let lineBreaks = [];
                let LB = this.grid.length/this.rows;
                for (let e = 0;e < LB;e++) {
                    if (e != 0) {
                        lineBreaks[e] = Number(lineBreaks[e-1]) + LB;
                    } else if (e == 0) {
                        lineBreaks[e] = LB-1;
                    }
                }
                let content = ['🟦','⬜','⬛'];
                for (let i = 0;i < this.grid.length;i++) {
                    if (!lineBreaks.includes(i)) {
                        if (content[this.grid[i]]) {
                            gameMap += content[this.grid[i]];
                        }
                    } else if (lineBreaks.includes(i)) {
                        if (content[this.grid[i]]) {
                            gameMap += content[this.grid[i]] + '\n';
                        }
                    }
                }
                return gameMap;
            }
        }
        const _ROWS = 13;
        const P = new Player(_ROWS);
        const response = await interaction.reply({
            content: `${P.map()}`,
            components: [row]
        });

        const confirmation = response.createMessageComponentCollector({ componentType: ComponentType.Button, time: 60_000 })
        
        confirmation.on('collect', async i => {
            const selection = i.customId;
            if (selection) {
                P.move(selection);
            }
            await i.update({ content: `${P.map()}`, components: [row] });
        });
    },
};