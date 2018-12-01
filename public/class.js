class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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

    chooseCell(num) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (newCell && this.multiply >= 2) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;

        }
    }


}


class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.index = index;
        this.directions = [];
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
    chooseCell(num) {
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
    move() {
        var cell = random(this.chooseCell(0));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }
            }
        }
    }
    eat() {
        var cell = random(this.chooseCell(1));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy++;
                if (this.energy >= 14) {
                    this.mul();
                    this.energy = 6;
                }
            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new GrassEater(newX, newY, 2);

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
}


class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
        this.acted = false;
        this.energy = 14;
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
    chooseCell1(num, num1) {
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

    chooseCell(num) {
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

    move() {
        var cell = random(this.chooseCell1(0, 1));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];

                this.energy -= 2;
                this.acted = true;
                if (this.energy <= 0) {
                    this.die();
                }
            }
        }
    }
    eat() {
        var cell = random(this.chooseCell(2));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.energy += 2;
                this.acted = true;
                if (this.energy > 18) {
                    this.mul();
                    this.energy = 10;
                }
            }
            else {
                this.move();
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatich(newX, newY, 3);

        }
    }
}



class Bomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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

class Explosiveanimal {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
    chooseCell(num, n) {
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
    die() {
        this.getNewCoordinates();
        for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                matrix[y][x] = 0;
                matrix[this.y][this.x] = 0;
            }
        }
    }
    move() {
        var cell = random(this.chooseCell(0, 0));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }
            }
        }
    }

    blast() {
        var cell = random(this.chooseCell(3, 1));
        this.getNewCoordinates();
        if (this.acted == false) {
            if (cell) {
                for (var i in this.directions2) {
                    var x = this.directions2[i][0];
                    var y = this.directions2[i][1];
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        matrix[y][x] = 0;
                        matrix[this.y][this.x] = 0;
                    }
                }
                this.acted = true;
            }
            else {
                this.eat();
            }
        }
    }
    eat() {
        var cell = random(this.chooseCell(1, 1));
        if (this.acted == false) {
            if (cell) {
                matrix[cell[1]][cell[0]] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = cell[0];
                this.y = cell[1];
                this.acted = true;
                this.energy++;
                if (this.energy >= 20) {
                    this.mul();
                    this.energy = 6;
                }
            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0, 1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Explosiveanimal(newX, newY, 5);

        }
    }
}


class worsord {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
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
    chooseCell(num) {
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
    krak() {
        var newCell = random(this.chooseCell(3));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 0;
        }
    }
}