# Spring Boot JWT Authentication System

A secure backend authentication system built using **Spring Boot, Spring Security, and JWT (JSON Web Token)**. It supports stateless authentication and role-based access control (USER / ADMIN).

---

## Overview

Users register and login using email & password. After successful login, a JWT token is generated and used for accessing protected APIs.

Flow:  
Login → AuthenticationManager → JWT generated → Client stores token → Every request passes through JwtAuthenticationFilter → Token validated → User authenticated → Access granted

---

## Tech Stack

Java • Spring Boot • Spring Security • JWT (jjwt) • Spring Data JPA • MySQL • Swagger • Maven

---

## Core Features

- User Registration & Login  
- BCrypt password encryption  
- JWT token generation & validation  
- Stateless authentication  
- Role-based authorization (USER / ADMIN)  
- Secure REST APIs using Spring Security filters  
- API documentation using Swagger UI  

---

## Default Admin Access

The system supports an admin role for managing protected operations.

Example:

Email: admin@gmail.com  
Password: admin123  
Role: ADMIN  

---

## JWT Structure

Header.Payload.Signature

Example payload:
{
  "sub": "user@gmail.com",
  "iat": 1710000000,
  "exp": 1710003600
}

---

## Swagger API Documentation

This project uses **Swagger UI** for API documentation and testing.

Once the application is running, open:

👉 http://localhost:8080/swagger-ui/index.html

### Features:
- View all REST APIs in one place  
- Test APIs directly from browser  
- See request/response structure  
- No need for Postman during development  

---

## Authentication Flow

1. User logs in with email & password  
2. AuthenticationManager validates credentials  
3. JwtService generates JWT token  
4. Token is returned to client  
5. Client sends token in every request:

Authorization: Bearer <token>

6. JwtAuthenticationFilter:
   - Extracts token
   - Validates signature & expiration
   - Loads user from database
   - Sets authentication in SecurityContext

7. Request proceeds to controller

---

## Key Components

JwtService → Generates and validates JWT tokens  
JwtAuthenticationFilter → Intercepts requests and authenticates user  
CustomUserDetailsService → Loads user from DB for authentication  

---

## Security Flow

User Login → AuthenticationManager → JwtService → JWT Token → Client  
Client Request → JwtAuthenticationFilter → Validation → SecurityContext → Controller  

---

## API Endpoints

Public:
POST /api/auth/register  
POST /api/auth/login  

Protected:
GET /api/user/profile  
GET /api/admin/dashboard  

---

## Configuration

spring.datasource.url=jdbc:mysql://localhost:3306/db_name  
spring.datasource.username=root  
spring.datasource.password=password  

jwt.secret=your_secret_key  
jwt.expiration=3600000  

---

## Run Project

git clone <repo-url>  
cd project  
mvn spring-boot:run  

---


## Author

Built by Ritika Rathi  
Focused on backend development using Spring Boot & Security
