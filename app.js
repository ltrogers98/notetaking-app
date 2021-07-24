//Import modules
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//custome yargs version
yargs.version('1.1.0')

//Set up yargs functionaility
//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})
//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note')
    }
})
//List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing notes')
    }
})
//
//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})
//Get command
//const command = process.argv[2]

console.log(yargs.argv)


