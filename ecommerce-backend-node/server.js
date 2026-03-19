const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});


app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 3000 }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
