var GrassEater = require("./class.eatgrass")
var Gishatich = require("./class.predator")
var Explosiveanimal = require("./class.explosiveanimal")
var sta = require("./statistic")
function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[z];
}

 module.exports = class Charactercreator {
        constructor(x, y, index) {
            this.x = x;
            this.y = y;
            this.index = index;
            this.directions = [];
            this.energy = 60;
            this.multiply = 0;
        }
        getNewCoordinates() {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
        chooseCell(num,matrix) {
            this.getNewCoordinates();
            var found = [];
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == num) {
                        found.push([x, y]);
                    }
                    else if (matrix[y][x].index == num) {
                        found.push([x, y]);
                    }
                }
            }
            return found;
        }
        creat(matrix) {
            var newCell = random(this.chooseCell(0,matrix));
            this.multiply++;
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                if (this.multiply >= 5 && this.multiply <= 7) {
                    matrix[newY][newX] = new GrassEater(newX, newY, 2);
                    sta.grassEater.born++;
                    sta.grassEater.current++;
                    this.multiply++;
                    this.energy--;
                }
                else if (this.multiply >= 10 && this.multiply <= 14) {
                    matrix[newY][newX] = new Gishatich(newX, newY, 3);
                    sta.gishatich.born++;
                    sta.gishatich.current++;
                    this.multiply++ ;
                    this.energy--;
                }
                else if (this.multiply >= 15) {
                    matrix[newY][newX] = new Explosiveanimal(newX, newY, 5);
                    sta.explosiveanimal.born++;
                    sta.explosiveanimal.current++;
                    this.multiply = 0;
                    this.energy--;
                }
                if(this.energy <= 0){
                    this.die(matrix);
                }
            }
        }
        die(matrix) {
            matrix[this.y][this.x] = 0;
            sta.charaktercreator.dead++;
            sta.charaktercreator.current--;
        }
    }