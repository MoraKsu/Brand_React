const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const cartDataPath = path.join(__dirname, 'cartData.json');

app.use(bodyParser.json());

// Middleware to read cart data
const readCartData = () => {
  const data = fs.readFileSync(cartDataPath);
  return JSON.parse(data);
};

// Middleware to write cart data
const writeCartData = (data) => {
  fs.writeFileSync(cartDataPath, JSON.stringify(data, null, 2));
};

// Get cart items
app.get('/api/cart', (req, res) => {
  const cart = readCartData();
  res.json(cart);
});

// Add item to cart
app.post('/api/cart', (req, res) => {
  const cart = readCartData();
  const newItem = req.body;
  cart.push(newItem);
  writeCartData(cart);
  res.status(201).json(newItem);
});

// Update item quantity
app.put('/api/cart/:id', (req, res) => {
  const cart = readCartData();
  const { id } = req.params;
  const { quantity } = req.body;
  const itemIndex = cart.findIndex(item => item.id === parseInt(id));

  if (itemIndex !== -1) {
    cart[itemIndex].quantity = quantity;
    writeCartData(cart);
    res.json(cart[itemIndex]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Remove item from cart
app.delete('/api/cart/:id', (req, res) => {
  const cart = readCartData();
  const { id } = req.params;
  const newCart = cart.filter(item => item.id !== parseInt(id));

  if (newCart.length !== cart.length) {
    writeCartData(newCart);
    res.json({ message: 'Item removed' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
