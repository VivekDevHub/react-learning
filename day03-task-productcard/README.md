
# Components in React

## Definition

A **Component** in React is a **reusable, independent piece of UI**. It allows developers to divide the UI into smaller parts that can be reused and maintained easily.

React applications are built using **multiple components that combine to form a complete UI**.

Example:

- Navbar
- Sidebar
- Footer
- Product Card
- Button

Each of these can be a **separate component**.

---

## Types of Components

### 1. Functional Components

A **JavaScript function** that returns JSX.

Example:

```
functionGreeting() {
return<h1>Hello User</h1>;
}
```

Arrow Function version:

```
constGreeting= () => {
return<h1>Hello User</h1>;
};
```

Characteristics:

- Simple
- Lightweight
- Mostly used in modern React
- Can use **Hooks (useState, useEffect)**

---

### 2. Class Components

Older way of creating components using ES6 classes.

Example:

```
importReact, {Component }from"react";

classGreetingextendsComponent {
  render() {
return<h1>Hello User</h1>;
  }
}
```

Characteristics:

- Uses lifecycle methods
- More complex
- Mostly replaced by functional components with hooks

---

## Key Features of Components

1. **Reusability**
2. **Separation of Concerns**
3. **Maintainability**
4. **Better Code Organization**

---

## Example Structure

```
App
 ├── Navbar
 ├── HeroSection
 ├── ProductList
 │     └── ProductCard
 └── Footer
```

Each part is a **separate component**.

---
