# GuidanceConnect

**GuidanceConnect** is a web platform designed to connect individuals seeking guidance with providers through an intuitive video call scheduling system. The platform simplifies the process of booking, managing, and conducting online sessions, offering a user-friendly interface and role-based functionalities for both seekers and providers.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributors](#contributors)

## Introduction

GuidanceConnect serves as a bridge between people who need expert advice (guidance seekers) and professionals who offer guidance (providers). The platform is built to handle the complexities of scheduling video calls, sending reminders, and managing user roles. Whether you're looking for career advice, tutoring, or coaching, GuidanceConnect provides a secure and efficient way to connect.

## Features

GuidanceConnect comes packed with features to ensure seamless communication between users:

- **Video Call Scheduling**: Users can schedule one-on-one video calls with providers based on available time slots.
- **Role-Based Access**: The platform supports two distinct user roles:
  - **Guidance Seekers**: Individuals seeking advice can browse available providers and book sessions.
  - **Providers**: Professionals offering guidance can manage their schedules, accept or reject appointments, and conduct video sessions.
- **Authentication & Security**: Powered by **ClerkAuth**, GuidanceConnect ensures secure login, registration, and user data management.
- **Interactive Dashboard**: Both seekers and providers have access to personalized dashboards where they can view upcoming appointments, manage schedules, and receive notifications.
- **Mobile-Responsive Design**: The platform is fully responsive, ensuring users have an optimized experience across devices.
- **Integration with MongoDB**: All user and session data is stored in a robust and scalable MongoDB database.

## Tech Stack

GuidanceConnect utilizes modern technologies to deliver a fast, secure, and scalable application:

- **Next.js**: A powerful framework for server-rendered React applications, offering performance benefits like SSR (Server-Side Rendering) and SSG (Static Site Generation).
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **MongoDB**: A NoSQL database known for its scalability and flexibility in handling unstructured data.
- **Tailwind CSS**: A utility-first CSS framework that allows rapid UI development with pre-defined classes for styling.
- **ClerkAuth**: A user management and authentication service that handles everything from user registration to role-based access.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins, allowing optimizations such as autoprefixing and minification.

## Installation

To set up the project locally, follow these instructions:

1. **Clone the Repository**:
   Clone the project to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/guidanceconnect.git
   cd guidanceconnect
   ```

2. **Install Dependencies**:
   Use the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Copy the `.env.example` file to create a `.env` file:

   ```bash
   cp .env.example .env
   ```

   Modify the `.env` file with the appropriate values for your local setup, including the MongoDB connection string and ClerkAuth API keys.

4. **Run the Development Server**:
   Start the Next.js development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Configuration

The application requires several environment variables to be configured in the `.env` file:

- **MongoDB Connection**: Set the MongoDB URI to connect to your database:
  ```bash
  MONGODB_URI=mongodb://localhost:27017/guidanceconnect`

  ```

## ClerkAuth API Keys

Add your ClerkAuth API keys to enable user authentication:

CLERK_API_KEY=your_clerk_api_key  
CLERK_FRONTEND_API=your_clerk_frontend_api

These settings ensure proper integration with MongoDB and the Clerk authentication system.

## Usage

After installing and configuring the project, you can begin using **GuidanceConnect** by running the development server. Below are some typical user scenarios:

### Guidance Seekers:

- Browse the list of available providers.
- Schedule a video call session based on the provider's availability.
- Manage appointments via the user dashboard, where they can view upcoming sessions and receive notifications.

### Providers:

- Manage availability by setting available time slots for seekers to book.
- View upcoming appointments, accept or reject bookings, and conduct video calls within the platform.

The application is designed to provide a streamlined experience, with notifications sent via email for important actions like booking confirmations and session reminders.

## Dependencies

The project relies on the following core dependencies, all of which are listed in the `package.json` file:

- **next**: The core framework for building server-rendered React apps.
- **react**: The base library for building user interfaces.
- **mongodb**: Official MongoDB Node.js driver for connecting and interacting with MongoDB.
- **clerk**: Authentication and user management service that simplifies secure login and session handling.
- **tailwindcss**: Utility-first CSS framework for designing custom UI components.
- **typescript**: Enhances JavaScript with strong typing for improved developer productivity.

To view the full list of dependencies, consult the `package-lock.json` file.

## Contributors

- Aakash Bagale
- Abhinav Acharya
- Nishchit Bhandari
- Sudip Bashyal

This project is open to contributions. If you'd like to contribute, please fork the repository, create a feature branch, and submit a pull request with a description of your changes.
