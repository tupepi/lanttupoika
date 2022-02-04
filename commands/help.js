const fs = require('fs');
module.exports = {
    name: 'help',
    description: 'Listaa kaikki komennot ja niiden kuvaukset',
    execute(message, args) {
        const commandFiles = fs
            .readdirSync('./commands')
            .filter(
                (file) => file.endsWith('.js') && !file.endsWith('help.js')
            );
        palautus = '';
        for (const file of commandFiles) {
            const command = require(`./${file}`);
            const nimi = command.name.toUpperCase();
            const desc = command.description;
            palautus += `**${nimi}**\n${desc}\n-------------------------------------------------\n`;
        }
        message.channel.send(palautus);
    },
};
