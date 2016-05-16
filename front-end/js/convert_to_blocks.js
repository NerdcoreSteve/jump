var R = require('ramda')

var converter = R.curry((char_key, c) =>
    R.pipe(
    R.prop(R.__, char_key),
    R.assoc('position', [0, 0]))
        (c))

module.exports = (char_key, level) =>
    R.pipe(
        R.split(''),
        R.map(converter(char_key)))
            (level)
