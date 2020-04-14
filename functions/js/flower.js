const fs = require('fs')

var flower = fs.readFileSync(__dirname + "/../art/flower.txt", "utf-8")

/*console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])*/

module.exports = {
    name: "flower",
    description: "Displays a beautiful flower",

    execute(message, args) {
        message.channel.send(flower, {
            code: true
        });
    }
}