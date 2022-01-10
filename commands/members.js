async function members(msg){
    let guild = msg.guild
    let members = guild.memberCount
    msg.reply(`${guild.name} has ${members} members`)
}

module.exports = members