var LivingCreature = require("./class.LivingCreature")
var sta = require("./statistic")
function random(arr) {
    var min = 0;
    var max = arr.length-1;
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[z];
}

module.exports = class Grass extends LivingCreature {

    mul(matrix) {
        this.multiply++;
        var newCell = random(this.chooseCell(0,matrix));
        
        if (newCell && this.multiply >= 4) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;

            sta.grass.born++;
            sta.grass.current++;
        }
    }
}