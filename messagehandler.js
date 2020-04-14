const fs = require('fs')
const commandHandler = require('./functions/commands.js')

var animeKeywords = fs.readFileSync(__dirname + "/anime_keywords.txt", "utf-8").split("\r\n")
var broWords = fs.readFileSync(__dirname + "/bro_keywords.txt", "utf-8").split("\r\n")
var msg

var isAnime = function (content) {
    /**
     * Sjekk om ordet er i anime lista
     */
    var res = false
    animeKeywords.forEach(element => {
        //console.log(element + content)
        if (content.toLowerCase().includes(element)) {
            res = true
            //console.log(element + " = " + true)
        } else {
            //console.log(content)
        }
    })
    //console.log(res)
    return res
}

var bro = function (content) {
    /**
     * Sjekk om ordet er i anime lista
     */
    var res = false
    broWords.forEach(element => {
        //console.log(element + content)
        if (content.toLowerCase().includes(element)) {
            res = true
            //0console.log(element + " = " + true)
        } else {
            //console.log(content)
        }
    })
    //console.log(res)
    return res
}

module.exports = function (message, client) {
    msg = message.content
    var weebRole = "Mega Weeb"
    if (msg.startsWith("!")) {
        /*var command = msg.substring(1, msg.length).split(" ")
        console.log(command)*/
        commandHandler(message)
    } else if (bro(msg)) {
        //console.log("bro😔")
        message.react("🅱️")
            .then(() => message.react("🇷"))
            .then(() => message.react("🇴"))
            .then(() => message.react("😔"))
    } else if (isAnime(msg)) {
        //console.log("weeb🤮")
        message.react("🇼")
            .then(() => message.react("🇪"))
            .then(() => message.react("3️⃣"))
            .then(() => message.react("🇧"))
            .then(() => message.react("🤮"))
    } else if (msg == "#info") {
        console.log(client.guilds)
        message.channel.send("Information sent to console")
    } else if(message.member.roles.find(role => role.name === weebRole) && message.author.tag !== "magnus#6066"){
        console.log(weebRole)
        message.react("🇼")
            .then(() => message.react("🇪"))
            .then(() => message.react("3️⃣"))
            .then(() => message.react("🇧"))
            .then(() => message.react("🤮"))
            .catch(() => console.log("One of the emojis could not react on line 69"))
    }/* else if (message.author.tag == "cencored") {
        message.delete()
                message.channel.send("Censored message by: " + message.author)
                console.log("Censored: " + message.author.username)
    }*/ else {
        //console.log(message.author.username + ": " + msg)
    }
}
