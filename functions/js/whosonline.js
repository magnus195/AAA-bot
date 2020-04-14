//var onlineCount = guild.members.filter(m => m.presence.status === 'online')

module.exports = {
    name: "whosonline",
    description: "Just a list of online peoples",


    execute(message, args) {
        var onlineMembers = message.guild.members.filter(m => m.presence.status === 'online')
        var online = ""
        onlineMembers.forEach(element => {
            online += "**" + element.user.username + "**\r\n"
        });

        //console.log(message.guild.members.filter(m => m.presence.status === 'online' /* && m.user.bot === 'false'*/ )),
        message.channel.send("Online members are: \r\n" + online);
    }
}