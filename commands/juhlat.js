const { MessageEmbed } = require('discord.js');
const laske_deadline = require('../misc/functions').laske_deadline;
module.exports = {
    name: 'juhlat',
    description: 'Antaa jäljellä olevan ajan tiedossa oleviin juhlapäiviin',
    async execute(message, args) {
        const viesti = () => {
            // Testataan että mennyt päivämäärä jätetään palauttamatta
            const joku = new Date(2022, 1, 17);
            const rieha = new Date(2022, 2, 17);
            const metro = new Date(2022, 3, 21);
            const vappuviikko = new Date(2022, 3, 30);
            const pvmt = [
                { nimi: 'joku', d: joku },
                { nimi: 'Rinne Rieha', d: rieha },
                { nimi: 'Jyväsmetro', d: metro },
                { nimi: 'Vappuviikko', d: vappuviikko },
            ];
            for (var i = 0; i < pvmt.length; i++) {
                const aikaa = laske_deadline(pvmt[i].d);
                const paivat = aikaa.paivat;
                const tunnit = aikaa.tunnit;
                const minuutit = aikaa.minuutit;
                const sekunnit = aikaa.sekunnit;
                if (
                    paivat == 0 &&
                    tunnit == 0 &&
                    minuutit == 0 &&
                    sekunnit == 0
                )
                    continue;

                const deadlineEmbed = new MessageEmbed(message.embeds[0])
                    .setColor('#000000')
                    .setTitle(pvmt[i].nimi)
                    .setDescription('Aikaa on enää jäljellä:')
                    .addFields(
                        {
                            name: 'Päiviä',
                            value: paivat.toString(),
                            inline: true,
                        },
                        {
                            name: 'Tunteja',
                            value: tunnit.toString(),
                            inline: true,
                        },
                        {
                            name: 'Minuutteja',
                            value: minuutit.toString(),
                            inline: true,
                        },
                        {
                            name: 'Sekunteja',
                            value: sekunnit.toString(),
                            inline: true,
                        }
                    );
                message.channel.send({ embeds: [deadlineEmbed] });
            }
        };

        viesti();
    },
};
