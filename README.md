<p align="center">
  <img width="200px" src="src/assets/img/logo.png" alt="Vue Jobs Logo">
  <br>
  <br>
  Job Listing Application with Vue 3 & TypeScript
</p>

# 💼 Vue Jobs - Learning Project

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-42b883.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg) ![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg) ![License](https://img.shields.io/badge/License-MIT-blue.svg)

A job listing application built with Vue 3 to practice modern frontend development concepts.

> **Note**: This is a learning project to explore Vue 3 features, TypeScript integration, and frontend best practices.

## 🎯 Project Overview

This application demonstrates a job board where users can browse listings, view details, and manage job postings. It's designed to showcase Vue 3 Composition API, TypeScript integration, and modern frontend architecture.

## 📚 Acknowledgements

<p align="center">
  <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA" target="_blank">
    <img src="https://img.youtube.com/vi/VeNfHj6MhgA/0.jpg" alt="Vue.js Crash Course by Traversy Media" width="320" height="180" border="10" />
  </a>
</p>

This project was created while learning from the excellent [Vue.js Crash Course](https://www.youtube.com/watch?v=VeNfHj6MhgA) by Traversy Media. Special thanks to Brad Traversy for the comprehensive tutorial that made learning Vue.js an enjoyable experience.

## ✨ Features

- 📋 **Job Board** - Browse through available job positions
- 🔍 **Job Details** - View comprehensive information about specific jobs
- ➕ **Add Jobs** - Create new job listings with a form
- ✏️ **Edit Jobs** - Modify existing job information
- 🧭 **Modern Routing** - Well-structured navigation with Vue Router
- 🔌 **API Integration** - Communication with a mock backend
- 🍞 **Toast Notifications** - User feedback system
- 📱 **Responsive Design** - Mobile-friendly UI with Tailwind CSS

## 🛠️ Tech Stack

### Frontend Framework

- **Vue 3** (v3.5) - The progressive JavaScript framework
  - Composition API with `<script setup>` syntax
  - Reactive state management
  - Component-based architecture

### Type Safety

- **TypeScript** - Static typing for better developer experience
  - Type-safe props with `defineProps<Props>()`
  - Interface-based type definitions

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework for rapid styling
  - Responsive design system
  - Custom utility classes

### Routing & State Management

- **Vue Router** (v4.5) - Official router for Vue.js applications
  - Route constants pattern
  - Nested routes and dynamic parameters

### API & Communication

- **Axios** - Promise-based HTTP client
  - Service layer abstraction
  - Centralized API configuration

### Developer Experience

- **Vite** - Next-generation frontend tooling
  - Fast HMR (Hot Module Replacement)
  - Optimized build process

### Backend Simulation

- **JSON Server** - Full fake REST API for prototyping

### UX Enhancements

- **Vue Toastification** - Toast notification system
- **Vue Spinner** - Loading indicators

## 📂 Project Structure

```
src/
├── assets/        # Static assets like CSS and images
├── components/    # Reusable Vue components
├── router/        # Vue Router configuration and route definitions
├── service/       # API services and backend communication
├── types/         # TypeScript type definitions and interfaces
├── views/         # Page components corresponding to routes
└── jobs.json      # Mock database for the JSON server
```

## 🚀 Setup and Installation

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Run the mock API server (in a separate terminal):

   ```sh
   npm run mock-server
   ```

4. Build for production:
   ```sh
   npm run build
   ```

## 📚 Learning Concepts

### 🧩 Vue 3 Composition API

- Component organization with `<script setup>`
- Reactive state with `ref` and `reactive`
- Lifecycle hooks with `onMounted`

### 🏗️ TypeScript Integration

- Type-safe props with `defineProps<Props>()`
- Using `withDefaults` for prop defaults
- Interface and type definitions

### 🧭 Routing Patterns

- Route constants for maintainability
- Dynamic route parameters
- Component-based routing

### 🔄 API Communication

- Service layer pattern
- Centralized API configuration
- Error handling with try/catch

### 🧪 Component Architecture

- Reusable components
- Props and emits for communication
- Composition pattern

## ⬇️ Development Notes

- Run the mock server for full functionality
- This project follows Vue 3 best practices
- Focus on clean, maintainable code organization

## 📝 License

This project is created for learning purposes and is not intended for production use.
