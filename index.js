const Discord = require('discord.js')
const fs = require('fs')
const dotenv = require('dotenv').config()

const messenger = require('./messagehandler.js')

var client = new Discord.Client()
client.commands = new Discord.Collection()

var commandFiles = fs.readdirSync(__dirname + "/functions/js").filter(file => file.endsWith('.js'))
//C:\Users\Bruker\Documents\Node\AAA-bot\functions\js
for (const file of commandFiles) {
    const command = require(`./functions/js/${file}`);
    client.commands.set(command.name, command);
}

//var animeKeywords = fs.readFileSync(__dirname + "/anime_keywords.txt", "utf-8").split("\r\n")
//console.log(animeKeywords)

function servers() {
    client.guilds.forEach((guild) => {
        console.log(guild.name)
    })
}

client.on('ready', () => {
    console.log("Reddy: " + client.user.username)
    client.user.setStatus("online") //.then(console.log).catch(console.error)
    servers()
})

client.on('message', (message) => {
    messenger(message, client)
    //console.log(message.guild.roles)
})

client.on('messageDelete', (message) => {

    try {
        console.log(`Message by ${message.author.tag} deleted in ${message.guild.name} - ${message.channel.name}: ${message.content}`)
    } catch (err) {
        //console.error(err)
        try {
            console.log(`Message by ${message.author.tag} deleted: ${message.content}`)
        } catch (err) {
            console.error(err)
        }
    }

})

client.login(process.env.DISCORD_KEY)