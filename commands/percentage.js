const { SlashCommandBuilder } = require('@discordjs/builders');
  const { PermissionsBitField, GuildMember } = require('discord.js');
  const { setTimeout } = require('timers/promises');

  module.exports = {
  	data: new SlashCommandBuilder()
  		.setName('gay')
  		.setDescription('Sjekker kode.')
  		.addUserOption(option =>
  			option.setName('bruker')
  				.setDescription('Brukeren du vil sjekke.')
  				.setRequired(true)),
  	async execute(interaction) {
  		const user = interaction.options.getUser('bruker');
        const percentage = Math.floor(Math.random() * 100 + 1);
        // om bruker id er 257107960331763716, set percentage til 0
        if (user.id === '257107960331763716') {
            await interaction.reply(`${user.username} er 0% gay.`);
        } else { // ellers, set percentage til en tilfeldig verdi
            if (percentage > 50) {
                await interaction.reply(`${user.username} ganske veldig gay, hele ${percentage}% gay!`);
            } else {
                await interaction.reply(`${user.username} ganske lite gay, men fortsatt ${percentage}% gay!`);
            }
            }
  	},
  };
