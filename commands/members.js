let Command = require('../utils/Command.js')

function command(msg){
    let guild = msg.guild
    let members = guild.memberCount
    msg.reply(`${guild.name} has ${members} members`)
}

function members(){
    return new Command(command, 'members', 'Returns the number of members in the server', "m", [], [])
}

module.exports = members