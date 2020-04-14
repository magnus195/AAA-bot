const fs = require('fs')

var possibleArgs = ""

fs.readdir(__dirname + "/../gifts/", (err, files) => {
    if (err) console.error(err)
    files.forEach((val) => {
        if (!val.endsWith(".txt")) {
            possibleArgs += "`" + val + "` "
        }
    })
    //console.log(possibleArgs)
})

module.exports = {
    name: "gift",
    description: "Got a good friend? Surprise them with a gift! \r\nUsage: !gift <type> (friend)",

    execute(message, args) {
        console.log(args)
        try {
            var gift = fs.readFileSync(__dirname + "/../gifts/" + args[1], "utf-8")
            message.channel.send(gift, {
                code: true
            });
        } catch (error) {
            message.channel.send("Could not find gift. Available args are: " + possibleArgs)
        }
    }
}