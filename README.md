## Build a basic version of PayTM using MERN

A full-stack payment simulation web application inspired by **Paytm**, built with the **MERN stack** (MongoDB, Express, React, Node.js). It supports user authentication, wallet balance management, real-time fund transfers between users, and a responsive UI that mimics a simplified digital wallet experience.

---

## 🧩 Features

- 🔐 **User Authentication** with JWT (login/signup)
- 👤 **User Dashboard** displaying wallet balance and user list
- 💸 **Money Transfer System** between users (simulated)
- 🔎 **Search Users** by name or email for sending funds
- 🧾 **Transaction Logic**: Debits sender and credits recipient atomically
- 🔄 **Atomic Transactions** using MongoDB sessions to ensure both debit and credit operations succeed or fail together
- 🎨 **Responsive UI** built with React and Tailwind CSS
- 📦 **RESTful APIs** built using Express.js and MongoDB
- ⚙️ **State Management** with React Hooks and Context API

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Context API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Auth & Security:** JWT, Bcrypt.js
- **Deployment:** *(Add if applicable: Vercel, Render, Railway, etc.)*

---

## 📁 Folder Structure

    paytm-mern/
    │
    ├── client/ # React frontend
    │ ├── src/
    │ │ ├── components/ # Reusable UI components
    │ │ ├── pages/ # Page-level components
    │ │ ├── context/ # Global state (auth, balance)
    │ │ └── App.js
    │
    ├── server/ # Express backend
    │ ├── controllers/ # Business logic
    │ ├── models/ # Mongoose models
    │ ├── routes/ # API endpoints
    │ ├── middleware/ # Auth and error handlers
    │ └── index.js # Entry point
    │
    ├── .env # Environment variables
    └── README.md

---

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or cloud like MongoDB Atlas)

---

### 🔧 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/aaryan2016/paytm-mern.git
    cd paytm-mern

2. **Install server dependencies**
    ```bash
    cd server
    npm install

3. **Install client dependencies**
    ```bash
    cd ../client
    npm install

4. **Set up environment variables**
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

## 🚀 Run the App
1. **Start backend**
    ```bash
    cd server
    node index.js

2. **Start frontend**
    ```
    cd frontend
    npm run dev

Visit http://localhost:3000

## 🧪 Future Improvements
✅ Transaction history (user-side)

✅ Admin dashboard

🚀 Real-time balance updates (WebSockets)

🔐 OTP/email verification on signup

💳 UPI/Bank integration simulation

🌐 Deployment on Vercel/Render
