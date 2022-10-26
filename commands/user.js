const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bruker')
		.setDescription('Informasjon rundt bruker.'),
	async execute(interaction) {
		await interaction.reply(`Kommandoen kjørt av ${interaction.user.username}, som joinet ${interaction.member.joinedAt}.`);
	},
};