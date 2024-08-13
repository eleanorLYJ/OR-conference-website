import { pool } from '@/lib/pg';
import bcrypt from 'bcrypt';


export async function findUserByEmailAndPassword(email, password) {
  try {
    // Query the database for a user with the provided email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      // No user found with the given email
      return null;
    }
    const user = result.rows[0];
    console.log("user in lib/auth.js: ", user)

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      // Password does not match
      return null;
    }
    // Return the user if both email and password match
    return user;
  } catch (error) {
    console.error('Error finding user by email and password:', error);
    throw new Error('Internal server error');
  }
}
