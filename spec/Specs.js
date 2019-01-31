require('jasmine');
const ourModule = require('../lib/index.js')

describe("A feature", () => {
  let rover;

  beforeEach(function() {
    rover = new ourModule.rover();
  });

  it("should start at zero and face north", function() {
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(0);
    expect(rover.direction).toEqual('N');
  });

  it("should be able to receive a char array to move", function() {
    rover.x = 0;
    rover.y = 0;
    rover.direction = 'N';
    let char_array = ['f'];
    rover.move(char_array);
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(1);
    expect(rover.direction).toEqual('N');
  });

});
