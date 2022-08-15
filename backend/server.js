const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const carRouter = require('./routes/carRoutes');
dotenv.config();
require('./config/dbConnect')();

const app = express();

//Passing body data
app.use(express.json());

//Routes
//Users
app.use('/api/users', usersRoute);
//cars
app.use('/api/cars', carRouter);

//Error middleware
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});
