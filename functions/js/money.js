const fs = require('fs')

var money = fs.readFileSync(__dirname + "/../art/money.txt", "utf-8")

/*console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])*/

module.exports = {
    name: "money",
    description: "Shows you real amerika money",
    execute(message, args) {
        message.channel.send(money, {
            code: true
        })
    }
}