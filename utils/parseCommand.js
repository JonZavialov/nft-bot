async function parseCommand(commands, msg) {
    var args = msg.content.split(' ')
    var command = args[0].substring(1).toLowerCase()
    args.shift()
    
    //check for alias
    for(let commandObj in commands){
        let commandClass = commands[commandObj]()
        if(commandClass.alias.includes(command)){
            command = commandClass.name
            break
        }
    }

    if(!commands[command]) return

    let method = commands[command]()
    method.run(msg, args)
}

module.exports = parseCommand