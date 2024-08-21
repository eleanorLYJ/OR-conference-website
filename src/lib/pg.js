// lib/db.js
import { Pool } from 'pg';

console.log('Database connection details:');
console.log('Host:', process.env.PG_HOST);
console.log('Database:', process.env.PG_DATABASE);
console.log('User:', process.env.PG_USER);
console.log('Port:', process.env.PG_PORT);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// export const query = (text, params) => pool.query(text, params);
export { pool };

