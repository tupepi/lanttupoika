const ravintolat_t = [
    {
        nimi: 'piato',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1408&language=fi',
    },
    {
        nimi: 'maija',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1402&language=fi',
    },
    {
        nimi: 'tilia',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1413&language=fi',
    },
    {
        nimi: 'lozzi',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1401&language=fi',
    },
    {
        nimi: 'belvedere',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1404&language=fi',
    },
    {
        nimi: 'syke',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1405&language=fi',
    },
    {
        nimi: 'uno',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1414&language=fi',
    },
    {
        nimi: 'ylistö',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1403&language=fi',
    },
    {
        nimi: 'kvarkki',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=140301&language=fi',
    },
    {
        nimi: 'rentukka',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1416&language=fi',
    },
    {
        nimi: 'novelli',
        url: 'https://www.semma.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=1409&language=fi',
    },
    {
        nimi: 'taide',
        url: 'https://www.foodandco.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=0301&language=fi',
    },
    {
        nimi: 'fiilu',
        url: 'https://www.foodandco.fi/modules/MenuRss/MenuRss/CurrentDay?costNumber=3364&language=fi',
    },
];

let Parser = require('rss-parser');
const fs = require('fs');
module.exports = {
    name: 'ruokat',
    description: 'Komento antamaan KAIKKI opiskelijaravintojen ruokalistat.',
    async execute(message, args) {
        var palautus = '';
        for (let r of ravintolat_t) {
            let url = r.url;
            let parser = new Parser();
            ruokalista_teksti = await (async () => {
                let feed = await parser.parseURL(url);
                let ravintolan_nimi = r.nimi;
                let ruokalista = feed.items[0].content.replaceAll('<br>', '');
                if (ruokalista.length == 0) {
                    ruokalista = 'Ei ruokalistaa saatavilla';
                }
                let menu = ravintolan_nimi.toUpperCase() + '\n\n' + ruokalista;
                return menu;
            })();
            palautus += ruokalista_teksti;
            palautus += '\n---------------------------------\n\n';
        }

        fs.writeFile('ruokalista.txt', palautus, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            //file written successfully
        });
        await message.channel.send({ files: ['./ruokalista.txt'] });
    },
};
