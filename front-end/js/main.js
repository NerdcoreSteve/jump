var convert_to_blocks = require('./convert_to_blocks.js')

var ctx = document.getElementById('jump-canvas').getContext('2d')

var char_key = {
    player: '@',
    wallfloor: '+',
    lava: '^',
    empty_space: ' '
}

var level_1 = '@   ++ ^^'

convert_to_blocks(char_key, level_1)

ctx.fillStyle = '#FF0000'
ctx.fillRect(0,0,150,75)
