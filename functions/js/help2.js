const fs = require('fs')
const {
    RichEmbed
} = require('discord.js');

var help2Menu = new RichEmbed()
    .setTitle("Help menu")

fs.readdir('./functions/js/', (err, files) => {
    if (err) console.error(err)
    files.forEach(element => {
        if (element.endsWith(".js")) {
            var aaa = require(__dirname + "/" + element)
            help2Menu.addField("!" + aaa.name, aaa.description)
        }
    })
})

module.exports = {
    name: "help2",
    description: "Lists all commands and their use (kinda experimental)",

    execute(message, args) {
        message.channel.send(help2Menu)
    }
}