# 🌗 React Theme Context + Routing App (Notes)

---

## 📌 Project Overview

This project is a **React Single Page Application (SPA)** that demonstrates:

* 🌍 Global State Management using **Context API**
* 🔀 Client-side Routing using **React Router**
* 🌗 Dark / Light Theme Toggle
* 🎨 Modern UI using **Tailwind CSS**

---

## 🧠 Core Concepts Used

### 1. Context API

* Used to manage **global state**
* Avoids prop drilling
* Stores:

  * `theme` → current theme (dark/light)
  * `setTheme` → function to update theme

---

### 2. React Router

* Enables **navigation without page reload**
* Uses:

  * `BrowserRouter`
  * `Routes`
  * `Route`
  * `NavLink`
  * `useNavigate`

---

### 3. Tailwind CSS

* Utility-first CSS framework
* Used for:

  * Responsive design
  * Styling
  * Animations

---

## ⚙️ Project Flow

```
main.jsx
   ↓
ThemeProvider (Context)
   ↓
BrowserRouter
   ↓
App.jsx (Routing)
   ↓
Components (Navbar, Pages, Cards)
```

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── ProductCard.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🌗 Theme Context (Global State)

### Create Context

```jsx
import { createContext } from "react";

export const Theme = createContext();
```

---

### Provider Setup

```jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      {children}
    </Theme.Provider>
  );
};
```

---

### Access Data

```jsx
const { theme, setTheme } = useContext(Theme);
```

---

## 🔁 Theme Toggle Logic

```jsx
setTheme(prev => (prev === "light" ? "dark" : "light"));
```

* Switches between dark & light mode
* Updates UI instantly

---

## 🔀 Routing Setup

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product" element={<ProductCard />} />
</Routes>
```

---

## 🧭 Navigation (Navbar)

### NavLink Example

```jsx
<NavLink to="/home">Home</NavLink>
```

---

### Active Link Styling

```jsx
className={({ isActive }) =>
  isActive ? "text-pink-500" : "text-gray-500"
}
```

---

### Programmatic Navigation

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

onClick={() => navigate("/")}
```

---

## 🛍️ Product Card

* Displays:

  * Image
  * Product Name
  * Price
  * Buttons (Update / Delete)

### Dynamic Styling

```jsx
theme === "dark"
  ? "bg-black text-white"
  : "bg-white text-black"
```

---

## 🎨 Styling Highlights

* Gradient Backgrounds
* Glassmorphism Navbar
* Hover Animations
* Smooth Transitions

Example:

```jsx
className="hover:scale-105 transition-all duration-500"
```


---

## 🎯 Key Learnings

* ✅ Context API for global state
* ✅ useContext hook
* ✅ React Router for SPA navigation
* ✅ NavLink for active links
* ✅ useNavigate for dynamic routing
* ✅ Conditional styling for UI

---

## 🚀 Future Improvements

* 💾 Save theme in LocalStorage
* 📱 Make UI responsive
* 🌐 Add API integration
* 🛒 Add Cart functionality
* 🎬 Add animations (Framer Motion)

---

## 🛠️ Installation

```bash
git clone <your-repo-url>
cd project-name
npm install
npm run dev
```
---
## 💡 Final Thought

👉 *"Context API + Routing = Strong React Foundation"*

This project builds your base for real-world React development 🚀
