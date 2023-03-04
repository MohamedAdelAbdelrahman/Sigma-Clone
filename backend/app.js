require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
// security packages
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const notFound = require('./middleware/notFound');
const connectDB = require('./db/connection');
const errorHandler = require('./middleware/errorHandler');
const { authenticateUser } = require('./middleware/authentication');

const app = express();
const fileUpload = require('express-fileupload');

// middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(fileUpload());

// routes
app.get('/', (req, res) => {
  console.log(req.signedCookies);
  res.send('SIGMA API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/products', productRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
