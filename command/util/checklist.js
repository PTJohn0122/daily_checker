const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checklist')
        .setDescription('list all item in checklist'),
    async execute(interaction) {
        await interaction.reply('Your checklist includes: ');
    },
};