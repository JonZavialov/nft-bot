let Command = require('../utils/Command.js')

async function command(msg){
    let rolesList = msg.guild.roles.cache
    let whiteListRole
    let hasWhitelistRole = false
    rolesList.forEach(role => {
        if(role.name === "Whitelist"){
            hasWhitelistRole = true
            whiteListRole = role
        }
    })

    if(!hasWhitelistRole){
        msg.reply("`0` members are whitelisted")
    }else{
        let whitelisted = whiteListRole.members.size
        msg.reply(`\`${whitelisted}\` members are whitelisted`)
    }
}

function whitelisted(){
    return new Command(command, 'whitelisted', 'Returns the number of whitelisted members', "wld", [], [])
}

module.exports = whitelisted