var matrix = [];
var side = 15;
var socket;

function setup() {
    socket = io();

    socket.on("firstMatrix", function(mtx){
        matrix = mtx;
        createCanvas(matrix[0].length * side, matrix.length * side);
        console.log(matrix);
        
            //HETO JNJEL
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
                        //matrix[y][x].acted = false;
                    }
                    else if (matrix[y][x].index == 3) {
                        fill(255, 0, 0);
                        rect(x * side, y * side, side, side);
                        //matrix[y][x].acted = false;
                    }
                    else if (matrix[y][x].index == 4) {
                        fill(59, 90, 0);
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x].index == 5) {
                        fill(10, 20, 60);
                        rect(x * side, y * side, side, side);
                        //matrix[y][x].acted = false;
                    }
                    else if (matrix[y][x].index == 6) {
                        fill(255, 100, 0);
                        rect(x * side, y * side, side, side);
                    }
                }
            }
    });

    background('#acacac');
    frameRate(0);
}

function draw() {
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

