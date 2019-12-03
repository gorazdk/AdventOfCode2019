let assert = require("assert");

describe("Day 01", function() {
    let day01 = require("../day01");
    it("Should pass scenarios", function() {
        assert.equal(day01(["12"]), 2);
        assert.equal(day01(["14"]), 2);
        assert.equal(day01(["1969"]), 654);
        assert.equal(day01(["100756"]), 33583);

    });
});