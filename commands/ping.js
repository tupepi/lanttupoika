module.exports = {
  name: "ping",
  description: "Eka testikomento",
  execute(message, args) {
    message.channel.send("ping pong ping pong Joona toinen yritys!");
  },
};
