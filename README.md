# Student Feedback Review System

A full-stack student feedback review system built with React.js, Express.js, and MongoDB.

## Features

- Submit student feedback with name, PRN, course name, star rating, and descriptive suggestions
- Store feedback in MongoDB
- View recent submitted reviews in the frontend
- Refresh feedback records from the backend

## Project Structure

```text
feedback/
  client/   React + Vite frontend
  server/   Express + MongoDB backend
```

## Setup

### 1. Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 2. Configure environment variables

Copy `server/.env.example` to `server/.env` and update `MONGODB_URI` if needed.

Optional for the frontend:

Create `client/.env` with:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

### 3. Start the backend

```bash
cd server
npm run dev
```

### 4. Start the frontend

```bash
cd client
npm run dev
```

The React app runs on `http://localhost:5173` and the Express API runs on `http://localhost:5000`.

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/feedbacks` - Fetch all feedback reviews
- `POST /api/feedbacks` - Submit a feedback review
