import {thing} from '../lib/index.js'
import {describe, expect, it} from 'jasmine';

describe("A feature", () => {
  let add;

  beforeEach(function() {
    add = thing.add;
  });

  it("should be able to do maths", function() {
    expect(add(2, 2)).toEqual(3);
  });
});
