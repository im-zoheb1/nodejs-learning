const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFile("./content/subfolder/first.txt", "utf8");
        const second = await readFile("./content/subfolder/second.txt", "utf8");
        await writeFile("./content/subfolder/result-mind-granade.txt",
            `THIS IS AWESOME: ${first} ${second}`);
        console.log(first, second);
    } catch (err) {
        console.log(first);
    }
};

start();

// const getText = path => new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//         if (err) reject(err);
//         else resolve(data);
//     })
// })