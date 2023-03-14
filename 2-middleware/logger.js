const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // when working with middleware must pass a next middleware
    // unless you are terminating the whole cycle by sending back the repsonse
    next();
};

module.exports = logger;