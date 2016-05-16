var R = require('ramda')

describe('convert_to_blocks', () => {  
    var convert_to_blocks = require('../front-end/js/convert_to_blocks.js')
    var char_key = require('../front-end/js/char_key.js')

    it('should return an array of objects the same length of the given string',
        () => expect(R.map((block) => typeof block, convert_to_blocks(char_key, '@ +^')))
            .toEqual(['object', 'object', 'object', 'object']))

    it('should return an array of objects with color, type, and position properties',
        () => expect(
            R.all((block) =>
                R.has('color', block) && R.has('type', block) && R.has('position', block),
                convert_to_blocks(char_key, '@ +^')))
                    .toEqual(true))

    it('should return an array of objects with color as a hex value',
        () => expect(
            R.all(
                (block) =>
                    block.color.match(/^#[A-F0-9]{6}$/),
                convert_to_blocks(char_key, '@ +^')))
                    .toEqual(true))

    it('should return an array of objects with position as a value of an array of length 2',
        () => expect(
            R.all(
                (block) =>
                    false,
                convert_to_blocks(char_key, '@ +^')))
                    .toEqual(true))
})
