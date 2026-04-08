# 🛍️ React Product Card Page 

---

## 🎯 Objective

Build a **Product Card Listing Page** using React that displays multiple products with details like image, name, category, price, and an **"Add To Cart"** button.

---

## 🔗 Live Demo

https://task-1-react-nine.vercel.app/

---

## 📌 Task Description

Recreate the product card UI by observing the given live link carefully and building it from scratch using React.

---

## 🛠️ Tech Stack

- React.js (with Vite)  
- JavaScript (ES6+)  
- HTML5 & CSS3  

---

## 🧠 Concepts Covered

- **Components** → Reusable UI blocks  
- **Props** → Passing data from parent to child  
- **Props Drilling** → Data flow from App → ProductCard  
- **JSX** → Writing UI inside JavaScript  
- **CSS Styling** → External CSS for design  

---

## 🧩 Features

- Centered heading **"Our Products"**  
- 3 product cards displayed side-by-side  
- Each card includes:
  - Product Image  
  - Product Name  
  - Category  
  - Price  
  - "Add To Cart" button  

---

## 📂 Folder Structure
```
src/
│
├── App.jsx
├── main.jsx
├── index.css
│
└── components/
└── productCard/
├── ProductCard.jsx
└── ProductCard.css
```


---

## 📦 Product Data (Example)

```js
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "1999",
    category: "Electronics",
    image: "image-url"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "2999",
    category: "Gadgets",
    image: "image-url"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "2499",
    category: "Fashion",
    image: "image-url"
  }
];
```

## 📤 Submission Guidelines

- Push code to **GitHub repository**  
- Deploy on:
  - Vercel  
  - Netlify  
  - GitHub Pages  

### 📎 Submit
- GitHub Repo Link  
- Live Project Link  

---

## 💡 Tips

- Observe the UI carefully before coding  
- Create **ProductCard component first**  
- Use **flexbox** for horizontal alignment  
- Add **hover effects** for better UI  
- Keep code clean and structured  

---

## 🎉 Outcome

After completing this task, you will:

- Understand component-based architecture  
- Learn props & data flow  
- Build responsive product UI  
- Improve frontend structuring skills  