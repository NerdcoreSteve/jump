var R = require('ramda')

describe('convert_to_blocks', () => {  
    var convert_to_blocks = require('../front-end/js/convert_to_blocks.js')
    var char_key = require('../front-end/js/char_key.js')

    it('should return an array of objects the same length of the given string',
        () => expect(R.map((x) => typeof x, convert_to_blocks(char_key, '@ +^')))
            .toEqual(['object', 'object', 'object', 'object']))

    it('should return an array of objects with color, type, and position properties',
        () => expect(R.all((x) => false, convert_to_blocks(char_key, '@ +^')))
            .toEqual(true))
})
