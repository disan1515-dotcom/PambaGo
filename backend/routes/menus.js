const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get menus' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create menu' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get menu by id' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update menu' });
});

module.exports = router;
