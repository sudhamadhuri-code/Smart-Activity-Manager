# Smart Activity Manager

## Full Stack Web Application with AI Integration

------------------------------------------------------------------------

## 👩‍💻 Submitted By

**Sudha Madhuri K**\
Email: k.sudhamadhuri26@gmail.com

------------------------------------------------------------------------

## 🔗 GitHub Repository

👉 https://github.com/sudhamadhuri-code/Smart-Activity-Manager

------------------------------------------------------------------------

## 📌 Project Overview

Smart Activity Manager is a full-stack web application designed to
manage activities efficiently with AI-powered content suggestions.

The system demonstrates integration between frontend, backend, database,
and external AI services using RESTful architecture.

------------------------------------------------------------------------

## 🚀 Key Features

-   User Registration and Login
-   Create, Update, and Delete Activities
-   Activity Status and Priority Management
-   AI-Based Content Suggestions
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

-   OpenRouter API (Chat Completions API)

------------------------------------------------------------------------

## 🏗 System Architecture

    React (Frontend)
            ↓
    Spring Boot REST APIs
            ↓
    MongoDB Database

    Spring Boot → OpenRouter API (AI Suggestions)

------------------------------------------------------------------------

## 🔐 Security Notice

The OpenRouter API key has been removed for security reasons and is
**not included** in this repository.

To enable AI features:

1.  Add your API key in `application.properties`:

``` properties
openrouter.api.key=${OPENROUTER_API_KEY}
```

2.  Set the environment variable:

**Windows (CMD):**

``` bash
set OPENROUTER_API_KEY=your_key_here
```

**Mac/Linux:**

``` bash
export OPENROUTER_API_KEY=your_key_here
```


For official access, please contact via email.

------------------------------------------------------------------------
# 🛠️ Setup Instructions

---

# ✅ OPTION 1: Using Git Clone (Recommended)

## 1️⃣ Prerequisites

Make sure you have installed:

* Java 17 or above
* Node.js (v16 or above recommended)
* Maven
* MongoDB (Local installation or MongoDB Atlas)
* Git

---

## 2️⃣ Clone the Repository

```bash
git clone https://github.com/sudhamadhuri-code/Smart-Activity-Manager.git
cd Smart-Activity-Manager
```

---

## 3️⃣ Backend Setup

Navigate to backend folder:

```bash
cd Backend
```

Open:

```
src/main/resources/application.properties
```

Configure MongoDB:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/activitydb
```

Add your OpenRouter API key:

```properties
openrouter.api.key=YOUR_API_KEY_HERE
```

Run the backend:

```bash
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8881
```

---

## 4️⃣ Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# ✅ OPTION 2: Using Download ZIP

## 1️⃣ Prerequisites

Make sure you have installed:

* Java 17 or above
* Node.js (v16 or above recommended)
* Maven
* MongoDB (Local installation or MongoDB Atlas)

---

## 2️⃣ Download the Project

1. Open the GitHub repository
2. Click **Code**
3. Click **Download ZIP**
4. Extract the ZIP file

---

## 3️⃣ Backend Setup

Open terminal inside extracted project folder:

```bash
cd Backend
```

Edit:

```
src/main/resources/application.properties
```

Add your configuration:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/activitydb
openrouter.api.key=YOUR_API_KEY_HERE
```

Run backend:

```bash
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8881
```

---

## 4️⃣ Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📄 Notes

* Replace `YOUR_API_KEY_HERE` with your own OpenRouter API key.
* Make sure MongoDB service is running before starting the backend.
* Backend must be running before starting the frontend.

---



## 📬 Contact

For API access or project inquiries:

📧 k.sudhamadhuri26@gmail.com

