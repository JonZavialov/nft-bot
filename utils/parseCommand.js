async function parseCommand(commands, msg) {
    var args = msg.content.split(' ')
    var command = args[0].substring(1).toLowerCase()
    args.shift()
    let method = commands[`command${command.charAt(0).toUpperCase() + command.slice(1)}`]()
    method.run(msg, args)
}

module.exports = parseCommand