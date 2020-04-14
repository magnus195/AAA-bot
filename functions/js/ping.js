module.exports = {
    name: "ping",
    description: "pong",
    execute (message, args) {
        message.channel.send("pong")
        message.channel.send("Time: " + message.client.ping + "ms")
    }
}