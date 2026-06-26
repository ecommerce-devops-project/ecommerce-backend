const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
  },
  {
    id: 2,
    name: 'Mobile',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1518443895914-5d8b2e6b9a6f'
  }
];

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;

  newProduct.id = products.length + 1;

  // fallback image
  newProduct.image =
    newProduct.image || 'https://via.placeholder.com/300';

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/health',(req, res)=>{
  res.status(200).json({
    status:'UP'
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




