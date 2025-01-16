require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { globalErrorHandler } = require('./middleware/errorHandler')
const { configureCors } = require('./config/cors.config');
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware');
const app = express();
const PORT = process.env.PORT || 3000

app.use(requestLogger);
app.use(addTimeStamp);
app.use(express.json);
app.use(configureCors());
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);

})