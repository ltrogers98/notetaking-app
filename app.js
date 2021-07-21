const chalk = require('chalk')
const getNotes = require('./notes.js')
const myNotes = getNotes()
console.log(myNotes)

console.log(chalk.green('Success!'))


//Old code from tutorial part of lesson 
// const add = require('./utils.js')

// const sum = add(4, -2)


// console.log(sum)