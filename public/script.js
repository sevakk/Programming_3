var matrix = [];
var side = 15;
var socket;

socket = io();
var sta = {};
function setup() {
    socket.on("matrix", function (mtx) {
        matrix = mtx;
        createCanvas(matrix[0].length * side + 750, matrix.length * side);
        redraw();
        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        });
        socket.on("Stat", function (stat) {
            sta = stat;
        });
    });
    background('#acacac');
    frameRate(1);
    noLoop();

}

function draw() {

    background("#acacac");
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
                matrix[y][x].acted = true;
            }
            else if (matrix[y][x].index == 3) {
                fill(255, 0, 0);
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = true;
            }
            else if (matrix[y][x].index == 4) {
                fill(59, 90, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 5) {
                fill(10, 20, 60);
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = true;
            }
            else if (matrix[y][x].index == 6) {
                fill(255, 100, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 7) {
                fill(100, 255, 0);
                rect(x * side, y * side, side, side);
            }
        }
    }
    statistic(sta);


}

function statistic(st) {
    textSize(24);
    fill('black')
    var margin = 150;
    for (var i in st) {
        text(i, 900, margin)
        text(st[i].born, 1100, margin);
        text(st[i].dead, 1200, margin);
        text(st[i].current, 1300, margin);
        margin += 50;

    }
    margin = 0;
    textSize(50);
    text('Game Of Life', 950, 50);
    textSize(24);
    text("Name", 900, 100);
    text("Born", 1100, 100);
    text("Dead", 1200, 100);
    text("Current", 1300, 100);
    fill("green");
    rect(850, 135, 20, 20);
    fill(255, 255, 0)
    rect(850, 185, 20, 20);
    fill(255, 0, 0)
    rect(850, 235, 20, 20);
    fill(10, 20, 60)
    rect(850, 285, 20, 20);
    fill(255, 100, 0)
    rect(850, 335, 20, 20);
    fill(100, 255, 0)
    rect(850, 385, 20, 20);
}

