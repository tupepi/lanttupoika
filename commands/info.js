const help = require('./help.js');
module.exports = {
    name: 'info',
    description: help.description,
    execute(message, args) {
        help.execute(message, args);
    },
};
