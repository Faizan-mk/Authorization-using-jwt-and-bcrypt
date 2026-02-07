# Authorization using JWT and Bcrypt

A full-stack authentication system built with **Node.js/Express** backend and **React** frontend. This application demonstrates user registration, login, and account management with secure JWT token-based authentication and bcrypt password hashing.

## 🚀 Features

- **User Registration** - Create new user accounts with validation
- **User Login** - Authenticate users and receive JWT tokens
- **JWT Authentication** - Secure token-based authentication
- **Bcrypt Password Hashing** - Industry-standard password encryption
- **User Profile Management** - View, update, and delete user accounts
- **Protected Routes** - Middleware-based route protection
- **Database Integration** - MySQL database with Sequelize ORM
- **Modern Frontend** - React with Vite and Tailwind CSS

## 📋 Project Structure

```
Authorization-using-jwt-and-bcrypt/
├── Backend/
│   ├── app.js                 # Main Express server
│   ├── package.json           # Backend dependencies
│   ├── test-db.js            # Database test script
│   ├── config/
│   │   └── db.js             # Database configuration
│   ├── controllers/
│   │   └── authcontroller.js # Authentication logic
│   ├── middleware/
│   │   ├── authmiddleware.js # JWT verification
│   │   └── userschema.js     # Request validation
│   ├── models/
│   │   └── usermodel.js      # User database model
│   └── routes/
│       └── authrouter.js     # API routes
├── Frontend/
│   ├── src/
│   │   ├── App.jsx           # Main React component
│   │   ├── main.jsx          # Entry point
│   │   ├── index.css         # Styles
│   │   └── components/
│   │       ├── Home.jsx      # Home page
│   │       ├── Login.jsx     # Login form
│   │       ├── SignUp.jsx    # Registration form
│   │       ├── Profile.jsx   # User profile
│   │       └── Jobs.jsx      # Jobs page
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind CSS config
│   └── index.html            # HTML entry point
└── README.md                 # Project documentation

```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Sequelize** - ORM for database
- **MySQL2** - MySQL client
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing
- **Joi** - Data validation
- **Nodemon** - Development server with auto-reload

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure the database in `config/db.js` with your MySQL credentials

4. Start the development server:
```bash
npm start
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default)

## 🔌 API Endpoints

All API endpoints are prefixed with `/api`

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| POST | `/api/register` | Register a new user | No |
| POST | `/api/login` | Authenticate user | No |
| GET | `/api/getuser` | Get user profile | Yes |
| PUT | `/api/updateuser` | Update user information | Yes |
| DELETE | `/api/deleteuser` | Delete user account | Yes |

### Request/Response Examples

#### Register User
```bash
POST /api/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```bash
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Get User (Protected Route)
```bash
GET /api/getuser
Authorization: Bearer <JWT_TOKEN>
```

## 🔐 Security Features

- **Password Hashing** - Bcrypt with salt rounds for secure password storage
- **JWT Authentication** - Stateless token-based authentication
- **Protected Routes** - Middleware verification of JWT tokens
- **Input Validation** - Joi validation for request data
- **Database Security** - Sequelize parameterized queries prevent SQL injection

## 📝 Database Schema

### Users Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| username | STRING | NOT NULL |
| email | STRING | NOT NULL, UNIQUE |
| password | STRING | NOT NULL |
| phone | STRING | NULLABLE |

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Ensure `package.json` has start script
2. Set environment variables
3. Deploy using platform's Git integration

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables for API URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Faizan Muhammad Khan**

- GitHub: [@Faizan-mk](https://github.com/Faizan-mk)
- Repository: [Authorization-using-jwt-and-bcrypt](https://github.com/Faizan-mk/Authorization-using-jwt-and-bcrypt)

## 🆘 Support

For support, email faizan@example.com or open an issue in the GitHub repository.

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [JWT.io](https://jwt.io/)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated:** February 2026

Happy Coding! 🎉
