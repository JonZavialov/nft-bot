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

    //check for permissions
    if(method.permissions.length > 0){
        for(let permission of method.permissions){
            if(!msg.member.permissions.has(permission)){
                msg.reply(`You do not have permission to run this command`)
                return
            }
        }
    }

    //check that correct amount of args is provided
    if(method.args.length > args.length){
        msg.reply(`You didn't provide all the arguments for ${method.name}!`)
    }else if(method.permissions.length < args.length){
        msg.reply(`You provided too many arguements for ${method.name}!`)
    }else{
        method.run(msg, args)
    }
}

module.exports = parseCommand