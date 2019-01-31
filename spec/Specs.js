require('jasmine');
const ourModule = require('../lib/index.js')

describe("A feature", () => {
  let rover;

  beforeEach(function() {
    rover = ourModule.rover;
  });

  it("should start at zero", function() {
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(0);
  });
});
