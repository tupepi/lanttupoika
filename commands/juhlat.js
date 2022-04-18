const laske_deadline = require('../misc/functions').laske_deadline;
const luo_embed = require('../misc/functions').luo_embed;

module.exports = {
    name: 'juhlat',
    description: 'Antaa jäljellä olevan ajan tiedossa oleviin juhlapäiviin',
    async execute(message, args) {
        // Testataan että mennyt päivämäärä jätetään palauttamatta
        const joku = new Date(2022, 1, 17);

        // Tulevat tapahtumat:
        const rieha = new Date(2022, 2, 17, 14, 00, 00);
        const metro = new Date(2022, 3, 19, 14, 00, 00);
        const pikkulaskiainen = new Date(2022, 3, 7, 13, 00, 00);
        const vappuviikko = new Date(2022, 3, 25);
        const pvmt = [
            { nimi: 'joku', d: joku },
            { nimi: 'Rinne Rieha', d: rieha },
            { nimi: 'Jyväsmetro', d: metro },
            { nimi: 'Vappuviikko', d: vappuviikko },
            { nimi: 'Pikkulaskiainen', d: pikkulaskiainen },
        ];
        for (var i = 0; i < pvmt.length; i++) {
            const aikaa = laske_deadline(pvmt[i].d);
            const paivat = aikaa.paivat;
            const tunnit = aikaa.tunnit;
            const minuutit = aikaa.minuutit;
            const sekunnit = aikaa.sekunnit;
            if (
                paivat === 0 &&
                tunnit === 0 &&
                minuutit === 0 &&
                sekunnit === 0
            )
                continue;
            if (paivat < 1 || paivat === 1) {
                deadlineEmbed = luo_embed(
                    pvmt[i].nimi,
                    'Nyt ollaan lähellä! Aikaa tapahtumaan:',
                    [
                        { nimi: 'Tunteja', arvo: tunnit },
                        { nimi: 'Minuutteja', arvo: minuutit },
                        { nimi: 'Sekunteja', arvo: sekunnit },
                    ],
                    true
                );
            } else {
                deadlineEmbed = luo_embed(
                    pvmt[i].nimi,
                    'Päiviä on enää jäljellä:',
                    [{ nimi: 'Päiviä', arvo: paivat }],
                    true
                );
            }
            message.channel.send({ embeds: [deadlineEmbed] });
        }
    },
};
