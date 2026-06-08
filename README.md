Task Manager - Full Stack Application
Overview

Task Manager is a full-stack web application that allows users to register, log in, and manage their tasks securely. The application implements JWT-based authentication, role-based authorization, protected routes, and task CRUD operations.

This project was built using the MERN stack principles with a React frontend and a Node.js/Express backend connected to MongoDB.

Features
Authentication & Security
User Registration
User Login
Password Hashing using bcryptjs
JWT Authentication
Protected Routes
Input Validation using express-validator
Authorization
Role-Based Access Control (User/Admin)
Ownership-based Task Access
Admin-only Routes
Task Management
Create Tasks
View Tasks
Delete Tasks
Task Ownership Verification
Frontend
React.js
React Router
Axios API Integration
Protected Dashboard
Logout Functionality
Tech Stack
Frontend
React.js
React Router DOM
Axios
Vite
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
express-validator
Project Structure
task-manager
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── validators
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── docs
│   └── API_ENDPOINTS.md
│
└── README.md
API Endpoints
Authentication
Method	Endpoint
POST	/api/v1/auth/register
POST	/api/v1/auth/login
Tasks
Method	Endpoint
GET	/api/v1/tasks
POST	/api/v1/tasks
PUT	/api/v1/tasks/
DELETE	/api/v1/tasks/
Admin
Method	Endpoint
GET	/api/v1/admin/users
Security Features
Password Hashing using bcryptjs
JWT Authentication
Protected Routes
Role-Based Access Control
Request Validation
Ownership Verification
Installation
Clone Repository
git clone <repository-url>
cd task-manager
Backend Setup
cd backend

npm install

npm run dev

Create a .env file:

PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
Frontend Setup
cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173

Backend runs on:

http://localhost:5000
Future Improvements
Swagger API Documentation
Docker Deployment
Redis Caching
Unit Testing
Task Status Management
Profile Management
Author

Yashasvi Tekriwal

Delhi Technological University (DTU)

Electrical Engineering