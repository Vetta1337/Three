const { SlashCommandBuilder } = require('@discordjs/builders');

  module.exports = {
  	data: new SlashCommandBuilder()
  		.setName('id')
  		.setDescription('Finner ID fra en bruker.')
  		.addUserOption(option =>
  			option.setName('bruker')
  				.setDescription('Brukeren du ønsker ID fra.')
  				.setRequired(true)),
  	async execute(interaction) {
  		const user = interaction.options.getUser('bruker');
  			await interaction.reply(`Finner info om bruker ${user.username}`);
			await interaction.followUp(`Brukeren har id ${user.id}`);
			await user.send(`Hei ${user.username}, du ble nettopp sjekket av ${interaction.user.username}!`);

  	},
  };
