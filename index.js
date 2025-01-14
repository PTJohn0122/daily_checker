require('dotenv').config(); // Initializes dotenv
const { Client, GatewayIntentBits } = require('discord.js'); // Imports discord.js

// Create a new client instance with the necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Required to access basic guild-related events
        GatewayIntentBits.GuildMessages, // If you want to listen to messages
        GatewayIntentBits.MessageContent // Needed if you want to access message content
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log("Received message");
    if (msg.content === 'help') {
        msg.reply('This is Daily Checker, your reminder bot!');
    }
});


// This line must be at the very end
client.login(process.env.CLIENT_TOKEN); // Signs the bot in with the token
