class rover {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 'N';
  }
  move(char_array) {
    char_array.forEach(char => {
        switch(char) {
            case 'f': this.y++; break;
            case 'b': this.y--; break;
            case 'l': this.turnLeft(); break;
        }
    });
  }
  turnLeft() {
    if (this.direction === 'N') {
        this.direction = 'W';
    } else {
        this.direction = 'E'
    }
  }
}
module.exports = {
  rover
};
