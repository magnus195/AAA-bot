/*var colors = [
    'DEFAULT',
    'WHITE',
    'AQUA',
    'GREEN',
    'BLUE',
    'PURPLE',
    'LUMINOUS_VIVID_PINK',
    'GOLD',
    'ORANGE',
    'RED',
    'GREY'
  ]

function changeColor(message, args) {
    switch (args[1]) {
        case "red":
            //message.guild.member(message.author.id).addRole("Red color", "bot")
            console.log("red")
                message.guild.member(message.author.id).addRole("Red color", "bot").catch((err) => {
                    message.guild.createRole({
                        name: "Red color",
                        color: "Red",
                        position: 2,
                        mentionable: false
                    }).then(()=> message.guild.member(message.author.id).addRole("Red color", "bot"))
                })
            break;
    
        default:
            console.log("def")
            break;
    }
}*/

module.exports = {
    name: "color",
    description: "Deactivated",
    execute (message, args) {
    //changeColor(message, args)
}}