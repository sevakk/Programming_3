var matrix = [];
var side = 15;
var socket;
var weath;
var sta;

socket = io();

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
        socket.on("Weather", function (weather) {
            weath = weather;
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

                if (weath == "Spring") {
                    fill("#44da2a");
                }
                else if (weath == "Summer") {
                    fill("green");
                }
                else if (weath == "Autumn") {
                    fill("#328c32");
                }
                else if (weath == "Winter") {
                    fill("#a0f7a0");
                }
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
                fill(0,247,255);
                rect(x * side, y * side, side, side);
            }
        }
    }
    statistic(sta, weath);
}

function statistic(st, weath) {
    fill('black')
    line(750, 0, 750, 600);
    textSize(24);
    var margin = 150;
    for (var i in st) {
        text(i, 900, margin)
        text(st[i].born, 1100, margin);
        text(st[i].dead, 1200, margin);
        text(st[i].current, 1300, margin);
        margin += 70;
    }
    margin = 0;
    textSize(50);
    text('Game Of Life', 950, 50);
    textSize(24);
    text("Name", 900, 100);
    text("Born", 1100, 100);
    text("Dead", 1200, 100);
    text("Current", 1300, 100);

    if (weath == "Spring") {
        fill("#44da2a");
    }
    else if (weath == "Summer") {
        fill("green");
    }
    else if (weath == "Autumn") {
        fill("#328c32");
    }
    else if (weath == "Winter") {
        fill("#a0f7a0");
    }
    rect(850, 135, 20, 20);
    fill(255, 255, 0)
    rect(850, 205, 20, 20);
    fill(255, 0, 0)
    rect(850, 275, 20, 20);
    fill(10, 20, 60)
    rect(850, 345, 20, 20);
    fill(255, 100, 0)
    rect(850, 415, 20, 20);
    fill( 0, 247, 255 )
    rect(850, 485, 20, 20);
    fill("black");
    textSize(24);
    text('Weather:  ' + weath, 850, 550);

}
