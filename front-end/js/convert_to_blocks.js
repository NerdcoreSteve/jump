var R = require('ramda')

module.exports = (char_key, level) =>
    R.pipe(
        R.split(''),
        R.map(() => ({})))
            (level)
