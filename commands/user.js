const { SlashCommandBuilder } = require('discord.js');
const { setTimeout } = require('timers/promises');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bruker')
		.setDescription('Informasjon rundt bruker.'),
	async execute(interaction) {
		await interaction.reply(`Kommandoen kjørt av ${interaction.user.username}, med id ${interaction.user.id}`);
		await setTimeout(1000);
		await interaction.editReply(`Som joinet ${interaction.member.joinedAt}.`);
		console.log(interaction.member.joinedAt);
		await setTimeout(1000);
		await interaction.followUp(`Og har rollen ${interaction.member.roles.cache.first().name}.`);
	},
};