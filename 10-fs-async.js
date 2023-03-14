const { readFile, writeFile } = require("fs");

// the code below makes a call back hell

// the way the synchronous method works, we need to provide the callback
// we run that callback when we are done

// the first parameter in callback is error, and the other one is result
// if we don't provide the utf we get the buffer
readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/subfolder/result-async.txt", `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
});