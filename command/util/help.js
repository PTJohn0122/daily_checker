const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('list all command options'),
    async execute(interaction) {
        await interaction.reply('Please use the following command: ');
    },
};