const fs = require('fs')

var soup = fs.readFileSync(__dirname + "/../art/soup.txt", "utf-8")

/*console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])*/

module.exports = {
    name: "soup",
    description: "Gives you a nice, warm bowl of soup",
    execute(message, args) {
        message.channel.send(soup, {
            code: true
        })
    }
}