# 📚 Study Planner

**Study Planner** is a React-based productivity app for organizing study sessions in a simple, focused workflow. It is designed to help students plan tasks, track subjects, manage study duration, and maintain a structured daily learning routine.

The project is built with **Vite** and uses **React Context** for shared state management. Study records are persisted in **localStorage**, so tasks remain available after a page refresh.

---

## 🚀 Overview

This project is intended for managing study-related tasks such as:

- Adding new study tasks  
- Updating existing tasks  
- Removing tasks  
- Tracking study duration for each task  
- Organizing work by subject, date, and priority  
- Building toward advanced planner features like completion tracking and summary insights  

---

## 🛠️ Current Implementation

The current codebase already includes:

- React + Vite frontend setup  
- Shared context provider for study task state  
- localStorage persistence  
- Core task creation support  
- Update and delete handler logic in the context layer  

> ⚠️ The UI layer is still under development.  
> The next stage will focus on building components using **Tailwind CSS**.

---

## 🧰 Tech Stack

- React 19  
- Vite  
- React Context API  
- React Hook Form  
- Nano ID  
- ESLint  

---

## ✨ Features

### ✅ Implemented

- Local study task storage using browser localStorage  
- Centralized state management with Context API  
- Task structure includes:
  - `id`
  - `name`
  - `subject`
  - `duration`
  - `date`
  - `priority`

### 🔮 Planned / Expandable

- Mark tasks as completed  
- Show total study duration  
- Filter tasks by subject or priority  
- Search tasks quickly  
- Dashboard-style summary cards  
- Better form validation  
- Tailwind-based modern UI  

---

## 📁 Project Structure

```
study-session-planner/
│-- public/
│-- src/
│ │-- components/ # planned UI components
│ │-- context/
│ │ │-- ContextProvider.jsx
│ │ └-- studyContext.js
│ │-- App.jsx
│ │-- index.css
│ └-- main.jsx
│-- index.html
│-- package.json
└-- README.md


---

## ⚙️ Getting Started

### 📌 Prerequisites

- Node.js 18 or later  
- npm  

### 📥 Installation

```bash
npm install

### ▶️ Run Development Server

```bash
npm run dev

Open the local URL shown in the terminal after Vite starts.

### 📜 Available Scripts
npm run dev      # Starts development server
npm run build    # Builds for production
npm run preview  # Preview production build
npm run lint     # Run ESLint

### 🧠 How Data Is Managed

Study task data is handled through ContextProvider.jsx. The provider:

Initializes study data from localStorage
Adds new items with a generated unique ID
Updates existing items
Removes items from the list
Shares state and handlers via React Context

This structure makes it easy to scale the app with filters, analytics, and a complete UI in future.
