# 🎓 Student Registration Portal

A full-stack Student Registration Portal built using React, Node.js, Express, Sequelize, and MySQL.

## 📌 Features

- Student Registration
- View All Students
- View Student by ID
- Update Student Information
- Delete Student
- Upload Student Profile Image
- RESTful API
- MySQL Database Integration

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Multer
- CORS
- Dotenv

## 📂 Project Structure

```
Student-Registration-Portal
│
├── client
│   └── React Frontend
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── app.js
│   └── package.json
│
└── README.md
```

## 🚀 Backend Setup

1. Navigate to the server folder

```bash
cd server
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

Example:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_registration
```

4. Start the backend

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

## 🚀 Frontend Setup

Navigate to the client folder

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

## 📸 Image Upload

Student profile images are uploaded using Multer and stored inside:

```
server/uploads/
```

## 📖 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/students/register` | Register Student |
| GET | `/api/students` | Get All Students |
| GET | `/api/students/:id` | Get Student by ID |
| PUT | `/api/students/:id` | Update Student |
| DELETE | `/api/students/:id` | Delete Student |

## 👨‍💻 Author

**Nafi**

GitHub:
https://github.com/soul24346-hash