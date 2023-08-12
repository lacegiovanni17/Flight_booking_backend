//this is my express app
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());

const flightsFilePath = "./database/flights.json";

app.get("/flights", );

app.post("/confirm_booking", (req, res) => {
  const { flightId } = req.body;

  fs.readFile(flightsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const flights = JSON.parse(data);
    const selectedFlight = flights.find((flight) => flight.id === flightId);

    if (!selectedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }

    // Store the booking information
    fs.readFile("./database/bookings.json", "utf8", (err, bookingsData) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const bookings = JSON.parse(bookingsData);
      bookings.push(selectedFlight);

      fs.writeFile(
        "./database/bookings.json",
        JSON.stringify(bookings, null, 2),
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          res.status(200).json({ message: "Booking confirmed successfully" });
        }
      );
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
