require('dotenv').config();
const key = process.env.YLE_APP_KEY;
const id = process.env.YLE_APP_ID;
const request = require('request');
module.exports = {
    name: 'uutinen',
    description: 'Kertoo tuoreimman kotimaan ja ulkomaan uutisen',
    execute(message, args) {
        const kotimaa_uutinen = `https://external.api.yle.fi/v1/teletext/pages/103.json?app_id=${id}&app_key=${key}`;
        const ulkomaa_uutinen = `https://external.api.yle.fi/v1/teletext/pages/131.json?app_id=${id}&app_key=${key}`;
        const uutiset = [kotimaa_uutinen, ulkomaa_uutinen];
        for (u of uutiset) {
            request(u, function (error, response, body) {
                const subpage = JSON.parse(body).teletext.page.subpage;
                for (s of subpage) {
                    var content = s.content;

                    for (c of content) {
                        if (c.type == 'text') {
                            const line = c.line.filter(
                                (x) => typeof x.Text !== 'undefined'
                            );
                            var palautus = `**${line.shift().Text.trim()}**\n`;
                            palautus += `${line
                                .shift()
                                .Text.toUpperCase()
                                .trim()}\n`;
                            for (l of line) {
                                palautus += l.Text.trim() + ' ';
                            }
                        }
                    }
                }
                message.channel.send(palautus);
            });
        }
    },
};
