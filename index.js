import express from "express";
import cors from "cors";
import driverRouter from "./routes/driverRoutes.js";
import passengerRouter from "./routes/passengerRoutes.js"
import MapLocationRouter from "./routes/MapLocationRoutes.js";
import feedbackRouter from "./routes/feedbackRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Obby is working here");
});

app.use("/drivers", driverRouter);
app.use("/passengers",passengerRouter);
app.use("/map_location",MapLocationRouter);
app.use("/feedback",feedbackRouter)

mongoose
  .connect(
    "mongodb+srv://TukTukDriver:linmobile2018@cluster0.vad8cmc.mongodb.net/Driver?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Obby now get the Data");
    app.listen(3000, () => {
      console.log("Obby is listening to port-[3000]");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
