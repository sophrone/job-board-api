const request = require("supertest");
const app = require("../server");
const db = require("../db");

describe("Auth Routes", () => {
  // Optional: Setup a user before tests run
  beforeAll(async () => {
    await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
    });
  });

  afterAll(async () => {
    // Clean up and close the database connection
    if (db && db.destroy) {
      await db.destroy();
    }
  });

  it("should register a new user", async () => {
    const response = await request(app).post("/api/auth/register").send({
      username: "newuser",
      email: "newuser@example.com",
      password: "password123",
    });

    expect(response.status).toBe(201); // Expect a 201 status code
    expect(response.body).toHaveProperty("id"); // Expect the response to contain the user ID
  });

  it("should login an existing user", async () => {
    const response = await request(app).post("/api/auth/login").send({
      username: "testuser",
      password: "password123",
    });

    expect(response.status).toBe(200); // Expect a 200 status code
    expect(response.body).toHaveProperty("token"); // Expect the response to contain a token
  });

  it("should not login with incorrect credentials", async () => {
    const response = await request(app).post("/api/auth/login").send({
      username: "testuser",
      password: "wrongpassword",
    });

    expect(response.status).toBe(401); // Expect a 401 status code for unauthorized
  });
});
