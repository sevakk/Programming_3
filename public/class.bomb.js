class Bomb extends LivingCreature  {
    constructor(x, y, index) {
        super(x,y,index); 
        this.directions = [];
        this.directions1 = [];
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
        this.directions1 = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }
    chooseCell(num, num1, num2) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num || matrix[y][x] == num1 || matrix[y][x] == num2) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num || matrix[y][x].index == num1 || matrix[y][x].index == num2) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    bang() {
        this.getNewCoordinates();
        var Newcell = random(this.chooseCell(2, 3, 5));
        if (Newcell) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    matrix[y][x] = 0;
                    matrix[this.y][this.x] = 0;
                }
            }

        }


    }
}
