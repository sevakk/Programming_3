var LivingCreature = require("./class.LivingCreature")
var sta = require("./statistic")
function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[z];
}
module.exports = class Explosiveanimal extends LivingCreature  {
    constructor(x, y, index) {
        super(x,y,index);
        this.directions = [];
        this.directions1 = [];
        this.directions2 = [];
        this.acted = false;
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.directions2 = [
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
    chooseCell(num, n,matrix) {
        this.getNewCoordinates();
        if (n == 0) {
            var direc = this.directions;
        }
        else if (n == 1) {
            var direc = this.directions1;
        }
        var found = [];
        for (var i in direc) {
            var x = direc[i][0];
            var y = direc[i][1];
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
    die(matrix) {
        this.getNewCoordinates();
        for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if(matrix[y][x].index == 1){
                    sta.grass.dead++;
                    sta.grass.current--;
                }
                else if(matrix[y][x].index == 2){
                    sta.grassEater.dead++;
                    sta.grassEater.current--;
                }
                else if(matrix[y][x].index == 3){
                    sta.gishatich.dead++;
                    sta.gishatich.current--;
                }
                else if(matrix[y][x].index == 5){
                    sta.explosiveanimal.dead++;
                    sta.explosiveanimal.current--;
                }
                else if(matrix[y][x].index == 6){
                    sta.worsord.dead++;
                    sta.worsord.current--;
                }
                else if(matrix[y][x].index == 7){
                    sta.charaktercreator.dead++;
                    sta.charaktercreator.current--;
                }
                matrix[y][x] = 0;
                matrix[this.y][this.x] = 0;

            }
        }
                sta.explosiveanimal.dead++;
                sta.explosiveanimal.current--;        
    }
    move(matrix) {
        var cell = random(this.chooseCell(0, 0,matrix));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die(matrix);
                }
            }
        }
        else (this.acted== false);
    }

    blast(matrix) {
        var cell = random(this.chooseCell(3, 1,matrix));
        this.getNewCoordinates();
        if (this.acted == false) {
            if (cell) {
                for (var i in this.directions2) {
                    var x = this.directions2[i][0];
                    var y = this.directions2[i][1];
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        if(matrix[y][x].index == 1){
                            sta.grass.dead++;
                            sta.grass.current--;
                        }
                        else if(matrix[y][x].index == 2){
                            sta.grassEater.dead++;
                            sta.grassEater.current--;
                        }
                        else if(matrix[y][x].index == 3){
                            sta.gishatich.dead++;
                            sta.gishatich.current--;
                        }
                        else if(matrix[y][x].index == 5){
                            sta.explosiveanimal.dead++;
                            sta.explosiveanimal.current--;
                        }
                        else if(matrix[y][x].index == 6){
                            sta.worsord.dead++;
                            sta.worsord.current--;
                        }
                        else if(matrix[y][x].index == 7){
                            sta.charaktercreator.dead++;
                            sta.charaktercreator.current--;
                        }
                        matrix[y][x] = 0;
                        matrix[this.y][this.x] = 0;
                    }
                }
                this.acted = true;
                sta.explosiveanimal.dead++;
                sta.explosiveanimal.current--;
            }
            else {
                this.eat(matrix);
            }
        }
        else (this.acted = false);
    }
    eat(matrix) {
        var cell = random(this.chooseCell(1, 1,matrix));
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
                if (this.energy >= 20) {
                    this.mul(matrix);
                    this.energy = 6;
                }
            }
            else {
                this.move(matrix);
            }
        }
        else (this.acted = false);
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0, 1,matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Explosiveanimal(newX, newY, 5);
            sta.explosiveanimal.born++;
            sta.explosiveanimal.current++;

        }
    }
}