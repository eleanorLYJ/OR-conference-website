import { sendEmail } from '@/utils/email';
import { generateTemporaryPassword } from '@/utils/password';
import { findUserByEmailAndUsername, updateUserPassword } from '@/utils/user';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, username } = req.body;

    try {
      // Validate email and username
      const user = await findUserByEmailAndUsername(email, username);
      if (!user) {
        // Send a generic response to avoid revealing user existence
        return res.status(200).json({ message: 'If your information is correct, an email containing a temporary password has been sent to your inbox.' });
      }

      // Generate a temporary password
      const tempPassword = generateTemporaryPassword();

      // Update the user's password and set an expiration time (e.g., 1 hour)
      await updateUserPassword(user.id, tempPassword);

      // Send the temporary password via email
      await sendEmail(email, 'Reset Password', `your temporary password: ${tempPassword}\nPlease use this password to login and change it immediately.`);

      // Respond with a success message
      return res.status(200).json({ message: 'If your information is correct, an email containing a temporary password has been sent to your inbox.' });
    } catch (error) {
      console.error('Error in forgot password handler:', error);
      return res.status(500).json({ message: 'Server error, please try again later' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
