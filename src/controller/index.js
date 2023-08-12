//this is my entry file, it would import app from app.js. The implementation here is just to listen for requests on a specific port.
//BookingDatabase - Pascal case
//bookingDatababse - Camel case
//booking-database - Kebab case
import fs from "fs";
const flightsFilePath = "./database/flights.json";


export const getFlights = (req, res) => {
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

export const confirmBooking = (req, res) => {
  const { flightId } = req.body;

  fs.readFile(flightsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const flights = JSON.parse(data || "[]");
    const selectedFlight = flights.find((flight) => flight.id === flightId);

    if (!selectedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }

    // Store the booking information
    fs.readFile("./bookings.json", "utf8", (err, bookingsData) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const bookings = JSON.parse(bookingsData || "[]");
      bookings.push(selectedFlight);

      fs.writeFile(
        "./bookings.json",
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
};

export const confirmPaymentBookings = (req, res) => {
  const { flightId } = req.body;

  fs.readFile(flightsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const flights = JSON.parse(data || "[]");
    const selectedFlight = flights.find((flight) => flight.id === flightId);

    if (!selectedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }

      // Simulate payment processing (mock payment system)
      // For failed payments change by hard coding the value of the paymentStatus variable to string "failed"
    const paymentStatus = "confirmed";

    if (paymentStatus === "confirmed") {
      // Store the booking information
      fs.readFile("./database/bookings.json", "utf8", (err, bookingsData) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const bookings = JSON.parse(bookingsData || "[]");
        bookings.push(selectedFlight);

        fs.writeFile(
          "./database/bookings.json",
          JSON.stringify(bookings, null, 2),
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Internal Server Error" });
            }

            res
              .status(200)
              .json({ message: "Booking and payment confirmed successfully" });
          }
        );
      });
    } else {
      res.status(400).json({ error: "Payment failed" });
    }
  });
};
