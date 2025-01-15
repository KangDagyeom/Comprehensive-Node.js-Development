const cors = require('cors')

const configureCors = () => {
    return cors({
        origin: (origin, callback) => {
            const allowedOrigin = [
                'http://localhost:3000',
                'http://yourcustomdomain.com'
            ]
            if (!origin || allowedOrigin.indexOf(origin) !== -1) {
                callback(null, true)
            }
            else {
                callback(new Error('Not allowed by cors'))
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept Version'
        ],
        exposedHeaders: [
            'X-Total-Count',
            'Content-Range'
        ],
        credentials: true,
        preflightContinue: false,
        maxAge: 600,
        optionsSuccessStatus: 204
    })
}

module.exports = { configureCors }