const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'test 1',
    password: '2909',
    port: 5432, // Default PostgreSQL port
});

client.connect();

// Example query
client.query('SELECT * FROM student_2', (err, res) => {
    if (err) {
        console.error('Error executing query:', err);
    } else {
        console.log('Query result:', res.rows);
    }
    client.end();
});
