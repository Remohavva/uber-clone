# Uber Clone - MERN Stack

A full-stack Uber clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- User authentication (signup/login)
- Real-time location tracking
- Ride requesting system
- Driver mode
- Real-time notifications using Socket.IO

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google Maps API Key

## Installation

1. Clone the repository
2. Install dependencies:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

The frontend will run on http://localhost:3000 and the backend on http://localhost:5000

## Tech Stack

- Frontend:
  - React.js
  - Redux Toolkit
  - Tailwind CSS
    

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication

## License

MIT
