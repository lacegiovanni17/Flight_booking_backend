//this is my entry file, it would import app from app.js. The implementation here is just to listen for requests on a specific port.
//BookingDatabase - Pascal case
//bookingDatababse - Camel case
//booking-database - Kebab case
const fs = require("fs");

const getFlights = (req, res) => {
  const { departure, destination, date } = req.query;

  fs.readFile(flightsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const flights = JSON.parse(data);
    const filteredFlights = flights.filter(
      (flight) =>
        flight.departure === departure &&
        flight.destination === destination &&
        flight.date === date
    );

    res.json(filteredFlights);
  });
};



module.export getFlights()