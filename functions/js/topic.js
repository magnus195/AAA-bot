const fs = require('fs')

var topics = fs.readFileSync(__dirname + "/../conversation/topics.txt", "utf-8").split("\r\n")
var deep = fs.readFileSync(__dirname + "/../conversation/deep.txt", "utf-8").split("\r\n")



module.exports = {
    name: "topic",
    description: "Use this in a dead chat. Will give a random topic for you to talk about",
    execute(message, args) {
        //console.log(args)
        //console.log(message)

        var topic

        if (args[1] !== undefined) {
            if (args["1"].toLowerCase() == "deep") {
                topic = deep[Math.round(Math.random() * deep.length)]
            }
        } else {
            topic = topics[Math.round(Math.random() * topics.length)]
        }
        message.channel.send(topic)
    }
}