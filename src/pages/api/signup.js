// pages/api/signup.js
import { pool } from '@/lib/pg';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { username, email, password, jobTitle, unit, country } = req.body;
    console.log("user", username, email, password, jobTitle, unit, country)
    if (!username || !email || !password || !jobTitle || !unit || !country) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const User = await pool.query('SELECT * FROM users WHERE username = $1 AND email = $2 AND password_hash IS NULL', [username, email]);
    if (User.rows.length > 0) {
      await pool.query(
        'UPDATE users SET password_hash = $1 WHERE id = $2',
          [hashedPassword, User.rows[0].id]
        );
        return res.status(200).json({ message: 'User updated successfully', userId: User.rows[0].id });
    }
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1 AND email = $2', [username, email]);
    if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: 'Username or email already exists'});
    }
    try {
        console.log('Attempting to hash password');
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
          'INSERT INTO users (username, email, password_hash, job_title, unit, country, role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
          [username, email, hashedPassword, jobTitle, unit, country, 'user']
        );
    
        console.log('User inserted successfully', result);
        res.status(201).json({ message: 'User created successfully', userId: result.rows[0].id });
      } catch (error) {
        console.error('Error in signup process:', error);
        if (error.code === '23505') { // PostgreSQL unique constraint violation error code
          if (error.constraint === 'users_username_key') { // Check if the error is due to a duplicate username
            return res.status(400).json({ message: 'Username already exists' });
          } else if (error.constraint === 'users_email_key') {
            return res.status(400).json({ message: 'Email already exists' });
          }
        }
        res.status(500).json({ message: 'Error creating user', error: error.message });
      }
    }
