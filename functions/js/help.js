const fs = require('fs')

var helpMenu = ""

fs.readdir('./functions/js/', (err, files) => {
    if (err) console.error(err)
    files.forEach(element => {
        if (element.endsWith(".js")) {
            var aaa = require(__dirname + "/" + element)
            //console.log(element + aaa.name)
            helpMenu = helpMenu + "***!" + aaa.name + ":*** " + aaa.description + "\r\n"
            //console.log(helpMenu)
        }
        //console.log("foreach" + helpMenu)
    })
})

module.exports = {
    name: "help",
    description: "Lists all commands and their use",

    async execute(message, args) {


        message.channel.send(helpMenu, {
            code: false
        })
        //console.log(helpMenu)
        //await message.channel.send(helpMenu, {code: true})
        //await console.log("halp" + helpMenu)
    }
}