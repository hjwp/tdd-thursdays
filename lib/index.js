class rover {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 'N';
  }
  move(char_array) {
    char_array.forEach(char => {
      if (char === 'f') {
        this.y++;
      }
      else if(char === 'b'){
        this.y--;
      }
      else if(char === 'l'){
        this.direction = 'W';
      }
    });
  }
}
module.exports = {
  rover
};
