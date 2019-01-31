class rover {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 'N';
  }
  move(char_array) {
       this.y += char_array.length;
  }
}
module.exports = {
  rover
};
