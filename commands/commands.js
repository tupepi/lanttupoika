const help = require('./help.js');
module.exports = {
    name: 'commands',
    description: help.description,
    execute(message, args) {
        help.execute(message, args);
    },
};
