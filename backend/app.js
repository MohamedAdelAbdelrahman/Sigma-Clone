require('dotenv').config();
const express = require('express');
const cors = require('cors');
// security packages
const helmet = require('helmet');
const xss = require('xss-clean');

const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoutes');
const connectDB = require('./db/connection');
// const orderRouter = require('./routes/orderRoutes');
const notFound = require('./middleware/notFound');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());

// routes
app.get('/', (req, res) => {
  res.send('E-commerce API');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/product', productRouter);
// app.use('/api/v1/order', orderRouter);

app.use(notFound);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
