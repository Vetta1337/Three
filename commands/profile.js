const { SlashCommandBuilder } = require('@discordjs/builders');

  module.exports = {
  	data: new SlashCommandBuilder()
  		.setName('bilder')
  		.setDescription('Finner bilder fra en bruker.')
  		.addUserOption(option =>
  			option.setName('bruker')
  				.setDescription('Brukeren du ønsker bilder fra.')
  				.setRequired(true)),
  	async execute(interaction) {
  		const user = interaction.options.getUser('bruker');
  			await interaction.reply(`Finner bildene til bruker ${user.username}`);
            await interaction.followUp({ files: [user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096})] });
			await user.send(`Hei ${user.username}, du ble nettopp sjekket av ${interaction.user.username}!`);

  	},
  };
