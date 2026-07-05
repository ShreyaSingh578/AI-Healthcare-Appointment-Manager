# 🏥 AI Healthcare Appointment & Follow-up Manager

## Project Overview

The AI Healthcare Appointment & Follow-up Manager is a full-stack healthcare platform that enables patients to book appointments, doctors to manage consultations, and administrators to manage doctor profiles.

The application integrates **Google Gemini AI** to automatically generate:

- AI Pre-Visit Summary
- AI Post-Visit Summary

The system also supports medication reminders, doctor leave management, role-based authentication, appointment conflict prevention, email notifications, and Google Calendar integration.

---

# Live Application

## Frontend (Vercel)

https://ai-healthcare-appointment-manager-lime.vercel.app/

## Backend (Render)

https://healthcare-backend-tt5n.onrender.com

---

# GitHub Repository

https://github.com/ShreyaSingh578/AI-Healthcare-Appointment-Manager

---

# Features

## Patient

- Register
- Login
- Search Doctors
- View Doctor Profiles
- Book Appointment
- View Dashboard
- View Appointment History

---

## Doctor

- View Patient Appointments
- Add Consultation Notes
- Generate AI Post-Visit Summary

---

## Admin

- Add Doctor
- Edit Doctor
- Delete Doctor
- Manage Leave Days
- View Appointments

---

## AI Features

- Google Gemini AI Integration
- AI Pre-Visit Summary
- AI Post-Visit Summary

---

## Appointment Management

- Double Booking Prevention
- Doctor Leave Validation
- Appointment Status Tracking

---

## Reminder System

- Medication Reminder Generation

---

## Authentication

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-based Authorization

---

# Tech Stack

## Frontend

- React
- React Router
- Bootstrap 5
- Bootstrap Icons
- Axios
- React Hot Toast
- Vite

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- JWT
- Google Gemini AI

---

## Database

- PostgreSQL
- Neon Database

---

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → Neon

---

# Project Structure

```
AI-Healthcare-Appointment-Manager

backend
│
├── prisma
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── services
│   └── server.js

frontend
│
├── src
│   ├── components
│   ├── context
│   ├── pages
│   ├── services
│   └── styles

README.md
```

---

# Setup Guide

## Clone Repository

```bash
git clone https://github.com/ShreyaSingh578/AI-Healthcare-Appointment-Manager.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

Example:

```env
DATABASE_URL=

JWT_SECRET=

GEMINI_API_KEY=

EMAIL_USER=

EMAIL_PASS=
```

Run:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create:

```env
VITE_API_URL=http://localhost:5000/api
```

Run

```bash
npm run dev
```

---

# .env.example

## Backend

```env
DATABASE_URL=postgresql://username:password@host:5432/database

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

EMAIL_USER=your_email@example.com

EMAIL_PASS=your_email_app_password
```

---

## Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

# API Documentation

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Doctors

### Get All Doctors

```
GET /api/doctors
```

### Get Doctor

```
GET /api/doctors/:id
```

### Create Doctor

```
POST /api/doctors
```

### Update Doctor

```
PUT /api/doctors/:id
```

### Delete Doctor

```
DELETE /api/doctors/:id
```

---

## Appointment

### Book Appointment

```
POST /api/appointments
```

### Get Appointments

```
GET /api/appointments
```

### Get Appointment

```
GET /api/appointments/:id
```

### Update Appointment

```
PUT /api/appointments/:id
```

### Delete Appointment

```
DELETE /api/appointments/:id
```

---

# Database Schema

## User

- id
- name
- email
- password
- role

---

## Doctor

- id
- name
- specialization
- experience
- consultationFee

---

## Appointment

- id
- patientName
- patientEmail
- symptoms
- appointmentDate
- status
- preVisitSummary
- postVisitSummary
- doctorId

---

## Leave

- id
- doctorId
- date

---

## MedicationReminder

- id
- medicine
- frequency
- nextReminder
- appointmentId

---

# LLM Prompts

## Pre-Visit Prompt

```
Analyse these symptoms and return:

• Urgency Level

• Chief Complaint

• Three suggested questions for the doctor.

Symptoms:
<symptoms>
```

---

## Post-Visit Prompt

```
Convert these doctor notes into a patient-friendly summary including:

• Diagnosis

• Medication Schedule

• Follow-up Steps

Notes:
<doctor_notes>
```

---

# Google Calendar Setup

1. Create a Google Cloud Project.
2. Enable Google Calendar API.
3. Configure OAuth 2.0 Credentials.
4. Download OAuth credentials.
5. Add required credentials to `.env`.
6. Authorize the application.
7. Calendar events are created, updated and deleted automatically.

---

# Deployment

## Frontend

Vercel

## Backend

Render

## Database

Neon PostgreSQL

---

# Future Improvements

- Video Consultation
- Payment Gateway
- SMS Notifications
- Medical Reports Upload
- AI Chatbot
- Multi-language Support

---

# Screenshots

Add:

- Home Page
- Login
- Register
- Doctors Page
- Appointment Booking
- Dashboard
- Admin Dashboard
- AI Summary

---

# Author

**Shreya Singh**

GitHub

https://github.com/ShreyaSingh578

---

# License

This project is developed for educational purposes only.