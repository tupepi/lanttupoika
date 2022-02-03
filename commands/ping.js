module.exports = {
    name: 'ping',
    description: 'Eka testikomento',
    execute(message, args) {
        message.channel.send('pong!');
    },
};
