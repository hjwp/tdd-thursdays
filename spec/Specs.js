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

  it("should be able to move forward once", function() {
    rover.x = 0;
    rover.y = 0;
    rover.direction = 'N';
    let char_array = ['f'];
    rover.move(char_array);
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(1);
    expect(rover.direction).toEqual('N');
  });

  it("should be able to move forward twice", function() {
    rover.x = 0;
    rover.y = 5;
    rover.direction = 'N';
    let char_array = ['f', 'f'];
    rover.move(char_array);
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(7);
    expect(rover.direction).toEqual('N');
  });

  it("should move backwards", function() {
    rover.x = 0;
    rover.y = 5;
    rover.direction = 'N';
    let char_array = ['b', 'b', 'b'];
    rover.move(char_array);
    expect(rover.y).toEqual(2);
  })

  it("should turn left", function() {
    rover.x = 0;
    rover.y = 5;
    rover.direction = 'N';
    rover.move(['l']);
    expect(rover.direction).toEqual('W');
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(5);
  })

  it("should really turn left", function() {
    rover.direction = 'N';
    rover.move(['l', 'l', 'l']);
    expect(rover.direction).toEqual('E');
  })

  it("should really really turn left", function() {
    rover.direction = 'N';
    rover.move(['l', 'l', 'l', 'l',]);
    expect(rover.direction).toEqual('N');
  })

});
