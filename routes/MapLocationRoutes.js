import express, { request, response } from "express";
import { MapLocation } from "../models/map_location.js";

const MapLocationRouter = express.Router();

MapLocationRouter.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.phoneNumber ||
      !req.body.from ||
      !req.body.to ||
      !req.body.NOcar
    ) {
      res.status(400).send({ message: "Send all required fields!" });
    } else {
      const newMap = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        from: req.body.from,
        to: req.body.to,
        NOcar: req.body.NOcar,
      };
      const map_location = await MapLocation.create(newMap);
      res.status(201).send(map_location);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

MapLocationRouter.get("/", async (req, res) => {
  try {
    const map_location = await MapLocation.find({});
    return res.status(200).json({
      count: map_location.length,
      data: map_location,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

MapLocationRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const map_location = await MapLocation.findById(id);
    res.status(200).json(map_location);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

MapLocationRouter.put("/:id", async (request, response) => {
  try {
    if (
        !req.body.name ||
        !req.body.phoneNumber ||
        !req.body.from ||
        !req.body.to ||
        !req.body.NOcar
    ) {
      response.status(400).send({ message: "Send all required fields!" });
    } else {
      const newMap = {
        name: request.body.name,
        phoneNumber: request.body.phoneNumber,
        from: request.body.from,
        to: request.body.to,
        NOcar: request.body.NOcar,
      };
      const { id } = request.params;
      const map_location = await MapLocation.findByIdAndUpdate(id, newMap);
      response.status(200).send(map_location);
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

MapLocationRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Driver.findByIdAndDelete(id);
    if (result) {
      res.status(200).send({ message: "Successfully deleted!" });
    }
    if (!result) {
      res.status(404).send({ message: "Location not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default MapLocationRouter;
