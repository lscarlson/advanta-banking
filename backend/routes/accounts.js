const express = require('express');
const Account = require('../models/Account');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Get all accounts for current user
router.get('/', protect, async (req, res) => {
  try {
    const accounts = await Account.find({ userId: req.user._id });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single account
router.get('/:id', protect, async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Verify ownership
    if (account.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new account
router.post('/', protect, async (req, res) => {
  try {
    const { accountType } = req.body;

    const account = new Account({
      userId: req.user._id,
      accountType: accountType || 'savings'
    });

    await account.save();

    req.user.accounts.push(account._id);
    await req.user.save();

    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
