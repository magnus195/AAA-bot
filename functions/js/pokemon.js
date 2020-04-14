const fs = require('fs')

var pokemon = fs.readFileSync(__dirname + "/../art/pokemon.txt", "utf-8")

/*console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])
console.log(quotes[Math.round(Math.random() * quotes.length)])*/

module.exports = {
    name: "pokemon",
    description: "Gotta catch 'em all",

    execute(message, args) {
        message.channel.send(pokemon, {
            code: false
        })
    }
}