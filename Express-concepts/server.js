require("dotenv").config();

const express = require("express");

const { globalErrorHandler } = require("./middleware/errorHandler");
const { configureCors } = require("./config/cors.config");
const {
  requestLogger,
  addTimeStamp,
} = require("./middleware/customMiddleware");
const { urlVersion } = require('./middleware/apiVersioning');
const { createBasicRateLimit } = require('./middleware/rateLimiting');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
app.use(addTimeStamp);
app.use(createBasicRateLimit(100, 15 * 60 * 1000)) // 100 requests per 15 minutes
app.use(express.json());
app.use(configureCors());

app.use('/api/v1', urlVersion('v1'));
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
