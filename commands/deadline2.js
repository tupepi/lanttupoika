const { MessageEmbed } = require('discord.js');
const laske_deadline = require('../misc/functions').laske_deadline;
module.exports = {
    name: 'deadline2',
    description:
        'Ikuinen looppi joka päivittää noin viiden sekunnin välein DEADLINE:N',
    async execute(message, args) {
        if (args.length > 0) return;
        message.delete();
        const viesti = () => {
            const palautus = new Date(2022, 4, 30, 23, 59, 59, 999);
            const aikaa = laske_deadline(palautus);
            const paivat = aikaa.paivat;
            const tunnit = aikaa.tunnit;
            const minuutit = aikaa.minuutit;
            const sekunnit = aikaa.sekunnit;
            const deadlineEmbed = new MessageEmbed(message.embeds[0])
                .setColor('#000000')
                .setTitle('Deadline')
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
            message.channel.send({ embeds: [deadlineEmbed] }).then((msg) => {
                setTimeout(() => {
                    msg.delete();
                    viesti();
                }, 5000);
            });
        };
        viesti();
    },
};
