# Scalable Commerce Backend

A production-style e-commerce backend built using **Node.js, Express.js, PostgreSQL, Prisma ORM, JWT Authentication, and REST APIs**.

This project is being developed to learn and implement production-grade backend engineering concepts including authentication, authorization, database design, API architecture, security, and scalable backend development.

---

# 🚀 Project Status

> **Status:** Under Active Development

## ✅ Completed Modules

- User Authentication
- JWT Authentication & Authorization
- Password Hashing using bcrypt
- Protected Routes
- PostgreSQL Integration
- Prisma ORM Integration
- User Registration API
- User Login API
- Get All Users API
- Get Current User Profile API
- Database Seeder

## 🚧 Currently Working On

- User Profile Management
- Product Module

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Prisma ORM

## Authentication & Security

- JSON Web Token (JWT)
- bcrypt

## Development Tools

- Git & GitHub
- Postman
- pgAdmin
- Nodemon
- VS Code

---

# 📂 Project Structure

```text
scalable-commerce-backend/
│
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.js
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Naveen-Backend/scalable-commerce-backend.git
```

## 2. Navigate into the Project

```bash
cd scalable-commerce-backend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env` file using `.env.example`.

Example:

```env
PORT=5000

DATABASE_URL="postgresql://postgres:YOUR_POSTGRES_PASSWORD@localhost:5432/commerce_db"

JWT_SECRET=your_super_secret_jwt_key
```

## 5. Create PostgreSQL Database

Create a database named:

```text
commerce_db
```

## 6. Generate Prisma Client

```bash
npx prisma generate
```

## 7. Apply Database Migrations

```bash
npx prisma migrate dev
```

## 8. Seed the Database

```bash
npm run seed
```

This command creates sample users for testing the APIs.

## 9. Start the Development Server

```bash
npm run dev
```

Server runs at:

```text
http://localhost:5000
```

---

# 🔐 Authentication Flow

```text
Register User
      ↓
Hash Password using bcrypt
      ↓
Store User in PostgreSQL
      ↓
Login
      ↓
Validate Password
      ↓
Generate JWT Token
      ↓
Client Stores JWT Token
      ↓
Client Sends Authorization Header
      ↓
Authentication Middleware Verifies Token
      ↓
Access Protected Routes
```

---

# 📌 Current API Endpoints

## Authentication

### Register User

```http
POST /api/users
```

### Login User

```http
POST /api/users/login
```

---

## Protected Routes

### Get All Users

```http
GET /api/users
```

### Get Current User Profile

```http
GET /api/users/profile
```

### Authorization Header

```text
Bearer <JWT_TOKEN>
```

---

# 🌱 Database Seeder

The project includes a database seeder for creating sample users.

Run:

```bash
npm run seed
```

Features:

- Creates sample users
- Hashes passwords using bcrypt
- Uses Prisma Upsert
- Prevents duplicate users
- Safe to run multiple times (Idempotent)

---

# ✅ Completed Milestones

## Phase 1 – Project Setup

- Project Initialization
- Express Server Setup
- Health Check API

## Phase 2 – Database Setup

- PostgreSQL Setup
- Prisma ORM Setup
- Database Connection

## Phase 3 – User Registration

- User Registration API
- Duplicate Email Validation
- Password Hashing using bcrypt

## Phase 4 – Authentication

- User Login API
- JWT Authentication
- Login Flow

## Phase 5 – Route Protection

- Authentication Middleware
- Protected Routes
- JWT Authorization

## Phase 6 – User APIs

- Get All Users API
- Get Current User Profile API
- Authorization Validation
- Prisma Migration
- Development Environment Recovery

## Phase 6.5 – Database Seeder

- Database Seeder
- Sample User Generation
- Password Hashing
- Prisma Upsert
- Idempotent Database Seeding

---

# 🗺️ Roadmap

## User Module

- Update User Profile

## Product Module

- Create Product
- Get Products
- Get Product By ID
- Update Product
- Delete Product
- Product Search
- Product Categories

## Cart Module

- Add to Cart
- Remove from Cart
- Update Cart Quantity

## Order Module

- Place Order
- Order History
- Order Tracking

## Admin Module

- Admin Authentication
- Product Management
- Order Management

## Advanced Features

- Role-Based Access Control (RBAC)
- Pagination
- Filtering
- Searching
- Logging
- API Rate Limiting
- Docker
- CI/CD
- Unit Testing

---

# 🎯 Learning Objectives

This project focuses on learning:

- Backend Architecture
- REST API Design
- Authentication & Authorization
- Database Design
- Prisma ORM
- PostgreSQL
- Secure Backend Development
- Production-Level Development Practices

---

# 👨‍💻 Author

**Naveen Telagathoti**

Backend Engineering Learning Project

---

⭐ If you found this project helpful, feel free to star the repository.