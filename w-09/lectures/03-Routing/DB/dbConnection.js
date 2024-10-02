import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    console.log("PostgreSQL version:", result.rows[0].version);
  } finally {
    client.release();
  }
}

export { pool, getPgVersion };
