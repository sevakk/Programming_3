/*
var matrix = [
   [0, 2, 1, 6, 3],
   [1, 0, 0, 0, 0],
   [3, 1, 5, 2, 0],
   [2, 0, 0, 0, 0],
   [0, 1, 0, 0, 4],
   [1, 1, 2, 0, 0],
   [1, 1, 0, 0, 3]
];
*/
var matrix = [];
var side = 15;
function setup() {
    frameRate(5);
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
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 3) {
                fill(255, 0, 0);
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                fill(59, 90, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 5) {
                fill(10, 20, 60);
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 6) {
                fill(255, 100, 0);
                rect(x * side, y * side, side, side);
            }
        }
    }
}

