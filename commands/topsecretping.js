const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secretping')
		.setDescription('Svarer med pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
	},
};