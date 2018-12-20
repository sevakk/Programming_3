var LivingCreature = require("./class.LivingCreature")
function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[z];
}
module.exports = class worsord extends LivingCreature  {
    constructor(x, y, index) {
        super(x,y,index);  
        this.directions = [];
        this.energy = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x + 5, this.y],
            [this.x + 6, this.y],
            [this.x + 7, this.y],
            [this.x + 8, this.y],
            [this.x + 9, this.y],
            [this.x + 10, this.y],
            [this.x + 11, this.y],
            [this.x + 12, this.y],
            [this.x + 13, this.y],
            [this.x + 14, this.y],
            [this.x + 15, this.y],
            [this.x + 16, this.y],
            [this.x + 17, this.y],
            [this.x + 18, this.y],
            [this.x + 19, this.y],
            [this.x + 20, this.y],
            [this.x + 21, this.y],
            [this.x + 22, this.y],
            [this.x + 23, this.y],
            [this.x + 24, this.y],
            [this.x + 25, this.y],
            [this.x + 26, this.y],
            [this.x + 27, this.y],
            [this.x + 28, this.y],
            [this.x + 29, this.y],
            [this.x + 30, this.y],
            [this.x + 31, this.y],
            [this.x + 32, this.y],
            [this.x + 33, this.y],
            [this.x + 34, this.y],
            [this.x + 35, this.y],
            [this.x + 36, this.y],
            [this.x + 37, this.y],
            [this.x + 38, this.y],
            [this.x + 39, this.y],
            [this.x + 40, this.y],
            [this.x + 41, this.y],
            [this.x + 42, this.y],
            [this.x + 43, this.y],
            [this.x + 44, this.y],
            [this.x + 45, this.y],
            [this.x + 46, this.y],
            [this.x + 47, this.y],
            [this.x + 48, this.y],
            [this.x + 49, this.y],
            [this.x + 50, this.y],
            [this.x - 1, this.y],
            [this.x - 2, this.y],
            [this.x - 3, this.y],
            [this.x - 4, this.y],
            [this.x - 5, this.y],
            [this.x - 6, this.y],
            [this.x - 7, this.y],
            [this.x - 8, this.y],
            [this.x - 9, this.y],
            [this.x - 10, this.y],
            [this.x - 11, this.y],
            [this.x - 12, this.y],
            [this.x - 13, this.y],
            [this.x - 14, this.y],
            [this.x - 15, this.y],
            [this.x - 16, this.y],
            [this.x - 17, this.y],
            [this.x - 18, this.y],
            [this.x - 19, this.y],
            [this.x - 20, this.y],
            [this.x - 21, this.y],
            [this.x - 22, this.y],
            [this.x - 23, this.y],
            [this.x - 24, this.y],
            [this.x - 25, this.y],
            [this.x - 26, this.y],
            [this.x - 27, this.y],
            [this.x - 28, this.y],
            [this.x - 29, this.y],
            [this.x - 30, this.y],
            [this.x - 31, this.y],
            [this.x - 32, this.y],
            [this.x - 33, this.y],
            [this.x - 34, this.y],
            [this.x - 35, this.y],
            [this.x - 36, this.y],
            [this.x - 37, this.y],
            [this.x - 38, this.y],
            [this.x - 39, this.y],
            [this.x - 40, this.y],
            [this.x - 41, this.y],
            [this.x - 42, this.y],
            [this.x - 43, this.y],
            [this.x - 44, this.y],
            [this.x - 45, this.y],
            [this.x - 46, this.y],
            [this.x - 47, this.y],
            [this.x - 48, this.y],
            [this.x - 49, this.y],
            [this.x - 50, this.y]
        ];
    }
    chooseCell(ch,matrix) {
        this.getNewCoordinates();
        return super.chooseCell(ch,matrix);
    }
    krak(matrix) {
        var newCell = random(this.chooseCell(3,matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 0;
            this.energy--;
            if(this.energy == 0){
                this.die(matrix);
             }
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
    }
}