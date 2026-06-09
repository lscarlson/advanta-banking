const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accountType: {
    type: String,
    enum: ['checking', 'savings', 'money-market'],
    default: 'checking'
  },
  balance: {
    type: Number,
    default: 0,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'closed'],
    default: 'active'
  },
  interestRate: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Auto-generate account number
accountSchema.pre('save', async function(next) {
  if (!this.accountNumber) {
    const random = Math.floor(Math.random() * 1000000000);
    this.accountNumber = `ACB${Date.now()}${random}`;
  }
  next();
});

module.exports = mongoose.model('Account', accountSchema);
