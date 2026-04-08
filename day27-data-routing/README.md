# 🔐 Protected Routes - Complete Notes

---

## 📌 What are Protected Routes?

Protected Routes are routes/pages that can only be accessed by **authenticated users**.

- If the user is not logged in → redirect to the **Login page**
- If the user is logged in → allow access

---

## ❓ Why Use Protected Routes?

- 🔒 Protect important pages (Dashboard, Profile, Admin Panel)
- 🚫 Stop unauthorized users
- 👍 Improve user experience

---

## ❓ Why do we need Protected Routes?

- Secure sensitive pages like **Dashboard, Profile, Admin Panel**
- Prevent unauthorized access
- Improve user experience with controlled navigation

---

## 🔄 Basic Flow

```
User tries to access a protected route
|
Check authentication (token / login state)
|
If authenticated → Allow access
Else → Redirect to login
```

## 🔄 How it Works (Simple Flow)

```
User opens a protected page
↓
Check: Is user logged in?
↓
Yes ✅ → Show page
No ❌ → Redirect to Login
```

---

## ⚛️ Implementation in React (React Router)

### 1️⃣ Create Auth Logic

Authentication can be stored in:

- State (useState / Context API)
- LocalStorage (token)
- Redux / Zustand (advanced)

#### Example:

```js
const isAuthenticated = localStorage.getItem("token");
```

## 2️⃣ Create Protected Route Component

```
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
```

## 3️⃣ Use in Routing

```
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

<Routes>
  <Route path="/login" element={<Login />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>
```

## ⚙️ How it Works

```
<ProtectedRoute> acts like a gatekeeper
It checks authentication:
❌ Not logged in → Redirect using <Navigate />
✅ Logged in → Render the child component
```

## 🔐 Advanced Version (Role-Based Protection)

```
const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};
```

## ✅ Example Usage

```
<Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <AdminPanel />
    </ProtectedRoute>
  }
/>
```
