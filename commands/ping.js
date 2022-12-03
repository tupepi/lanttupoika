module.exports = {
    name: 'ping',
    description: "Jos botti toimii vastaa 'pong'",
    execute(message, args) {
        console.log("Huhuu");
        message.channel.send('pong!');
    },
};
