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
        }
    })
}