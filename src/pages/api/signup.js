// pages/api/signup.js
import { pool } from '@/lib/pg';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    
    const { username, email, password } = req.body;

    try {
        console.log('Attempting to hash password');
        const hashedPassword = await bcrypt.hash(password, 10);
        
        console.log('Attempting to insert user into database');
        const result = await pool.query(
          'INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id',
          [username, email, hashedPassword, 'user']
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
