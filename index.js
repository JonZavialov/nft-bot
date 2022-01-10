//Jonathan Zavialov

const { Client, Intents } = require('discord.js')
const client = new Client({  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] })

const config = require('./config.json')

const parseCommand = require('./utils/parseCommand')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', (msg) => {
    if(msg.content.startsWith(config.prefix)){
        parseCommand(msg)
    }
})

client.login(config.token)