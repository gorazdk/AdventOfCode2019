let assert = require("assert");

describe("Day 01'2", function() {
    let day01 = require("../day01'2");
    it("Should pass scenarios", function() {
        assert.equal(day01(["14"]), 2);
        assert.equal(day01(["1969"]), 966);
        assert.equal(day01(["100756"]), 50346);

    });
});