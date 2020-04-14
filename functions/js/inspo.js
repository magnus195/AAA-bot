const fs = require('fs')

var quotes = fs.readFileSync(__dirname + "/../inspo/quotes.txt", "utf-8").split("\r\n")
var engrish = fs.readFileSync(__dirname + "/../inspo/engrish.txt", "utf-8").split("\r\n")



module.exports = {
    name: "inspo",
    description: "Shows a very good quote. !inspo engrish shows a bad englihs",
    execute(message, args) {
        //console.log(args)
        //console.log(message)

        var quote
        //console.log(args[1])
        if (args[1] !== undefined) {
            if (args["1"].toLowerCase() == "engrish") {
                quote = engrish[Math.round(Math.random() * engrish.length)]
                message.channel.send(quote)
                //message.channel.send("Ching Chong i eat dog")
            }
        } else {
            quote = quotes[Math.round(Math.random() * quotes.length)]
            message.channel.send(quote)
        }
    }
}