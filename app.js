const validator = require('validator')
const getNotes = require('./notes.js')



const myNotes = getNotes()


console.log(myNotes)

console.log(validator.isURL('https:/mead.io'))

//Old code from tutorial part of lesson 
// const add = require('./utils.js')

// const sum = add(4, -2)


// console.log(sum)