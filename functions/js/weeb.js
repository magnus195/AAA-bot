module.exports = {
    name: "weeb",
    description: "You fuken weeeb",

    execute(message, args) {
        message.delete()
        var weebo = message.channel.fetchMessage(message.content.substr(5, 19))
        weebo.then(message => message.react("🇼")
            .then(() => message.react("🇪"))
            .then(() => message.react("3️⃣"))
            .then(() => message.react("🇧"))
            .then(() => message.react("🤮"))
            .catch(() => console.error('One of the emojis failed to react.')))
    }
}