let Command = require('../utils/Command.js')

async function command(msg, args){
    //check that whitelist role is in the server
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
        //create whitelist role
        whiteListRole = await msg.guild.roles.create({
            name: "Whitelist",
            color: "BLUE",
            reason: "Whitelist role did not exist"
        })
        msg.reply("Whitelist role did not exist so I created it!")
    }

    //check that member is in the server
    let member
    try{
        member = await msg.guild.members.fetch(args[0])
    }catch(err){
        console.log("admin whitelisted wrong id")
    }
    if(!member){
        msg.reply(`${args[0]} invalid parameter, please use the member's ID`)
        return
    }

    //check that member is not already whitelisted
    let whitelisted = false
    member.roles.cache.forEach(role => {
        if(role.name === "Whitelist"){
            whitelisted = true
        }
    })
    if(whitelisted){
        msg.reply(`${member.user.tag} is already whitelisted`)
        return
    }

    //add whitelist role to member
    member.roles.add(whiteListRole)
    msg.reply(`${member.user.tag} has been whitelisted`)
}

function whitelist(){
    return new Command(command, 'whitelist', 'Whitelists a member of the server using their ID', "wl", ["id"], ["ADMINISTRATOR"])
}

module.exports = whitelist