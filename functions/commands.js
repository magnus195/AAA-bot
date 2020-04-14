const fs = require('fs')
var commandDir = __dirname + "/js/"

/*fs.readdir('./functions/js/', (err, files) => {
    if (err) console.error(err)
    files.forEach(element => {
        element.endsWith
        console.log(element.endsWith(".js"))
        if (element.endsWith(".js")) {
            console.log("yes")
        }
    });
})*/

module.exports = function (message) {
    name: "Command handler"
    description: "Handles commands, duh"
    var splitMsg = message.content.substring(1, message.content.length).split(" ")
    var file = splitMsg[0].toLowerCase()
    try {
        //console.log(commandDir + file + ".js")
        var execution = require(commandDir + file + ".js")
        execution.execute(message, splitMsg)
    } catch (error) {
        console.error(error)
    }
}