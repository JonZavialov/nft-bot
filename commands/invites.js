let Command = require('../utils/Command.js')

async function command(msg, args){
    let id
    if(args.length == 0){
        id = msg.author.id
    }else{
        if(args[0].indexOf("<@!") == -1 || args[0].indexOf(">") == -1){
            msg.reply("Please ping the member who you are checking invites for\nExample: `!invites @member`")
            return
        }
        id = args[0].substring(3, args[0].length - 1)
    }
    
    let member = await msg.guild.members.fetch(id)
    let memberInvites = userInvites.get(id)
    if(!memberInvites) msg.reply(`${member.displayName} has no invites`)
    else msg.reply(`${member.displayName} has \`${memberInvites.length}\` invites`)
}

function invites(){
    return new Command(command, 'invites', 'Returns the amount of invites a member has', "i", ["id"], [], true)
}

module.exports = invites