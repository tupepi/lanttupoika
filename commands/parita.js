module.exports = {
    name: 'parita',
    description:
        'Laittaa annetut nimet arvotuiksi pariksi.' +
        'Esim. ..parita Konsta Joona Kissa Koira Tuukka Valtteri Lammas\n' +
        '=>Joona Koira\n' +
        'Valtteri Tuukka\n' +
        'Konsta Kissa\n' +
        'Lammas\n',
    execute(message, args) {
        if (args.length === 0) {
            message.channel.send(
                'Anna paritettavat. Esim: ".parita Kissa Koira"'
            );
            return;
        }
        //  Random-järkkään nimet, lähde: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        const array = args;
        let currentIndex = array.length,
            randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        let palautus = '';
        let i = 1;
        array.forEach((nimi) => {
            let merkki = i % 2 ? '\n' : '\n\n';
            palautus += nimi += merkki;
            i++;
        });
        message.channel.send(palautus);
    },
};
