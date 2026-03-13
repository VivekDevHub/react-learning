import React from "react";
import ProductCard from "./components/productCard/productCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "1999",
    category: "Electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGxi4ybL0FXWzoBRS-3Fr1Tmx73ttLZNfVw&s",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "2999",
    category: "Gadgets",
    image:
      "https://www.jiomart.com/images/product/original/rvnjwxmr8l/punnkfunnk-kids-smart-watch-1-44-tft-display-4g-sim-card-phone-with-long-lasting-voice-call-kids-gps-music-player-alarm-clock-games-ip67-waterproof-blue-product-images-orvnjwxmr8l-p608090268-0-202402191738.jpg?im=Resize=(420,420)",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "2499",
    category: "Fashion",
    image:
      "https://frenchcrown.in/cdn/shop/files/FT-188_2.jpg?v=1703652263&width=1750",
  },
];

const App = () => {
  return (
    <>
    <div>
      <h1 style={{textAlign:"center",padding:"20px"}}>Our Products</h1>
    </div>
      <div style={{display:"flex"}}>
        {products.map((product) => {
         return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default App;
