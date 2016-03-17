'use strict'

let dragon = 
  name =>
    size => 
      element =>
	  name + ' is a ' +
	  size + ' dragon that breathes ' + 
	  element + '!'

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')
console.log(tinyDragon('ice'))
