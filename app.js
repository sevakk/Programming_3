var express = require('express');
var app = express();
var fs = require("fs");
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("./public"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

var matrix = require("./modules/matrix");
var sta = require("./modules/statistic")

var weather = "Spring";
var NumberWeather = 0;
var frame = 2;
var grassmultiply = 4;
var grasseatermul = 14;
var grasseaterenergy = 2;
var predatormul = 17;
var predatorenergy = 2;
var eMul = 20;
var eEnergy = 2;
var worsordenergy = 2;

io.on('connection', function (socket) {
    socket.emit("matrix", matrix);
    function draw() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix, grassmultiply);
                }
                else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat(matrix, grasseatermul, grasseaterenergy);
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat(matrix, predatormul, predatorenergy);
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].bang(matrix);
                }
                else if (matrix[y][x].index == 5) {
                    matrix[y][x].blast(matrix, eMul, eEnergy);
                }
                else if (matrix[y][x].index == 6) {
                    matrix[y][x].krak(matrix, worsordenergy);
                }
                else if (matrix[y][x].index == 7) {
                    matrix[y][x].creat(matrix);
                }
            }
        }
        socket.emit("redraw", matrix);
        weath();
    }

    function stat() {
        socket.emit("Stat", sta);
        var myJSON = JSON.stringify(sta);
        fs.writeFileSync("statistic.json", myJSON);
    }
    
    function weath() {
        if (NumberWeather == 20) {
            weather = "Spring";
            grassmultiply = 4;
            frame = 2;
            grasseatermul = 14;
            grasseaterenergy = 2;
            predatormul = 17;
            predatorenergy = 2;
            eMul = 20;
            eEnergy = 2;
            worsordenergy = 2;
        }
        else if (NumberWeather == 40) {
            weather = "Summer";
            grassmultiply = 2;
            frame = 4;
            grasseatermul = 12;
            grasseaterenergy = 1;
            predatormul = 16;
            predatorenergy = 1;
            eMul = 18;
            eEnergy = 1;
            worsordenergy = 1;
        }
        else if (NumberWeather == 60) {
            weather = "Autumn";
            grassmultiply = 4;
            frame = 2;
            grasseatermul = 14;
            grasseaterenergy = 2;
            predatormul = 17;
            predatorenergy = 2;
            eMul = 20;
            eEnergy = 2;
            worsordenergy = 2;
        }
        else if (NumberWeather == 80) {
            NumberWeather = 0;
            weather = "Winter";
            grassmultiply = 6;
            frame = 1;
            grasseatermul = 16;
            grasseaterenergy = 3;
            predatormul = 18;
            predatorenergy = 3;
            eMul = 22;
            eEnergy = 3;
            worsordenergy = 3;
        }
        NumberWeather += 1;
        socket.emit("Weather", weather);
    }
    setInterval(draw, time);
    setInterval(stat, 3000);
});

var time = frameRate(frame);

function frameRate(frameCount) {
    return 1000 / frameCount;
}