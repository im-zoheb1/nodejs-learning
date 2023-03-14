// PATH MODULES - allows us to interact with file path easily
//

const path = require('path');

console.log(path.sep); // return platform specific separator


// path.join which is the join method - jions sequence of path using the platform specfic separator
//

const filePath = path.join('/content/', 'subfolder', 'text.txt');
// if only want the last portion of it
const base = path.basename(filePath);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)
