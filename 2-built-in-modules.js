// BUILT IN MODULES
//
// OS, PATH, FS, HTTP
//
// OS MODULE - providas properties and methods for interacting with operating system and servers

const os = require('os');

// info about the current user
const user = os.userInfo()

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log("currentOs");
