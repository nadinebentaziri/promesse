const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const Car= require('../models/Car');

const carRouter = express.Router();

//Create Car
carRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const car = await Car.create(req.body);

    if (car) {
      res.status(200);
      res.json(car);
    } else {
      res.status(500);
      throw new Error('car creating failed');
    }
  })
);

//Create car
carRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const car = await Car.find({});

    if (car) {
      res.status(200);
      res.json(cars);
    } else {
      res.status(500);
      throw new Error('There are no cars');
    }
  })
);

carRouter.put(
  '/:id',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id);

    if (car) {
      const updatedCar = await Car.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200);
      res.json(updatedCar);
    } else {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

carRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    try {
      const car = await Car.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(car);
    } catch (error) {
      res.json(error);
    }
  })
);

module.exports = carRouter;
