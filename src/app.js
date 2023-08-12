//this is my express app
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
const app = express();
import {
  getFlights,
  confirmBooking,
  confirmPaymentBookings,
} from "./controller/index.js";

app.use(bodyParser.json());

app.get("/flights", getFlights);

app.post("/confirm_booking", confirmBooking);

app.post("/confirm_payment_booking", confirmPaymentBookings);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
