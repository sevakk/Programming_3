var LivingCreature = requiere("./class.LivingCreature")
var Grass = requiere("./class.grass")
var GrassEater = requiere("./class.eatgrass")
var Gishatich = requiere("./class.predator")
var Explosiveanimal = requiere("./class.explosiveanimal")
var bomb = requiere("./class.bomb")
var worsord = requiere("./class.worsord")

var matrix = [];
var side = 15;
    var n = 40;
    var m = 50;
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = random([0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6]);
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
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

var time = frameRate(5);

function frameRate(frameCount){
    return 1000/frameCount;
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].bang();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].blast();
            }
            else if (matrix[y][x].index == 6) {
                matrix[y][x].krak();
            }
        }
    }
}

setInterval(draw, time);