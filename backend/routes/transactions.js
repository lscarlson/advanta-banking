const express = require('express');
const Transaction = require('../models/Transaction');
const Account = require('../models/Account');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Get transactions for account
router.get('/account/:accountId', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({
      $or: [
        { fromAccount: req.params.accountId },
        { toAccount: req.params.accountId }
      ]
    }).sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create transfer
router.post('/transfer', protect, async (req, res) => {
  try {
    const { fromAccountId, toAccountId, amount, description } = req.body;

    if (!fromAccountId || !toAccountId || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (amount <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }

    // Get accounts
    const fromAccount = await Account.findById(fromAccountId);
    const toAccount = await Account.findById(toAccountId);

    if (!fromAccount || !toAccount) {
      return res.status(404).json({ error: 'Account not found' });
    }

    // Verify ownership of from account
    if (fromAccount.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Check balance
    if (fromAccount.balance < amount) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }

    // Create transaction
    const transaction = new Transaction({
      fromAccount: fromAccountId,
      toAccount: toAccountId,
      amount,
      type: 'transfer',
      description,
      status: 'completed',
      completedAt: new Date()
    });

    // Update balances
    fromAccount.balance -= amount;
    toAccount.balance += amount;

    await fromAccount.save();
    await toAccount.save();
    await transaction.save();

    res.status(201).json({
      message: 'Transfer completed successfully',
      transaction
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
