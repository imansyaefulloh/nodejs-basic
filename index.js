const http = require('http');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

// create an event handler
let myEventHandler = () => console.log('I hear a scream');

// assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// call the 'scream' event
eventEmitter.emit('scream');