import express, { request, response } from "express";
import { Driver } from "../models/driverModel.js";
import { DriverLocation } from "../models/driver_location.js";

const driverLocationRouter = express.Router();

driverLocationRouter.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.phoneNumber ||
      !req.body.latitude ||
      !req.body. longitude||
      !req.body.licenseNo
    ) {
      res.status(400).send({ message: "Send all required fields!" });
    } else {
      const newDriver = {
        name: req.body.name,
        userName: req.body.phoneNumber,
        password: req.body.latitude,
        phoneNumber: req.body.longitude,
        licenseNo: req.body.licenseNo,
      };
      const driverLocation = await DriverLocation.create(newDriverLocation);
      res.status(201).send(driverLocation);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

driverLocationRouter.get("/", async (req, res) => {
  try {
    const driverLocations = await DriverLocation.find({});
    return res.status(200).json({
      count: driverLocations.length,
      data: driverLocations,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

driverLocationRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driverLocation = await DriverLocation.findById(id);
    res.status(200).json(driverLocation);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

driverLocationRouter.put("/:id", async (request, response) => {
  try {
    if (
        !req.body.name ||
        !req.body.phoneNumber ||
        !req.body.latitude ||
        !req.body. longitude||
        !req.body.licenseNo
    ) {
      response.status(400).send({ message: "Send all required fields!" });
    } else {
      const newDriverLocation = {
        name: req.body.name,
        userName: req.body.phoneNumber,
        password: req.body.latitude,
        phoneNumber: req.body.longitude,
        licenseNo: req.body.licenseNo,
      };
      const { id } = request.params;
      const driverLocation = await DriverLocation.findByIdAndUpdate(id, newDriverLocation);
      response.status(200).send(driverLocation);
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

driverLocationRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await DriverLocation.findByIdAndDelete(id);
    if (result) {
      res.status(200).send({ message: "Successfully deleted!" });
    }
    if (!result) {
      res.status(404).send({ message: "Driver Location not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default driverLocationRouter;
