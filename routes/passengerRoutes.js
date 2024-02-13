import express, { request, response } from "express";

import { P_acc } from "../models/p_acc_model.js";

const passengerRouter = express.Router();

passengerRouter.post("/", async (req, res) => {
    try {
      if (
        !req.body.name||
        !req.body.phoneNumber ||
        !req.body.password
      ) {
        res.status(400).send({ message: "Send all required fields!" });
      } else {
        const newPassenger = {
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password
        };
        const passenger = await P_acc.create(newPassenger);
        res.status(201).send(passenger);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
passengerRouter.get("/", async (req, res) => {
  try {
    const passengers = await P_acc.find({});
    return res.status(200).json({
      count: passengers.length,
      data: passengers,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

passengerRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const passenger = await P_acc.findById(id);
    res.status(200).json(passenger);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});




export default passengerRouter;