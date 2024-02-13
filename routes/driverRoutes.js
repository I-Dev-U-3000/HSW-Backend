import express, { request, response } from "express";
import { Driver } from "../models/driverModel.js";

const driverRouter = express.Router();

driverRouter.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.userName ||
      !req.body.password ||
      !req.body.phoneNumber ||
      !req.body.licenseNo ||
      !req.body.NRC ||
      !req.body.address
    ) {
      res.status(400).send({ message: "Send all required fields!" });
    } else {
      const newDriver = {
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        licenseNo: req.body.licenseNo,
        NRC: req.body.NRC,
        address: req.body.address,
      };
      const driver = await Driver.create(newDriver);
      res.status(201).send(driver);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

driverRouter.get("/", async (req, res) => {
  try {
    const drivers = await Driver.find({});
    return res.status(200).json({
      count: drivers.length,
      data: drivers,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

driverRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findById(id);
    res.status(200).json(driver);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

driverRouter.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.userName ||
      !request.body.password ||
      !request.body.phoneNumber ||
      !request.body.licenseNo ||
      !request.body.NRC ||
      !request.body.address
    ) {
      response.status(400).send({ message: "Send all required fields!" });
    } else {
      const newDriver = {
        name: request.body.name,
        userName: request.body.userName,
        password: request.body.password,
        phoneNumber: request.body.phoneNumber,
        licenseNo: request.body.licenseNo,
        NRC: request.body.NRC,
        address: request.body.address,
      };
      const { id } = request.params;
      const driver = await Driver.findByIdAndUpdate(id, newDriver);
      response.status(200).send(driver);
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

driverRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Driver.findByIdAndDelete(id);
    if (result) {
      res.status(200).send({ message: "Successfully deleted!" });
    }
    if (!result) {
      res.status(404).send({ message: "Driver not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default driverRouter;
