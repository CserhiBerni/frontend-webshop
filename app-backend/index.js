import express from "express";
import cors from 'cors';
import mysql from 'mysql2';

const app = express();

app.use(cors())

app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'megaprojekt'
}).promise();

app.get('/products', async (req, res) => {

    try {
        const temp = await db.query('SELECT * FROM products');
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch (error) {
        console.error(`Error retrieving products ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const temp = await db.query('SELECT * FROM products WHERE id = ?', [productId]);
        const rows = temp[0];

        if (rows.length === 0) {
            return res.status(404).json({ error: `Product not found with id: ${productId}` });
        }

        res.status(200).json(rows[0]); 
    } catch (error) {
        console.error(`Error retrieving product with id ${productId}: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post('/products', async (req, res) => {
    try {
        let productData = [
            req.body.brand,
            req.body.model,
            req.body.ram,
            req.body.storage,
            req.body.price
        ];

        if (!productData[0] || productData[0].length < 1) {
            return res.status(400).json({ error: "Brand must have at least 1 character" });
        }
        if (!productData[1] || productData[1].length < 1) {
            return res.status(400).json({ error: "Model must have at least 1 character" });
        }
        if (!productData[2] || productData[2].length < 1) {
            return res.status(400).json({ error: "RAM size must have at least 1 character" });
        }
        if (!productData[3] || productData[3].length < 1) {
            return res.status(400).json({ error: "Storage must have at least 1 character" });
        }
        if (isNaN(productData[4]) || parseFloat(productData[4]) <= 0) {
            return res.status(400).json({ error: "Price must be a valid number greater than 0" });
        }

        const [rows, fields] = await db.query(`
            INSERT INTO products (brand, model, ram, storage, price)
            VALUES (?,?,?,?,?)`, productData
        );

        res.status(200).json({ message: 'Product successfully added!' });

    } catch (error) {
        console.error(`Error adding product: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.delete('/products/:productId', async (req, res) => {
    try {
        let productId = parseInt(req.params.productId);
        const [rows, fields] = await db.query('DELETE FROM products WHERE id =?', [productId]);
        if (rows.length === 0) {
            res.status(404).json({ error: "Product not found" });
        } else {
            res.status(200).json({ message: "Product successfully removed" });
        }
 
    } catch (error) {
        console.error(`Error retrieving products ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(3000);
