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

module.exports = {
    name: 'ruoka',
    description: 'Komento antamaan tietyn opiskelijaravintolan ruokalista.',
    execute(message, args) {
        if (args.length < 1) {
            message.channel.send('Yksi ravintola kerrallaan');
            return;
        }
        let ravintola = args[0].toLowerCase();
        let url;
        for (let i = 0; i < ravintolat_t.length; i++) {
            if (ravintolat_t[i].nimi === ravintola) {
                url = ravintolat_t[i].url;
            }
        }
        if (url == undefined) {
            message.channel.send('Nyt ei pysty');
            return;
        }

        let parser = new Parser();
        (async () => {
            try {
                let feed = await parser.parseURL(url);
                let ravintolan_nimi = feed.title;
                let ruokalista = feed.items[0].content.replaceAll('<br>', '');
                if (ruokalista.length == 0) {
                    ruokalista = 'Ei ruokalistaa saatavilla';
                }
                message.channel.send(
                    '**' + ravintolan_nimi + '**' + '\n\n' + ruokalista
                );
            } 
            catch (err) {
                message.channel.send(
                    err
                );
            }

            
        })();
    },
};
