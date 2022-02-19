const { luo_embed } = require('../misc/functions');

const laske_deadline = require('../misc/functions').laske_deadline;
module.exports = {
    name: 'deadline',
    description:
        'Palauttaa millisekunnilleen jäljellä olevan ajan, ennen tuomionpäivää',
    execute(message, args) {
        let palautus = new Date(2022, 3, 30, 23, 59, 59, 999);
        const aikaa = laske_deadline(palautus);
        let paivat = aikaa.paivat;
        let tunnit = aikaa.tunnit;
        let minuutit = aikaa.minuutit;
        let sekunnit = aikaa.sekunnit;
        let millisekunnit = aikaa.millisekunnit;

        //   message.channel.send(
        //     `Päivät: ${paivat},\nTunnit: ${tunnit},\nMinuutit: ${minuutit},\nSekuntit: ${sekunnit},\nMillisekuntit: ${millisekunnit}.`
        //);

        embed = luo_embed('Deadline', '', [
            { nimi: 'Päivät', arvo: paivat },
            { nimi: 'Tunnit', arvo: tunnit },
            { nimi: 'Minuutit', arvo: minuutit },
            { nimi: 'Sekuntit', arvo: sekunnit },
            { nimi: 'Millisekuntit', arvo: millisekunnit },
        ]);
        message.channel.send({ embeds: [embed] });
    },
};
