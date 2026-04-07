import { Children, createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../instance/axiosInstance";
import { useUserData } from "./AuthContext";
import { load, save } from "../lib/LocalStorage";
import { showSuccessToast } from "../lib/toastUtil"

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [catagoryBifercation, setCatagoryBifercation] = useState({});
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const { user } = useUserData();
    const userKey = user?.id || user?.email || "guest";

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axiosInstance.get("/products?limit=30&skip=77");
            console.log("Res-=-=--=-=-=-=-=-=",res);
            
            setProducts(res.products);
            let catagoryData = getCatagories(res.products);
            setCatagoryBifercation(catagoryData);
        };

        const getCatagories = (data) => {
            const topCategory = data.length > 0 ? data.reduce((acc, h) => {
                acc[h.category] = (acc[h.category] || 0) + 1;
                return acc;
            }, {}) : "No data";
            return topCategory;
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        // load cart for current user
        const stored = load(`cart_${userKey}`) || [];
        setCart(stored);
    }, [userKey]);

    useEffect(() => {
        // load favorites for current user
        const storedFavorites = load(`favorites_${userKey}`) || [];
        setFavorites(storedFavorites);
    }, [userKey]);

    useEffect(() => {
        // persist cart for user
        save(`cart_${userKey}`, cart);
    }, [cart, userKey]);

    useEffect(() => {
        // persist favorites for user
        save(`favorites_${userKey}`, favorites);
    }, [favorites, userKey]);

    const items = {
        products,
        catagoryBifercation,
        cart,
        isCartOpen,
        favorites,
        addToCart: (item) => {
            setCart((prev) => {
                const exists = prev.find((p) => p.id === item.id);
                if (exists) {
                    return prev.map((p) =>
                        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                    );
                }
                return [...prev, { ...item, quantity: 1 }];
            });
            showSuccessToast("Added to cart");
            setIsCartOpen(true);
        },
        updateQuantity: (id, delta) => {
            setCart((prev) =>
                prev
                    .map((p) =>
                        p.id === id ? { ...p, quantity: p.quantity + delta } : p
                    )
                    .filter((p) => p.quantity > 0)
            );
        },
        removeFromCart: (id) => {
            setCart((prev) => prev.filter((p) => p.id !== id));
        },
        clearCart: () => setCart([]),
        toggleCart: (state) => setIsCartOpen((prev) => (typeof state === "boolean" ? state : !prev)),
        getCartCount: () => cart.reduce((sum, item) => sum + item.quantity, 0),
        getCartTotal: () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        toggleFavorite: (item) => {
            setFavorites((prev) => {
                const exists = prev.find((p) => p.id === item.id);
                if (exists) {
                    return prev.filter((p) => p.id !== item.id);
                }
                return [...prev, item];
            });
        },
        isFavorite: (id) => favorites.some((item) => item.id === id),
        isInCart: (id) => cart.some((item) => item.id === id),
    }

    return <ProductContext.Provider value={items}>
        {children}
    </ProductContext.Provider>
}

export const useProductData = () => useContext(ProductContext);