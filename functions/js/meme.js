const {
    RichEmbed
} = require('discord.js');
const fs = require('fs')

//var memes = require('./../memes.json')


module.exports = {
    name: "meme",
    description: "Shows a random meme from imgflip",
    execute(message, args) {
        var memes = JSON.parse(fs.readFileSync(__dirname + "/../memes.json", "utf-8"))
        //console.log(JSON.stringify(memes.data.memes[Math.round(Math.random() * memes.data.memes.length)]))
        var meme = memes.data.memes[Math.round(Math.random() * memes.data.memes.length)]
        //console.log(meme)
        /*fs.readFile(__dirname + "/../memes.json", (err, data) => {
            var memes = JSON.parse(data)
            console.log(memes.data.length)
            var meme = memes.data[Math.round(Math.random() * memes.data.length)]
        })*/



        //console.log(memes)
        var memeMessage = new RichEmbed()
            .setTitle(meme.name)
            .setImage(meme.url)
            .setColor("0xFF0000")
            //.addField("test", "value")
        message.channel.send(memeMessage)
    }
}