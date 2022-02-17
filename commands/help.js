const fs = require('fs');
const { MessageEmbed } = require('discord.js');
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

        const embed = new MessageEmbed(message.embeds[0])
            .setColor('#000000')
            .setTitle('Komennot');

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            const nimi = command.name.toUpperCase();
            const desc = command.description;
            embed.addFields({
                name: nimi,
                value: desc,
            });
        }
        message.channel.send({ embeds: [embed] });
    },
};
