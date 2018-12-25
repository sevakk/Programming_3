var express = require('express');
var app = express();
var fs = require("fs");
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("./public"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3002);
var matrix = require("./modules/matrix");
var sta = require("./modules/statistic")

io.on('connection', function (socket) {
    socket.emit("matrix", matrix);
    function draw() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix);
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].bang(matrix);
                }
                else if (matrix[y][x].index == 5) {
                    matrix[y][x].blast(matrix);
                }
                else if (matrix[y][x].index == 6) {
                    matrix[y][x].krak(matrix);
                }
                else if (matrix[y][x].index == 7) {
                    matrix[y][x].creat(matrix);
                }
            }
        }
        socket.emit("redraw", matrix);
    }

    function stat() {
        socket.emit("Stat", sta);
        var myJSON = JSON.stringify(sta);
        fs.writeFileSync("statistic.json", myJSON);
    }
    setInterval(draw, time);
    setInterval(stat, 3000);
});

var time = frameRate(2);
function frameRate(frameCount) {
    return 1000 / frameCount;
}