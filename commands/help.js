const fs = require('fs');
module.exports = {
    name: 'help',
    description: 'Listaa kaikki komennot ja niiden kuvaukset',
    execute(message, args) {
        var komento = '';

        if (args.length > 0) {
            komento = args[0];
        }

        const commandFiles = fs
            .readdirSync('./commands')
            .filter(
                (file) => file.endsWith(`${komento}.js`) && file != 'help.js'
            );

        palautus = '';
        if (commandFiles.length == 0) {
            palautus = 'Komentoa ei löydy. Kokeile: "..help"';
        }

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            const nimi = command.name.toUpperCase();
            const desc = command.description;
            palautus += `**${nimi}**\n${desc}\n-------------------------------------------------\n`;
        }
        message.channel.send(palautus);
    },
};
