var LivingCreature = require("./class.LivingCreature")
var sta = require("./statistic")
function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[z];
}
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);  
        this.energy = 4;
        
        this.acted = false;
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
    chooseCell(ch,matrix) {
        this.getNewCoordinates();
        return super.chooseCell(ch ,matrix);
    }
    move(matrix,grasseaterenergy) {
        var cell = random(this.chooseCell(0,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy -=grasseaterenergy;
                if (this.energy <= 0) {
                    this.die(matrix);
                }
            }
        }
        else{this.acted = false} ;
    }
    eat(matrix,grasseatermul,grasseaterenergy) {
        var cell = random(this.chooseCell(1,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy++;
                sta.grass.dead++;
                sta.grass.current--;
                if (this.energy >= grasseatermul) {
                    this.mul(matrix);
                    this.energy = 6;
                }
            }
            else {
                this.move(matrix,grasseaterenergy);
            }
        }
        else{this.acted = false} ;
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new GrassEater(newX, newY, 2);
            sta.grassEater.born++;
            sta.grassEater.current++;
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        sta.grassEater.current--;
        sta.grassEater.dead++;
    }
}