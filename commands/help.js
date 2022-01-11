let Command = require('../utils/Command.js')
let getAllCommands = require('../utils/getAllCommands.js')

function command(msg, args){
    if(args.length == 0){
        let commandsList = getAllCommands()
        let helpString = ""
        for(let command in commandsList){
            let commandClass = commandsList[command]()
            helpString += `\`${commandClass.name}\`\n`
        }
        msg.reply(`I can do the following:\n${helpString}\nUse \`!help <command>\` to get more info on a specific command`)
    }else{
        try{
            let commandClass = getAllCommands()[args[0]]()
            msg.reply(`\`${commandClass.name}\`\n${commandClass.description}\nAlias: ${commandClass.alias}\nArguements optional: ${commandClass.argsOptional}`)
        }catch{
            msg.reply("I don't know that command")
        }
    }
}

function help(){
    return new Command(command, 'help', 'Returns all the commands I can do', "h", ["command"], [], true)
}

module.exports = help