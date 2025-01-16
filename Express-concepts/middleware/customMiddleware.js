const requestLogger = (req, res, next) => {
    // Note down the request details
    const timeStamp = new Date().toISOString();
    const method = req.method
    const url = req.url
    const userAgent = req.get('User-Agent');
    console.log(`[${timeStamp}] ${method} ${url} - ${userAgent}`);
    // Call the next middleware function
    next();
};

const addTimeStamp = (req, res, next) => {
    // Note down the request finished time 
    req.timeStamp = new Date().toISOString()
    next();
};

module.exports = { requestLogger, addTimeStamp };