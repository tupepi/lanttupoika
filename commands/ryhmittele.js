module.exports = {
    name: 'ryhmittele',
    description:
        'Laittaa annetut nimet satunnaisiin ryhmiin. Ekana parametrinä ryhmien määrä\n' +
        'Esim. ..ryhmittele 3 Konsta Joona Kissa Koira Tuukka Valtteri Lammas\n' +
        '=>Joona Koira Tuukka\n' +
        'Valtteri Konsta\n' +
        'Lammas Kissa\n',
    execute(message, args) {
        if (args.length < 1) {
            message.channel.send(
                'Anna ryhmitettävät. Esim: ".ryhmittele 3 Kissa Koira Kala"'
            );
            return;
        }
        lkm = Number(args.shift());
        lkm = isNaN(lkm) ? 1 : lkm;

        //  Random-järkkään nimet, lähde: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        //---------------------------------------------------------------------------
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
        //-------------------------------------------------------------------------
        let koko2 = Math.floor(array.length / lkm);
        let tasan = array.length % lkm;
        let koko1 = tasan ? koko2 + 1 : koko2;
        palautus = '';
        for (let i = 0; i < array.length; i += koko1) {
            if (tasan-- <= 0) koko1 = koko2;
            joukkue = array.slice(i, i + koko1);
            palautus += joukkue.join('\n');
            palautus += '\n\n';
        }
        message.channel.send(palautus);
    },
};
