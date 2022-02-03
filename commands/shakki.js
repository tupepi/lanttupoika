module.exports = {
    name: 'shakki',
    description: 'Luo shakkimatsin generoimislinkin :TODO: suoraan matsiin',
    execute(message, args) {
        const linkki = 'https://lichess.org/setup/friend';
        message.channel.send(linkki);
    },
};
