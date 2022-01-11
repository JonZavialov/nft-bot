let Command = require('../utils/Command.js')

async function command(msg){
    console.log(userInvites)
}

function invites(){
    return new Command(command, 'invites', 'Returns the amount of invites a member has', "i", ["id"], [])
}

module.exports = invites