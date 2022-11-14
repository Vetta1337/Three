const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField, GuildMember } = require('discord.js');
const { setTimeout } = require('timers/promises');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clears messages in a channel.')
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of messages to clear.')
                .setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');
        if (interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            await interaction.channel.bulkDelete(amount);
            await interaction.reply(`Clearing ${amount} messages...`);
            await setTimeout(1000); 
            await interaction.editReply('Cleared!');
        } else {
            await interaction.reply('You do not have permission to clear messages!');
        }
    },
};
