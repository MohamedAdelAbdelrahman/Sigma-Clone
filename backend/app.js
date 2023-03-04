require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
// security packages
const helmet = require('helmet');
const xss = require('xss-clean');

const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoutes');
// const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');
const connectDB = require('./db/connection');
const notFound = require('./middleware/notFound');

const errorHandler = require('./middleware/errorHandler');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const fileUpload = require('express-fileupload');

// middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(fileUpload());

// routes
app.get('/', (req, res) => {
  res.send('E-commerce API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authMiddleware, userRouter);
app.use('/api/v1/products', productRouter);
// app.use('/api/v1/order', authMiddleware, orderRouter);

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
