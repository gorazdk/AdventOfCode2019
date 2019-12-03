let day01 = require("./day01");

module.exports = function(arrayOfValues)
{
    return arrayOfValues
        .map(v => Number(v))
        .map(v => addedFuel(v))
        .reduce( (p, c) => Math.round(p+c) );
}

function addedFuel(v)
{
    let currentV = v;
    let sum = 0;
    while (currentV > 0)
    {
        currentV =  day01([currentV]);
        sum += currentV;
    }

    return sum;
}