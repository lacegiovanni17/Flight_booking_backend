const request = require("supertest");
const app = require("../src/app"); // Adjust the path as needed

describe("GET /flights", () => {
  it("should retrieve available flights", async () => {
    const response = await request(app).get("/flights").query({
      departure: "City A",
      destination: "City B",
      date: "2023-08-15",
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should return empty array for invalid query", async () => {
    const response = await request(app).get("/flights").query({
      departure: "Invalid City",
      destination: "Invalid City",
      date: "2023-08-15",
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

// Similar tests for other endpoints...
