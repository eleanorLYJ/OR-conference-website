require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

async function testDatabase() {
  let client;
  try {
    client = await pool.connect();
    console.log('Successfully connected to the database');

    // 檢查當前數據庫和 schema
    const dbInfoResult = await client.query(`
      SELECT current_database(), current_schema();
    `);
    console.log('Current database:', dbInfoResult.rows[0].current_database);
    console.log('Current schema:', dbInfoResult.rows[0].current_schema);

    // 列出所有表
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    console.log('Tables in the database:');
    console.table(tablesResult.rows);

    // 檢查 "documents" 表是否存在（不區分大小寫）
    // const tableCheckResult = await client.query(`
    //   SELECT EXISTS (
    //     SELECT FROM information_schema.tables 
    //     WHERE table_schema = 'public'
    //     AND lower(table_name) = lower('documents')
    //   );
    // `);

    // if (tableCheckResult.rows[0].exists) {
    //   console.log('The "documents" table exists');
      
      // 檢查表結構
    //   const tableStructureResult = await client.query(`
    //     SELECT column_name, data_type 
    //     FROM information_schema.columns 
    //     WHERE lower(table_name) = lower('documents');
    //   `);
      
    //   console.log('Table structure:');
    //   console.table(tableStructureResult.rows);

    //   // 嘗試查詢數據
    //   const queryResult = await client.query('SELECT * FROM documents LIMIT 5');
    //   console.log('Sample data:');
    //   console.table(queryResult.rows);

    // } else {
    //   console.log('The "documents" table does not exist');
    // }

  } catch (err) {
    console.error('Database test error:', err);
  } finally {
    if (client) {
      client.release();
    }
    await pool.end();
  }
}

testDatabase();