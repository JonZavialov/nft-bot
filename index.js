//Jonathan Zavialov

const { Client, Intents } = require('discord.js')
const client = new Client({  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] })

const config = require('./config.json')
const parseCommand = require('./utils/parseCommand')
const getAllCommands = require('./utils/getAllCommands')
const addInviteForUser = require('./utils/addInviteForUser')
const subtractInviteForUser = require('./utils/subtractInviteForUser')
const commands = getAllCommands()

global.userInvites = new Map()
const wait = require("timers/promises").setTimeout

client.on('ready', async() => {
    console.log(`Logged in as ${client.user.tag}!`)

    await wait(1000)
    //get guild the bot is in
    let guild = client.guilds.cache.get(config.guildID)
    // Fetch all Guild Invites
    const firstInvites = await guild.invites.fetch()
    // Set the key as Guild ID, and create a map which has the invite code, and the number of uses
    global.invitesMap = new Map(firstInvites.map((invite) => [invite.code, invite.uses]))
})

client.on('messageCreate', (msg) => {
    if(msg.content.startsWith(config.prefix)){
        parseCommand(commands, msg)
    }
})

client.on("inviteDelete", (invite) => {
    // Delete the Invite from Cache
    invitesMap.delete(invite.code)
})
  
client.on("inviteCreate", (invite) => {
    // Update cache on new invites
    invitesMap.set(invite.code, invite.uses)
})

client.on("guildMemberAdd", member => {
    // To compare, we need to load the current invite list.
    member.guild.invites.fetch().then(newInvites => {
      // This is the *existing* invites for the guild.
      const oldInvites = invitesMap
      // Look through the invites, find the one for which the uses went up.
      const invite = newInvites.find(i => i.uses > oldInvites.get(i.code))
      // This is just to simplify the message being sent below (inviter doesn't have a tag property)
      const inviter = client.users.cache.get(invite.inviter.id) 
      inviter
        ? addInviteForUser(inviter, member)
        : console.log(`${member.user.tag} joined but I couldn't find through which invite.`)
    })
})

client.on("guildMemberRemove", member => {
    subtractInviteForUser(member.id)
})

client.login(config.token)