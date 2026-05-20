# Primetrade Assignment

A full-stack task management system built using Django REST Framework and Next.js.

## Features

- JWT Authentication
- User Registration/Login
- Protected Routes
- CRUD Task APIs
- PostgreSQL Integration
- Role-Based Access
- Next.js Frontend
- Axios API Integration

## Tech Stack

### Backend
- Django
- Django REST Framework
- PostgreSQL
- SimpleJWT

### Frontend
- Next.js
- TailwindCSS
- Axios

## Setup

### Backend

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
npm install
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/v1/auth/register/`
- POST `/api/v1/auth/login/`

### Tasks
- GET `/api/v1/tasks/`
- POST `/api/v1/tasks/`
- PUT `/api/v1/tasks/:id/`
- DELETE `/api/v1/tasks/:id/`
