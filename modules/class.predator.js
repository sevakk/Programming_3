var LivingCreature = require("./class.LivingCreature")
var sta = require("./statistic")
function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[z];
}
module.exports = class Gishatich extends LivingCreature  {
    constructor(x, y, index) {
        super(x,y,index);
        this.acted = false;
        this.energy = 14;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(ch,matrix) {
        this.getNewCoordinates();
        return super.chooseCell(ch,matrix);
    }

    move(matrix,predatorenergy) {
        var cell = random(this.chooseCell(0,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];

                this.energy -= predatorenergy;
                this.acted = true;
                if (this.energy <= 0) {
                    this.die(matrix);
                }
            }
        }
        else (this.acted== false);
    }
    eat(matrix,predatormul,predatorenergy) {
        var cell = random(this.chooseCell(2,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.energy += 2;
                this.acted = true;
                sta.grassEater.current--;
                sta.grassEater.dead++;
                if (this.energy > predatormul) {
                    this.mul(matrix);
                    this.energy = 10;
                }
            }
            else {
                this.move(matrix,predatorenergy);
            }
        }
        else (this.acted = false);
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        sta.gishatich.dead++;
        sta.gishatich.current--;
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatich(newX, newY, 3);
            sta.gishatich.born++;
            sta.gishatich.current++;

        }
    }
}