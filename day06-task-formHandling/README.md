# 🔐 Login & Register Toggle (useState)

## 📅 Due Date

**17 March 2026 (12:00 AM Midnight)**

## 🎯 Objective

Build a React application that toggles between a **Login** and **Register** form using the **useState** hook.

> ❌ No routing  
> ❌ No backend

---

## 🔗 Live Preview

https://task2-usestate.vercel.app/

---

## 🧠 Concepts Covered

- useState
- Conditional Rendering
- Props
- Functional Components

---

## 🛠️ What to Build

Create the following components inside `src/`:

```
src/
│
├── App.jsx
├── components/
│ ├── Login.jsx
│ └── Register.jsx
```

---

## 📄 Component Details

### 🧩 App.jsx

- Manages a boolean state using `useState`
- Conditionally renders **Login** or **Register**
- Passes `setToggle` as a prop to both components

---

### 🔑 Login.jsx

- Fields:
  - Email
  - Password
- Button:
  - Sign In
- Link:
  - "Sign up" → toggles to Register

---

### 📝 Register.jsx

- Fields:
  - Full Name
  - Email
  - Password
- Button:
  - Sign Up
- Link:
  - "Sign in" → toggles to Login

---

## ✅ Requirements

1. Show **Register form by default**
2. Use `useState` in **App.jsx only**
3. Pass `setToggle` as a prop to child components
4. Toggle state using:
   ```js
   setToggle((prev) => !prev);
   ```
