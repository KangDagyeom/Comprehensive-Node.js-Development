class APIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
        this.name = 'APIError'

    }
}

// Handling async error
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

// The global error handler function
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof APIError) {
        return res.status(err.statusCode).json({
            status: 'Error',
            message: err.message
        })
    }

    else if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'Error',
            message: 'Validate Error'
        })
    }
    else {
        return res.status(500).json({
            status: 'Error',
            message: 'An error has occurred'
        })
    }
}