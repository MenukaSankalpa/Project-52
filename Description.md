# AI BlogSphere – Smart Blog App with Gemini AI & ImageKit

# Project Description:

AI BlogSphere is a powerful full-stack blog platform built with the MERN Stack that leverages Google Gemini AI to auto-generate blog content, summaries, and tags, and uses ImageKit API for real-time image optimization and CDN delivery. This platform features a modern, responsive front-end for readers, and a secure admin panel for content creators to manage posts, users, and media assets.

The app provides intelligent writing assistance, dynamic image compression, and full CRUD operations. Users can view, search, and read articles while admins can generate AI-assisted blog posts with rich media. The app will also support SEO metadata handling and live deployment.

# User Roles:

Reader/User

Browse blog posts
Read content and view images
Search and filter posts by tags or title
View AI-generated summaries

Admin (Content Creator)

Login to admin dashboard
Create, update, delete blog posts
Use Google Gemini AI to generate blog content and titles
Upload and optimize images with ImageKit
Manage SEO metadata and tags

# Tech Stack:

Frontend:
React.js with Vite or CRA
Tailwind CSS or Material UI (for styling)
React Router (for navigation)
Axios (for API calls)
Toastify or similar (for notifications)

Backend:
Node.js + Express.js
MongoDB Atlas (NoSQL DB for storing posts and user data)
Mongoose (ODM for MongoDB)
JWT (JSON Web Token) for authentication
bcrypt.js for password hashing

# AI & Media Services:

Google Gemini API – For AI-assisted blog writing and summarization
ImageKit API – For image upload, transformation, and CDN delivery

# Deployment:

Frontend → Vercel or Netlify
Backend → Render, Railway, or Heroku
Database → MongoDB Atlas
ImageKit → Hosted externally
.env → Secure API keys and secrets