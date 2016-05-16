var convert_to_blocks = require('./convert_to_blocks.js')
var char_key = require('./char_key.js')

var ctx = document.getElementById('jump-canvas').getContext('2d')

var level_1 = '@   ++ ^^'

convert_to_blocks(level_1)

ctx.fillStyle = '#FF0000'
ctx.fillRect(0,0,150,75)
