const { SlashCommandBuilder } = require('@discordjs/builders');
  const { PermissionsBitField, GuildMember } = require('discord.js');
  const { setTimeout } = require('timers/promises');

  module.exports = {
  	data: new SlashCommandBuilder()
  		.setName('info')
  		.setDescription('Finner info om en bruker.')
  		.addUserOption(option =>
  			option.setName('bruker')
  				.setDescription('Brukeren du vil kicke.')
  				.setRequired(true)),
  	async execute(interaction) {
  		const user = interaction.options.getUser('bruker');
  			await interaction.reply(`Finner info om bruker ${user.username}`);
			await interaction.followUp(`Brukeren har id ${user.id}`);
			await user.send(`Hei ${user.username}, du ble nettopp sjekket av ${interaction.user.username}!`);
  	},
  };
