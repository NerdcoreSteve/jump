describe('convert_to_blocks', () => {  
    var convert_to_blocks = require('../front-end/js/convert_to_blocks.js')

    var char_key = {
        player: '@',
        wallfloor: '+',
        lava: '^',
        empty_space: ' '
    }

    var level_1 = '@   ++ ^^'

    it('should return an object',
        () => expect(typeof convert_to_blocks(char_key, level_1)).toEqual('object'))
})
