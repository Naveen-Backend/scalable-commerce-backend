# Scalable Commerce Backend

A scalable e-commerce backend built using Node.js, Express.js, PostgreSQL, Prisma ORM, JWT Authentication, and REST APIs.

This project is being developed to understand how production-grade backend systems are designed, secured, and scaled.

---

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma ORM

### Authentication & Security

- bcrypt
- JSON Web Tokens (JWT)

### Development Tools

- Nodemon
- Postman
- Git & GitHub
- pgAdmin

---

## Current Features

### User Management

- User Registration API
- Duplicate Email Validation
- Password Hashing using bcrypt
- User Login API

### Authentication

- JWT Token Generation
- Authentication Middleware
- Protected Routes
- Authorization Header Validation

### Database

- PostgreSQL Integration
- Prisma ORM Integration
- User Data Storage
- User Data Retrieval

---

## API Endpoints

### Register User

```http
POST /api/users
```

### Login User

```http
POST /api/users/login
```

### Get Users (Protected Route)

```http
GET /api/users
```

Authorization Header:

```txt
Bearer <JWT_TOKEN>
```

---

## Authentication Flow

```txt
Register User
      ↓
Store Hashed Password
      ↓
Login
      ↓
Generate JWT Token
      ↓
Client Stores Token
      ↓
Client Sends Token
      ↓
Middleware Verifies Token
      ↓
Access Protected Routes
```

---

## Project Structure

```txt
src/
├── config/
├── controllers/
├── middleware/
├── routes/
├── services/
├── models/
└── server.js

prisma/
├── schema.prisma
└── migrations/
```

---

## Completed Milestones

### Phase 1

- Project Setup
- Express Server Setup
- Health Check API

### Phase 2

- PostgreSQL Setup
- Prisma Configuration
- Database Connection

### Phase 3

- User Registration API
- Password Hashing using bcrypt

### Phase 4

- User Login API
- JWT Authentication

### Phase 5

- Authentication Middleware
- Protected Routes

---

## Upcoming Features

### User Module

- Get Current User Profile
- Update User Profile

### Product Module

- Product Creation
- Product Listing
- Product Details
- Product Update
- Product Deletion

### Cart Module

- Add To Cart
- Remove From Cart
- Update Cart Quantity

### Order Module

- Create Order
- Order History
- Order Status Tracking

### Admin Features

- Admin Authentication
- Product Management
- Order Management

### Advanced Features

- Role-Based Access Control (RBAC)
- Pagination
- Filtering & Search
- API Rate Limiting
- Logging & Monitoring
- Docker Deployment
- CI/CD Pipeline

---

## Learning Objectives

This project focuses on learning:

- Backend Architecture
- REST API Design
- Authentication & Authorization
- Database Design
- ORM Usage
- Scalable Backend Development
- Production-Level Development Practices

---

## Author

Naveen

Backend Engineering Learning Project

```

```
