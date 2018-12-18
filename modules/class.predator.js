var LivingCreature = require("./class.LivingCreature")
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
    chooseCell1(num, num1,matrix) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num || matrix[y][x] == num1) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num || matrix[y][x].index == num1) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    chooseCell(ch,matrix) {
        this.getNewCoordinates();
        return super.chooseCell(ch,matrix);
    }

    move(matrix) {
        var cell = random(this.chooseCell1(0, 1,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];

                this.energy -= 2;
                this.acted = true;
                if (this.energy <= 0) {
                    this.die(matrix);
                }
            }
        }
    }
    eat(matrix) {
        var cell = random(this.chooseCell(2,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.energy += 2;
                this.acted = true;
                if (this.energy > 18) {
                    this.mul(matrix);
                    this.energy = 10;
                }
            }
            else {
                this.move(matrix);
            }
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatich(newX, newY, 3);

        }
    }
}