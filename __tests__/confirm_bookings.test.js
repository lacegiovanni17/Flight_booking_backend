const request = require("supertest");
const app = require("../src/app"); // Adjust the path as needed

describe("POST /confirm_booking", () => {
  it("should confirm a booking", async () => {
    const response = await request(app)
      .post("/confirm_booking")
      .send({ flightId: 1 });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Booking confirmed successfully");
  });

  it("should return 404 for invalid flight ID", async () => {
    const response = await request(app)
      .post("/confirm_booking")
      .send({ flightId: 999 });

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Flight not found");
  });
});

// Similar tests for other endpoints...
