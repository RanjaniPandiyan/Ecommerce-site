# MERN Ecommerce Platform

A full-stack Ecommerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Features

* User Authentication
* Product Management
* Admin Dashboard
* Add to Cart
* Product Search & Filter
* Responsive Design
* REST API Integration

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Project Structure

```bash
client/   -> User frontend
admin/    -> Admin dashboard
server/   -> Backend API
```

## Installation

### Clone Repository

```bash
git clone https://github.com/RanjaniPandiyan/Ecommerce-site.git
```

### Install Dependencies

#### Client

```bash
cd client
npm install
npm run dev
```

#### Admin

```bash
cd admin
npm install
npm run dev
```

#### Server

```bash
cd server
npm install
npm start
```

## Environment Variables

Create `.env` file inside server folder:

```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
```

## Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

## Author

Ranjani Pandiyan
