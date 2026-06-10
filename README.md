# 🏦 Advanta Capital Banking System

A full-stack online banking application with admin portal, customer dashboard, and secure transaction management.

## 🚀 **DEPLOY IN 3 CLICKS** (15 minutes to live website!)

### **1️⃣ Deploy Backend**

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/LSCARLSON/advanta-banking)

**After clicking:**
1. Connect your GitHub
2. Select `advanta-banking` repo
3. Build command: `cd backend && npm install`
4. Start command: `cd backend && npm start`
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: `MyBankingApp2024SecretKeyChangeThis123`
   - `JWT_EXPIRE`: `7d`
   - `CORS_ORIGIN`: Your Netlify URL (from Step 2)
6. Click Deploy ✅

---

### **2️⃣ Deploy Frontend**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LSCARLSON/advanta-banking)

**After clicking:**
1. Connect your GitHub
2. Select `advanta-banking` repo
3. Build command: `cd frontend && npm run build`
4. Publish directory: `frontend/build`
5. Add Environment Variable:
   - `REACT_APP_API_URL`: Your Render backend URL + `/api`
6. Click Deploy ✅

---

### **3️⃣ Set Up Database**

[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/cloud/atlas)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create free cluster
4. Get connection string
5. Add to Render environment variables
6. Done! ✅

---

## 📱 **Your Live Website**

After deployment, open on iPhone Safari:

```
https://your-netlify-domain.netlify.app
```

**Login with:**
```
Email: admin@example.com
Password: password123
```

---

## ✨ Features

- **Admin Portal**: Manage users, accounts, and transactions
- **Customer Dashboard**: View accounts, transaction history, and perform transfers
- **Secure Authentication**: JWT-based authentication with role-based access control
- **Transaction Management**: Send money, view history, and manage accounts
- **Security**: Password encryption, rate limiting, audit logs
- **Responsive Design**: Works on desktop, tablet, and iPhone

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router
- Axios
- TailwindCSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs for password hashing

## 📁 Project Structure

```
advanta-banking/
├── backend/              # Node.js/Express API
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/             # React application
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## 🔐 Security Features

✅ Password encryption with bcryptjs
✅ JWT authentication tokens
✅ Role-based access control
✅ Protected API endpoints
✅ Rate limiting
✅ CORS protection
✅ Input validation

## 💰 Costs

| Service | Cost | Limit |
|---------|------|-------|
| Netlify | FREE | Unlimited |
| Render | $5/month | Free for first month |
| MongoDB | FREE | 512MB |
| **Total** | **$5/month** | ✅ |

## 📱 Add to iPhone Home Screen

1. Open website in Safari
2. Tap **Share** (box with arrow)
3. Tap **"Add to Home Screen"**
4. Name it: `Advanta Bank`
5. Tap **"Add"**
6. Now it's like an app! 📲

## 🚀 Quick Start (Local Development)

```bash
# Clone repository
git clone https://github.com/LSCARLSON/advanta-banking.git
cd advanta-banking

# Backend
cd backend
npm install
cp .env.example .env
# Update .env with MongoDB URI
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm start
```

Backend: `http://localhost:5000`
Frontend: `http://localhost:3000`

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Accounts
- `GET /api/accounts` - Get all accounts
- `GET /api/accounts/:id` - Get account details
- `POST /api/accounts` - Create new account

### Transactions
- `GET /api/transactions/account/:accountId` - Transaction history
- `POST /api/transactions/transfer` - Send money

### Admin
- `GET /api/admin/users` - All users (admin only)
- `GET /api/admin/transactions` - All transactions (admin only)
- `GET /api/admin/dashboard/stats` - Dashboard stats (admin only)

## 🆘 Troubleshooting

**Deployment Failed?**
- Check all environment variables are set
- Ensure MongoDB connection string is correct
- Verify GitHub account is connected

**Website Won't Load?**
- Clear browser cache
- Wait 5 minutes for deployment to complete
- Check Render/Netlify dashboards for errors

**Can't Login?**
- Use admin credentials: `admin@example.com` / `password123`
- Or create new customer account
- Check MongoDB is connected

**API Not Working?**
- Verify backend URL in frontend .env
- Check CORS_ORIGIN matches frontend URL
- Restart backend service

## 📝 License

All Rights Reserved © 2026 Advanta Capital Bank

---

## 👨‍💻 Built With

Made with ❤️ using React, Node.js, MongoDB, and Tailwind CSS

**Live on iPhone** 📱 | **Secure Banking** 🔐 | **Easy to Use** 💳

---

## ✨ What's Next?

✅ Deploy Backend (Click Render button)
✅ Deploy Frontend (Click Netlify button)
✅ Set up MongoDB Atlas
✅ Access on your iPhone
✅ Start managing accounts!

**Get Started Now!** 🚀
