module.exports = {
    name: 'ping',
    description: "Jos botti toimii vastaa 'pong'",
    execute(message, args) {
        message.channel.send('pong!');
    },
};
