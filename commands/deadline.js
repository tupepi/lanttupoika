module.exports = {
  name: "deadline",
  description:
    "Palauttaa millisekunnilleen jäljellä olevan ajan, ennen tuomionpäivää",
  execute(message, args) {
    let nyt = Date.now();
    let palautus = new Date(2022, 4, 30, 23, 59, 59, 999);
    lopputulos = palautus - nyt;
    let paivat = Math.floor(lopputulos / 86400000);
    let tunnit = Math.floor((lopputulos - paivat * 86400000) / 3600000);
    let minuutit = Math.floor(
      (lopputulos - (paivat * 86400000 + tunnit * 3600000)) / 60000
    );
    let sekunnit = Math.floor(
      (lopputulos - (paivat * 86400000 + tunnit * 3600000 + minuutit * 60000)) /
        1000
    );
    let millisekunnit = Math.floor(
      lopputulos -
        paivat * 86400000 -
        tunnit * 3600000 -
        minuutit * 60000 -
        sekunnit * 1000
    );
    message.channel.send(
      `Päivät: ${paivat},\nTunnit: ${tunnit},\nMinuutit: ${minuutit},\nSekuntit: ${sekunnit},\nMillisekuntit: ${millisekunnit}.`
    );
  },
};
