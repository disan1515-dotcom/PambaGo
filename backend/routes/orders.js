const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get orders' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create order' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get order by id' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update order' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Cancel order' });
});

module.exports = router;
