# 💬 Instant — Real-Time Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/Socket.IO-Realtime-010101?style=for-the-badge&logo=socketdotio&logoColor=white">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/Cloudinary-Images-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge">
</p>

<p align="center">
  A modern full-stack real-time chat application built with the MERN stack and Socket.IO.
</p>

---

## 🌐 Live Demo

[https://instant-theta-gilt.vercel.app/](https://instant-theta-gilt.vercel.app/)


---

## 📌 Overview

**Instant** is a modern real-time messaging application designed to provide a smooth and responsive chat experience across desktop and mobile devices.
Users can create an account, log in securely, search for other users, send real-time messages, share images, view online/offline status, and access user profiles.
The project focuses on implementing a production-style full-stack architecture using **React, Node.js, Express, MongoDB, Socket.IO, and Cloudinary**.

---

## ✨ Features

### 🔐 Authentication

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Secure Password Hashing using bcrypt
- ✅ Protected Application
- ✅ Session Persistence
- ✅ Logout

### 💬 Real-Time Chat

- ✅ One-to-One Messaging
- ✅ Real-Time Messages using Socket.IO
- ✅ Online / Offline User Status
- ✅ Message Timestamps
- ✅ Unseen Message Count
- ✅ Automatic Message Updates
- ✅ Auto Scroll to Latest Message

### 🖼️ Image Messaging

- ✅ Send Images in Chat
- ✅ Image Preview
- ✅ Cloudinary Image Storage
- ✅ Media Gallery in User Profile
- ✅ Click to View Shared Images

### 👤 User Profile

- ✅ Profile Picture
- ✅ Full Name
- ✅ User Bio
- ✅ Online Status
- ✅ Shared Media Section
- ✅ Edit Profile

### 🔎 User Search

- ✅ Search Users
- ✅ Real-Time Filtering
- ✅ User List in Sidebar
- ✅ Online / Offline Indicators

### 📱 Responsive Design

- ✅ Desktop Responsive UI
- ✅ Mobile Responsive UI
- ✅ WhatsApp-style Mobile Navigation
- ✅ Mobile Chat View
- ✅ Mobile Profile Sidebar
- ✅ Mobile-Friendly Message Input
- ✅ Responsive User Sidebar

### 🎨 UI / UX

- ✅ Modern Dark UI
- ✅ Purple Gradient Theme
- ✅ Glassmorphism Effects
- ✅ Backdrop Blur
- ✅ Smooth Animations
- ✅ Toast Notifications
- ✅ Responsive Layout

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- React Icons
- Socket.IO Client

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Socket.IO
- Cloudinary
- CORS
- dotenv

### Database

- MongoDB Atlas

### Image Storage

- Cloudinary

### Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas
- Images → Cloudinary

---

## 📂 Project Structure

```text

Instant/
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔑 Environment Variables

### Backend
```text
MONGODB_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_JWT_SECRET
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
PORT=3000
```

### Frontend
```text
VITE_BACKEND_URL=YOUR_URL
```

## 🎯 Future Improvements

Some features planned for future versions:

* 🔔 Push Notifications
* 👥 Group Chats
* 🎤 Voice Messages
* 📞 Voice Calling
* 📹 Video Calling
* 😊 Emoji Picker
* ✍️ Typing Indicator
* ✅ Message Read Receipts
* 🗑️ Delete Messages
* ✏️ Edit Messages
* 🔍 Advanced Message Search
* 🟢 Last Seen Status
* 🔒 End-to-End Encryption
* 🌙 Theme Customization


## 🙌 Acknowledgements

This project was built for learning, experimentation, and portfolio purposes.
Special thanks to the open-source community and the creators of:

* React
* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Tailwind CSS
* Cloudinary
* Vercel
* Render


## 👨‍💻 Author

### Akash Shit
Full Stack Developer | MERN Stack Developer | Problem Solver

GitHub:
https://github.com/akash-shit


### ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.
It motivates me to keep building and improving.
