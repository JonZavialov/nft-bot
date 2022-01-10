let Command = require('../utils/Command.js')

function members(msg){
    let guild = msg.guild
    let members = guild.memberCount
    msg.reply(`${guild.name} has ${members} members`)
}

function commandMembers(){
    return new Command(members, 'members', 'Returns the number of members in the server', [], [])
}

module.exports = commandMembers