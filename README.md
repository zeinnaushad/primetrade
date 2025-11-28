# 📝 2Do List

A simple full-stack web application built with **React**, **Node.js**, and **MongoDB**.  
It includes **authentication**, a **protected dashboard**, and **CRUD operations** for tasks.

---

## 🚀 Features (As per Assignment)

### 🔐 Authentication
- User signup and login  
- JWT-based authentication  
- Password hashing using **bcrypt**  
- Protected routes (Dashboard & Profile)  

### 📋 Dashboard
- Display logged-in user's profile  
- CRUD operations on tasks (Create, Read, Update, Delete)  
- Search and filter tasks  
- Logout flow  

### 🛠 Backend
- Built using **Node.js** and **Express**  
- **MongoDB** for database  
- APIs implemented for:
  - `/api/auth/register`
  - `/api/auth/login`
  - `/api/profile/me`
  - `/api/tasks`

---

## 🧰 Tech Stack

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| React.js | Node.js | MongoDB  | JWT  |
| Axios    | Express | Mongoose | bcrypt |

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

    cd backend
    npm install

Create `.env` in the **backend** folder with:

    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    PORT=5000

Run backend:

    npm run dev

---

### 2️⃣ Frontend Setup

    cd frontend
    npm install
    npm run dev

Open in browser:

    http://localhost:5173

---

## 📮 Postman Collection

API endpoints are documented in the file:

📎 `2do-list.postman_collection.json`

---

## 📈 Notes on Scaling Frontend–Backend Integration for Production

- Use environment variables for API URLs (`VITE_API_URL`) instead of `localhost`.  
- Deploy frontend separately (Netlify/Vercel) and backend on a server (Render/AWS).  
- Store JWT tokens in **HTTP-only cookies** instead of `localStorage`.  
- Implement **pagination** for `/tasks` to handle large data.  
- Use input validation (**Joi/Zod**) and **rate limiting** for secure endpoints.  
- Separate **controllers**, **services**, and **routes** for modular backend structure.
