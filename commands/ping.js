const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Svarer med pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};