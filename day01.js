module.exports = function(arrayOfValues)
{
    return arrayOfValues
        .map(v => Number(v))
        .map(v => Math.round(Math.floor(v / 3) - 2))
        .reduce( (p, c) => Math.round(p+c) );
}