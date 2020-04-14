const fs = require('fs')

var moneys = fs.readFileSync(__dirname + "/../art/moneys.txt", "utf-8")

/*console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])*/

module.exports = {
    name: "moneys",
    description: "Shows you a ton of amerika moneys",
    execute (message, args) {
        message.channel.send(moneys, {
            code: true
        })
    }
}