const db = require("../db");

// Function to register a new user
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await db
      .select()
      .from("users")
      .where("username", username)
      .execute();

    console.log("Existing User Check:", existingUser); // Log the existing user check

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Insert new user using raw SQL for testing
    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;`;

    const params = [username, email, password];

    // Execute the query directly
    const newUser = await db.execute(query, params);

    console.log("New User Created:", newUser); // Log the newly created user
    res.status(201).json(newUser.rows[0]); // Send the created user back
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

// Function to log in a user
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Retrieve user by username
    const user = await db
      .select()
      .from("users")
      .where("username", username)
      .execute();

    console.log("User Retrieved:", user); // Log the retrieved user

    if (user.length === 0 || user[0].password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a token
    const token = "your_generated_token"; // Replace with actual token generation logic
    console.log("User Logged In:", user[0]); // Log the logged-in user
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to login" });
  }
};

module.exports = { register, login };
