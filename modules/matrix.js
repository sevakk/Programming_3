var LivingCreature = require("./class.LivingCreature")
var Grass = require("./class.grass")
var GrassEater = require("./class.eatgrass")
var Gishatich = require("./class.predator")
var Explosiveanimal = require("./class.explosiveanimal")
var Bomb = require("./class.bomb")
var worsord = require("./class.worsord")

function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;

    return arr[z];
}

var matrix = [];
var n = 40;
var m = 50;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = random([0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6]);
    }
}

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Gishatich(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Bomb(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Explosiveanimal(x, y, 5);
        }
        else if (matrix[y][x] == 6) {
            matrix[y][x] = new worsord(x, y, 6);
        }

    }
}

module.exports = matrix;