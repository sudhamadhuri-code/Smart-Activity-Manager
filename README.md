# Smart Activity Manager

## Full Stack Web Application with AI Integration

------------------------------------------------------------------------

## 👩‍💻 Submitted By

**Sudha Madhuri K**\
Email: k.sudhamadhuri26@gmail.com

------------------------------------------------------------------------

## 🔗 GitHub Repository

https://github.com/sudhamadhuri-code/Smart-Activity-Manager.git

------------------------------------------------------------------------

## 📌 Project Overview

Smart Activity Manager is a full-stack web application designed to
manage daily activities efficiently with AI-powered content suggestions.

The system demonstrates integration between frontend, backend, database,
and external AI services using RESTful architecture.

------------------------------------------------------------------------

## 🚀 Key Features

-   User Registration and Login
-   Create, Update, and Delete Activities
-   Activity Status and Priority Management
-   AI-Based Content Suggestion
-   RESTful API Communication

------------------------------------------------------------------------

## 🛠 Technology Stack

### Frontend

-   React (Vite)
-   CSS
-   REST API Integration

### Backend

-   Spring Boot
-   Maven
-   REST Controllers
-   CORS Configuration

### Database

-   MongoDB

### AI Integration

-   OpenRouter API (Chat Completions)

------------------------------------------------------------------------

## 🏗 System Architecture

React (Frontend)\
↓\
Spring Boot REST APIs\
↓\
MongoDB Database

Spring Boot → OpenRouter API (AI Suggestions)

------------------------------------------------------------------------

## 🔐 Security Notice

The OpenRouter API key has been disabled for security purposes and it is
not included in this repository.

To enable AI features:

1.  Add your own API key in `application.properties`
2.  Configure: openrouter.api.key=${OPENROUTER_API_KEY}

 Set environment variable:

Windows: set OPENROUTER_API_KEY=your_key_here

Mac/Linux: export OPENROUTER_API_KEY=your_key_here

   
For official access, please contact via email.

------------------------------------------------------------------------

## 🧩 Setup Instructions

### 1️⃣ Prerequisites

-   Java 17 or above
-   Node.js (v16 or above recommended)
-   MongoDB (Local or MongoDB Atlas)
-   Maven

------------------------------------------------------------------------

### 2️⃣ Clone the Repository

git clone
https://github.com/sudhamadhuri-code/Smart-Activity-Manager.git\
cd Smart-Activity-Manager

------------------------------------------------------------------------

### 3️⃣ Backend Setup

cd Backend

Edit:

src/main/resources/application.properties

Configure:

spring.data.mongodb.uri=mongodb://localhost:27017/activitydb\
server.port=8881

Run backend:

mvn spring-boot:run

Backend runs at:

http://localhost:8881

------------------------------------------------------------------------

### 4️⃣ Frontend Setup

Open new terminal:

cd Frontend\
npm install\
npm run dev

Frontend runs at:

http://localhost:5173

------------------------------------------------------------------------

### 5️⃣ Access the Application

Open browser:

http://localhost:5173

Make sure backend is running on:

http://localhost:8881


------------------------------------------------------------------------

## 📬 Contact

For API access or project inquiries:

Email: k.sudhamadhuri26@gmail.com
