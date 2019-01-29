require('jasmine');
const ourModule = require('../lib/index.js')

describe("A feature", () => {
  let add;

  beforeEach(function() {
    add = ourModule.add;
  });

  it("should be able to do maths", function() {
    expect(add(1, 2)).toEqual(3);
  });
});
