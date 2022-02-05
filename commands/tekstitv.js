require('dotenv').config();
const key = process.env.YLE_APP_KEY;
const id = process.env.YLE_APP_ID;
const request = require('request');
module.exports = {
    name: 'tekstitv',
    description:
        'Hakee tekstitv:n sivun. Neuvoo virheellisellä syötteellö hakemaan sivun 199 eli hakemiston',
    execute(message, args) {
        var sivuNro = 199;
        if (args.length > 0) {
            sivuNro = parseInt(args[0]);
            if (isNaN(sivuNro) || sivuNro > 899 || sivuNro < 100) {
                message.channel.send(
                    '```' +
                        'Sivu ei saatavilla. Yritä hakea: "..tekstitv 199" ' +
                        '```'
                );
                return;
            }
        }
        const sivu = `https://external.api.yle.fi/v1/teletext/pages/${sivuNro}.json?app_id=${id}&app_key=${key}`;

        request(sivu, function (error, response, body) {
            if (response.statusCode >= 400 && response.statusCode < 500) {
                message.channel.send(
                    '```' +
                        'Sivu ei saatavilla. Yritä hakea: "..tekstitv 199" ' +
                        '```'
                );
                return;
            }
            var palautus = '';
            const subpage = JSON.parse(body).teletext.page.subpage;
            for (s of subpage) {
                var content = s.content;

                for (c of content) {
                    if (c.type == 'text') {
                        const line = c.line.filter(
                            (x) => typeof x.Text !== 'undefined'
                        );
                        for (l of line) {
                            palautus += l.Text.trim() + '\n';
                        }
                    }
                }
            }

            var x = 0;
            while (true) {
                var viesti = palautus.slice(x, x + 1500);
                if (!viesti) return;
                message.channel.send('```' + viesti + '```');
                x += 1500;
            }
        });
    },
};
