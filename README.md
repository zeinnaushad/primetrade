\# 2Do List



A simple full-stack web application built with React, Node.js, and MongoDB.  

It includes authentication, a protected dashboard, and CRUD operations for tasks.



---



\## Features as per Assignment



\### 🔐 Authentication

\- User signup and login  

\- JWT-based authentication  

\- Password hashing using bcrypt  

\- Protected routes (Dashboard, Profile)  



\### 📋 Dashboard

\- Display logged-in user's profile  

\- CRUD operations on tasks (create, read, update, delete)  

\- Search and filter tasks  

\- Logout flow  



\### 🛠 Backend

\- Built using Node.js and Express  

\- MongoDB for database  

\- APIs implemented for:

&nbsp; - `/api/auth/register`

&nbsp; - `/api/auth/login`

&nbsp; - `/api/profile/me`

&nbsp; - `/api/tasks`



---



\## Tech Stack



| Frontend | Backend | Database | Auth |

|----------|---------|----------|------|

| React.js | Node.js | MongoDB | JWT |

| Axios | Express | Mongoose | bcrypt |



---



\## Setup Instructions



\### 1️⃣ Backend Setup



```bash

cd backend

npm install



Create .env in backend folder:



MONGO\_URI=your\_mongodb\_uri

JWT\_SECRET=your\_secret\_key

PORT=5000



Run backend:



npm run dev



\### 2️⃣ Frontend Setup



cd frontend

npm install

npm run dev



Open in browser:

http://localhost:5173



Postman Collection

API endpoints are documented in the file:

📎 2do-list.postman\_collection.json





Note on Scaling Frontend–Backend Integration for Production



   Use environment variables for API URLs (VITE\_API\_URL) instead of localhost.



   Deploy frontend separately (Netlify/Vercel) and backend on a server (Render/AWS).



   Store JWT tokens in HTTP-only cookies instead of localStorage.



   Implement pagination for /tasks to handle large data.



&nbsp;   Use input validation (Joi/Zod) and rate limiting for secure endpoints.



&nbsp;   Separate controllers, services, routes for modular backend structure.

