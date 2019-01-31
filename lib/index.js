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
    switch(this.direction) {
      case 'N': this.direction = 'W'; break;
      case 'W': this.direction = 'S'; break;
      case 'S': this.direction = 'E'; break;
      case 'E': this.direction = 'N'; break;
    }
  }
}
module.exports = {
  rover
};
