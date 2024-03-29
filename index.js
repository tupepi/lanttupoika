const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({ intents: [  
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
] });

client.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync('./commands/')
    .filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ready!');
    client.channels.cache
        .get('938721090111418458')
        .send('Muutokset ladattu, ready to rock');
    client.user.setActivity('for ..help', { type: 'WATCHING' });
});

// Viestin prefix, joihin botti reagoi
const prefix = '..';
// "message" on deprekoitu, oikea tapa kai "messageCreate"
client.on('messageCreate', (message) => {
    // Viestin pitää alkaa prefixillä, ja viestin lähettäjä ei saa olla botti
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //  args esim. jos viesti on "..kissa koira kala" => ['kissa','koira','kala']
    const args = message.content.slice(prefix.length).split(/ +/);
    // ensimmäinen argsista esim. ['KiSSA', 'Koira' ] => 'kissa'
    // Tyhjästä listasta tulee undefined
    const command_given = args.shift().toLowerCase();
    // haetaan komentoa, jos ei löydy => undefined
    const command_to_execute = client.commands.get(command_given);
    // Jos komento ei ole undefined, suoritetaan
    if (typeof command_to_execute !== 'undefined') {
        command_to_execute.execute(message, args);
    }
});

// dotenv avulla luetaan botin TOKEN ympäristömuuttujasta tai tiedostosta ".env"
require('dotenv').config();
const token = process.env.TOKEN;
client.login(token);
