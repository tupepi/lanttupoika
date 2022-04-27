const laske_deadline = require('../misc/functions').laske_deadline;
const luo_embed = require('../misc/functions').luo_embed;

module.exports = {
    name: 'juhlat',
    description: 'Antaa jäljellä olevan ajan tiedossa oleviin juhlapäiviin',
    async execute(message, args) {
        // Testataan että mennyt päivämäärä jätetään palauttamatta
        const joku = new Date(2022, 1, 17);
        const rieha = new Date(2022, 2, 17);
        const metro = new Date(2022, 3, 21);
        //const vappuviikko = new Date(2022, 3, 30);
        const rastikilpailu = new Date(2022, 3, 27);
        const kolmiot = new Date(2022, 3, 28);
        const tuparit = new Date(2022, 3, 29);
        const ilokividancenight = new Date(2022, 3, 30);
        const harju = new Date (2022, 4, 1 );
        const pvmt = [
            { nimi: 'joku', d: joku },
            { nimi: 'Rinne Rieha', d: rieha },
            { nimi: 'Jyväsmetro', d: metro },
            //{ nimi: 'Vappuviikko', d: vappuviikko },
            { nimi: 'rastikilpailu', d: rastikilpailu },
            { nimi: 'kolmiot', d: kolmiot },
            { nimi: 'tuparit', d: tuparit },
            { nimi: 'ilokividancenight', d: ilokividancenight },
            { nimi: 'harju', d: harju },
        ];
        for (var i = 0; i < pvmt.length; i++) {
            const aikaa = laske_deadline(pvmt[i].d);
            const paivat = aikaa.paivat;
            const tunnit = aikaa.tunnit;
            const minuutit = aikaa.minuutit;
            const sekunnit = aikaa.sekunnit;
            if (paivat == 0 && tunnit == 0 && minuutit == 0 && sekunnit == 0)
                continue;

            const deadlineEmbed = luo_embed(
                pvmt[i].nimi,
                'Aikaa on enää jäljellä:',
                [
                    { nimi: 'Päiviä', arvo: paivat },
                    { nimi: 'Tunteja', arvo: tunnit },
                    { nimi: 'Minuutteja', arvo: minuutit },
                    { nimi: 'Sekunteja', arvo: sekunnit },
                ],
                true
            );
            message.channel.send({ embeds: [deadlineEmbed] });
        }
    },
};
