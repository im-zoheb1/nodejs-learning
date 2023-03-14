const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log('date recieved', name, id);
})

customEmitter.on('response', (name, id) => {
    console.log('some other logic here', name, id);
})

customEmitter.emit('response', 'john', 33);