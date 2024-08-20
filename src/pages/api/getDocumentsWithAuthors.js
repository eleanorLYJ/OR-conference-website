import { pool } from '@/lib/pg';

export default async function handler(req, res) {
  try {
    const { userId } = req.query;
    if (!userId || isNaN(parseInt(userId))) {
        return res.status(400).json({ error: 'Valid User ID is required' });
    }
    const parsedUserId = parseInt(userId);
    const client = await pool.connect();
    console.log("userId before step 1", parsedUserId)
    // Step 1: Find all documents where the user is an author
    const documentsResult = await client.query(`
        SELECT id, title, authors
        FROM documents
        WHERE $1::text = ANY(regexp_split_to_array(trim(both '{}' from replace(replace(authors, '[', ''), ']', '')), ','))
      `, [parsedUserId]);

    console.log("documentsResult.rows:", documentsResult.rows);

    if (documentsResult.rows.length === 0) {
        console.log("No documents found for user: ", parsedUserId);
        return res.status(404).json({ error: 'No documents found for this user' });
    }
    console.log("documentsResult", documentsResult)
    let documentsWithAuthors = {}
    // documentsWithAuthors = await Promise.all(documentsResult.rows.map(async (doc) => {
    //     console.log("Processing document:", doc);
    //     const authorIds = doc.authors.replace(/[{}]/g, '').split(',').map(id => {
    //         const parsedId = parseInt(id.trim());
    //         if (isNaN(parsedId)) {
    //             console.log("Invalid author ID:", id);
    //             return null;
    //         }
    //         return parsedId;
    //     }).filter(id => id !== null);
    //     console.log("Parsed authorIds:", authorIds);
    //     if (authorIds.length > 0) {
    //         const authorsResult = await client.query(`
    //           SELECT id, english_name
    //           FROM users
    //           WHERE id = ANY($1)
    //         `, [authorIds]);
    //         console.log("authorsResult.rows:", authorsResult.rows);
    //         return {
    //           ...doc,
    //           authors: authorsResult.rows
    //         };
    //     } else {
    //         console.log("No valid author IDs found for document:", doc.id);
    //         return {
    //           ...doc,
    //           authors: []
    //         };
    //     }
    // }));
      client.release();

      res.status(200).json(documentsWithAuthors);
    } catch (error) {
      console.error('Error fetching documents or authors:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
// Step 2: Fetch all authors' English names for these documents
// const authorsResult = await client.query(`
//   SELECT id, english_name
//   FROM users
//   WHERE id = ANY(
//     SELECT unnest(regexp_split_to_array(trim(both '{}' from authors), ',')::int[])
//     FROM documents
//     WHERE id = ANY($1)
//   )
// `, [documentIds]);
//     client.release();

//     const documentsWithAuthors = documents.map(doc => ({
//       ...doc,
//       authors: authorsResult.rows
//     }));

//     res.status(200).json(documentsWithAuthors);
//   } catch (error) {
//     console.error('Error fetching documents or authors:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
