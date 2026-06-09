const express = require('express');
const User = require('../models/User');
const Account = require('../models/Account');
const Transaction = require('../models/Transaction');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Get all users (admin only)
router.get('/users', protect, authorize('admin', 'manager'), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user details
router.get('/users/:id', protect, authorize('admin', 'manager'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('accounts').select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user status
router.patch('/users/:id/status', protect, authorize('admin'), async (req, res) => {
  try {
    const { status } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all transactions
router.get('/transactions', protect, authorize('admin', 'manager'), async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('fromAccount')
      .populate('toAccount')
      .sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get dashboard stats
router.get('/dashboard/stats', protect, authorize('admin', 'manager'), async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAccounts = await Account.countDocuments();
    const totalTransactions = await Transaction.countDocuments();
    const totalBalance = await Account.aggregate([
      { $group: { _id: null, total: { $sum: '$balance' } } }
    ]);

    res.json({
      totalUsers,
      totalAccounts,
      totalTransactions,
      totalBalance: totalBalance[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
