let Command = require('../utils/Command.js')
let getAllCommands = require('../utils/getAllCommands.js')

function command(msg){
    let commandsList = getAllCommands()
    let helpString = ''
    for(let command in commandsList){
        let commandClass = commandsList[command]()
        helpString += `\`\`${commandClass.name}\`\`: ${commandClass.description} \`\`arguements: ${commandClass.args.length}\`\`,\`\`alias: ${commandClass.alias}\`\`\n`
    }

    msg.reply(helpString)
}

function help(){
    return new Command(command, 'help', 'Returns all the commands I can do', "h", [], [])
}

module.exports = help