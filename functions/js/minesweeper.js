const Minesweeper = require('discord.js-minesweeper')

module.exports = {
    name: "minesweeper",
    description: "Very basic minesweeper. \r\nUsage: !minesweeper <rows> <columns> <mines>",
    execute(message, args) {
        //console.log(args)
        //console.log(message)

        var rows = parseInt(args[1]);
        var columns = parseInt(args[2]);
        var mines = parseInt(args[3]);

        if (!rows) {
            rows = 10
        }

        if (!columns) {
            columns = 10
        }

        if (!mines) {
            mines = 15
        }

        var minesweeper = new Minesweeper({
            rows: rows,
            columns: columns,
            mines: mines,
            emote: 'boom',
            revealFirstCell: true,
            returnType: 'emoji'
        })
        var matrix = minesweeper.start();

        return matrix ?
            message.channel.send(matrix) :
            message.channel.send(':warning: You have provided invalid data.');
    }
}