var requireDir = require('require-dir')
var commands = requireDir('../commands')

function parseCommand(msg) {
    var args = msg.content.split(' ')
    var command = args[0].substring(1)
    args.shift()
    commands[command](msg, args)
}

module.exports = parseCommand