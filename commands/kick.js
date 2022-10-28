const { SlashCommandBuilder } = require('@discordjs/builders');
  const { PermissionsBitField, GuildMember } = require('discord.js');
  const { setTimeout } = require('timers/promises');

  module.exports = {
  	data: new SlashCommandBuilder()
  		.setName('kick')
  		.setDescription('Kicker en bruker.')
  		.addUserOption(option =>
  			option.setName('bruker')
  				.setDescription('Brukeren du vil kicke.')
  				.setRequired(true))
  		.addStringOption(option =>
  			option.setName('grunn')
  				.setDescription('Hvorfor du vil kicke brukeren.')
  				.setRequired(true)),
  	async execute(interaction) {
  		const user = interaction.options.getUser('bruker');
  		const reason = interaction.options.getString('grunn');
  		if (interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
  			await interaction.reply(`Kicker ${user.username} for ${reason}`);
			await interaction.guild.members.kick(user, reason);
  			await setTimeout(1000);
  			await interaction.editReply('Kicket!');
  		} else {
  			await interaction.reply('Du har ikke lov til å kicke folk!');
  		}
  	},
  };
