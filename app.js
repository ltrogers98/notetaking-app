//Import modules
const chalk = require('chalk')
const getNotes = require('./notes.js')

//Get command
const command = process.argv[2]


//Print Command to console
if (command === 'add') {
        console.log('Adding note')
} else if (command === 'remove') {
    console.log('Removing note')
}