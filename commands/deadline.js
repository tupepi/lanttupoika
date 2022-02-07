module.exports = {
  name: "deadline",
  description:
    "Palauttaa millisekunnilleen jäljellä olevan ajan, ennen tuomionpäivää",
  execute(message, args) {
    let nyt = Date.now();
    let palautus = new Date(2022, 4, 30, 23, 59, 59, 999);
    lopputulos = palautus - nyt;
    let tunnit = Math.floor(lopputulos / 3600000);
    let minuutit = Math.floor((lopputulos - tunnit * 3600000) / 60000);
    let sekunnit = Math.floor(
      (lopputulos - (tunnit * 3600000 + minuutit * 60000)) / 1000
    );
    let millisekunnit = Math.floor(
      lopputulos - tunnit * 3600000 - minuutit * 60000 - sekunnit * 1000
    );
    message.channel.send(
      `Tunteja: ${tunnit}, Minuutteja: ${minuutit}, Sekunteja: ${sekunnit}, Millisekunteja:${millisekunnit}. `
    );
  },
};
