const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test 1',
    password: '2909',
    port: 5432,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', async (req, res) => {
    const { name, emi_amt, yearstopay, totalloan } = req.body;
    try {
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO emi_details (name, emi_amt, yearstopay, totalloan) VALUES ($1, $2, $3, $4)',
            [name, emi_amt, yearstopay, totalloan]
        );
        client.release();
        res.send('Record inserted successfully');
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).send('Error inserting record');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
