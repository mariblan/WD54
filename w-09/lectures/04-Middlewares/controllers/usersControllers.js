import { pool } from "../DB/dbConnection.js";

const getUsers = async (req, res) => {
  try {
    pool.query("SELECT *  FROM users", (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length === 0) {
        return res.status(404).send("No users found");
      }
      res.status(200).json(results.rows);
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length === 0) {
        return res.status(404).send("No user found");
      }
      res.status(200).json(results.rows[0]);
    });
  } catch (error) {
    console.error(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send("Name and email are required");
    }
    pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          throw error;
        }
        if (results.rows.length > 0) {
          return res.status(400).send("User already exists");
        }
        pool.query(
          "INSERT INTO users (name, email) VALUES ($1, $2)",
          [name, email],
          (error, results) => {
            if (error) {
              throw error;
            }
            res.status(201).send("User created successfully");
          }
        );
      }
    );
  } catch (error) {
    console.error(error.message);
  }
};

export { getUsers, getUserById, createUser };
